/* ==========================================================================
   ECP Manager — Central ECP System for All EchoPlex Games
   Version: 1.0
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. CONFIGURATION
    // ============================================================

    const STORAGE_KEY = 'echoplex_ecp_data';
    const DEFAULT_ECP = 200;

    // ============================================================
    // 2. ECP DATA STRUCTURE
    // ============================================================

    /*
        {
            ecp: 200,
            totalEarned: 0,
            totalSpent: 0,
            lastUpdated: timestamp,
            history: [
                { amount: 30, reason: 'Mind Mania - Correct answer', timestamp: 1234567890 },
                { amount: -50, reason: 'Word Scramble - Hint used', timestamp: 1234567890 }
            ]
        }
    */

    // ============================================================
    // 3. CORE FUNCTIONS
    // ============================================================

    /**
     * Get the current ECP data from localStorage
     * @returns {Object} The ECP data object
     */
    function getECPData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const data = JSON.parse(raw);
                // Ensure all required fields exist
                if (typeof data.ecp !== 'number') data.ecp = DEFAULT_ECP;
                if (typeof data.totalEarned !== 'number') data.totalEarned = 0;
                if (typeof data.totalSpent !== 'number') data.totalSpent = 0;
                if (!data.history || !Array.isArray(data.history)) data.history = [];
                return data;
            }
        } catch (e) {
            console.warn('Failed to parse ECP data, using defaults:', e);
        }
        return {
            ecp: DEFAULT_ECP,
            totalEarned: 0,
            totalSpent: 0,
            history: []
        };
    }

    /**
     * Save ECP data to localStorage
     * @param {Object} data - The ECP data object to save
     */
    function saveECPData(data) {
        try {
            data.lastUpdated = Date.now();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            // Dispatch event so other tabs/pages can sync
            window.dispatchEvent(new StorageEvent('storage', {
                key: STORAGE_KEY,
                newValue: JSON.stringify(data)
            }));
        } catch (e) {
            console.warn('Failed to save ECP data:', e);
        }
    }

    /**
     * Get the current ECP balance
     * @returns {number} The current ECP balance
     */
    function getECP() {
        const data = getECPData();
        return data.ecp;
    }

    /**
     * Add ECP to the user's balance
     * @param {number} amount - Amount to add (positive number)
     * @param {string} reason - Reason for earning ECP
     * @returns {number} The new balance
     */
    function addECP(amount, reason = 'Earned ECP') {
        if (typeof amount !== 'number' || amount <= 0) {
            console.warn('addECP: amount must be a positive number');
            return getECP();
        }

        const data = getECPData();
        data.ecp += amount;
        data.totalEarned += amount;
        data.history.push({
            amount: amount,
            reason: reason,
            timestamp: Date.now()
        });

        // Keep history manageable (last 100 entries)
        if (data.history.length > 100) {
            data.history = data.history.slice(-100);
        }

        saveECPData(data);
        dispatchECPEvent('earned', amount, reason);
        return data.ecp;
    }

    /**
     * Spend ECP from the user's balance
     * @param {number} amount - Amount to spend (positive number)
     * @param {string} reason - Reason for spending ECP
     * @returns {number} The new balance, or -1 if insufficient funds
     */
    function spendECP(amount, reason = 'Spent ECP') {
        if (typeof amount !== 'number' || amount <= 0) {
            console.warn('spendECP: amount must be a positive number');
            return getECP();
        }

        const data = getECPData();

        if (data.ecp < amount) {
            console.warn('spendECP: Insufficient ECP. Have:', data.ecp, 'Need:', amount);
            return -1;
        }

        data.ecp -= amount;
        data.totalSpent += amount;
        data.history.push({
            amount: -amount,
            reason: reason,
            timestamp: Date.now()
        });

        // Keep history manageable (last 100 entries)
        if (data.history.length > 100) {
            data.history = data.history.slice(-100);
        }

        saveECPData(data);
        dispatchECPEvent('spent', amount, reason);
        return data.ecp;
    }

    /**
     * Check if the user has enough ECP
     * @param {number} amount - Amount to check
     * @returns {boolean} True if user has enough ECP
     */
    function hasECP(amount) {
        const data = getECPData();
        return data.ecp >= amount;
    }

    /**
     * Get the user's total ECP earned (lifetime)
     * @returns {number} Total ECP earned
     */
    function getTotalEarned() {
        const data = getECPData();
        return data.totalEarned;
    }

    /**
     * Get the user's total ECP spent (lifetime)
     * @returns {number} Total ECP spent
     */
    function getTotalSpent() {
        const data = getECPData();
        return data.totalSpent;
    }

    /**
     * Get the user's ECP history
     * @param {number} limit - Maximum number of entries to return (default: 20)
     * @returns {Array} Array of history entries (newest first)
     */
    function getECPHistory(limit = 20) {
        const data = getECPData();
        return data.history.slice(-limit).reverse();
    }

    /**
     * Reset ECP to default (use with caution!)
     * @param {number} amount - Amount to reset to (default: DEFAULT_ECP)
     */
    function resetECP(amount = DEFAULT_ECP) {
        const data = {
            ecp: amount,
            totalEarned: 0,
            totalSpent: 0,
            history: []
        };
        saveECPData(data);
        dispatchECPEvent('reset', amount, 'ECP reset');
    }

    /**
     * Dispatch a custom event for ECP changes
     * @param {string} type - Type of event ('earned', 'spent', 'reset')
     * @param {number} amount - Amount involved
     * @param {string} reason - Reason for the change
     */
    function dispatchECPEvent(type, amount, reason) {
        const event = new CustomEvent('ecpChange', {
            detail: {
                type: type,
                amount: amount,
                reason: reason,
                balance: getECP()
            }
        });
        window.dispatchEvent(event);
    }

    // ============================================================
    // 4. UI HELPER FUNCTIONS
    // ============================================================

    /**
     * Update all ECP displays on the page
     * Looks for elements with class 'ecp-display' or data-ecp attribute
     */
    function updateAllECPDisplays() {
        const balance = getECP();
        const elements = document.querySelectorAll('.ecp-display, [data-ecp]');

        elements.forEach(el => {
            if (el.classList.contains('ecp-display')) {
                // Update the numeric part (assuming format "ECP: 200")
                const text = el.textContent;
                const match = text.match(/^([\s\S]*?)(\d+)([\s\S]*?)$/);
                if (match) {
                    el.textContent = match[1] + balance + match[3];
                } else {
                    el.textContent = text + balance;
                }
            } else if (el.hasAttribute('data-ecp')) {
                el.textContent = balance;
            }
        });
    }

    /**
     * Create a formatted ECP display string
     * @param {number} amount - Amount to display
     * @param {boolean} showIcon - Whether to show the coin icon
     * @returns {string} Formatted display string
     */
    function formatECP(amount, showIcon = true) {
        const icon = showIcon ? '🪙 ' : '';
        return `${icon}${amount} ECP`;
    }

    /**
     * Get a color for ECP amount (green for positive, red for negative)
     * @param {number} amount - Amount to check
     * @returns {string} CSS color value
     */
    function getECPColor(amount) {
        if (amount > 0) return '#34d399';
        if (amount < 0) return '#f43f5e';
        return '#b8b0d8';
    }

    // ============================================================
    // 5. EVENT LISTENERS
    // ============================================================

    // Listen for ECP changes and update UI
    window.addEventListener('ecpChange', (e) => {
        updateAllECPDisplays();
        console.log(`ECP ${e.detail.type}: ${e.detail.amount} (${e.detail.reason}) | Balance: ${e.detail.balance}`);
    });

    // Listen for storage changes from other tabs
    window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
            updateAllECPDisplays();
        }
    });

    // Update displays on page load and visibility change
    document.addEventListener('DOMContentLoaded', updateAllECPDisplays);
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            updateAllECPDisplays();
        }
    });

    // ============================================================
    // 6. GAME-SPECIFIC HELPERS
    // ============================================================

    /**
     * Standard ECP costs for game features
     */
    const ECP_COSTS = {
        // Mind Mania
        MIND_MANIA_HINT: 50,
        MIND_MANIA_REVEAL: 100,
        MIND_MANIA_TIMEOUT: 5,
        MIND_MANIA_WRONG: 3,

        // Word Scramble
        SCRAMBLE_HINT: 20,
        SCRAMBLE_REVEAL: 40,
        SCRAMBLE_WRONG: 3,

        // Roll & Flip
        ROLL_FLIP_MIN_STAKE: 1,

        // General
        ACHIEVEMENT_REWARD: 50,
        LEVEL_COMPLETE: 50,
        CORRECT_ANSWER: 30
    };

    /**
     * Standard ECP rewards for game actions
     */
    const ECP_REWARDS = {
        CORRECT_ANSWER: 30,
        LEVEL_COMPLETE: 50,
        ACHIEVEMENT: 50,
        WORD_FOUND: 30,
        GAME_WIN: 50
    };

    // ============================================================
    // 7. EXPOSE TO GLOBAL SCOPE
    // ============================================================

    window.ECP = {
        // Core functions
        get: getECP,
        add: addECP,
        spend: spendECP,
        has: hasECP,
        reset: resetECP,

        // Stats
        getTotalEarned: getTotalEarned,
        getTotalSpent: getTotalSpent,
        getHistory: getECPHistory,
        getData: getECPData,

        // UI Helpers
        updateDisplays: updateAllECPDisplays,
        format: formatECP,
        getColor: getECPColor,

        // Constants
        COSTS: ECP_COSTS,
        REWARDS: ECP_REWARDS,

        // Debug
        _debug: {
            STORAGE_KEY: STORAGE_KEY,
            DEFAULT_ECP: DEFAULT_ECP
        }
    };

    // ============================================================
    // 8. CONSOLE EASTER EGG
    // ============================================================

    console.log('%c🪙 ECP Manager Loaded', 'font-size: 18px; font-weight: 700; color: #fbbf24;');
    console.log(`%cCurrent Balance: ${getECP()} ECP`, 'font-size: 14px; color: #b8b0d8;');
    console.log('%c📖 Available: ECP.get(), ECP.add(), ECP.spend(), ECP.has()', 'font-size: 12px; color: #6f6390;');
    console.log('%c🔧 ECP.COSTS and ECP.REWARDS for game integration', 'font-size: 12px; color: #6f6390;');

    // ============================================================
    // 9. INITIALIZATION
    // ============================================================

    // Ensure default data exists
    const data = getECPData();
    if (typeof data.ecp !== 'number') {
        data.ecp = DEFAULT_ECP;
        saveECPData(data);
    }

    updateAllECPDisplays();

})();