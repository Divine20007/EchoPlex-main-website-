document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const currentEcpDisplay = document.getElementById('currentEcp');
    const gameIntroScreen = document.getElementById('gameIntroScreen');
    const gamePlayScreen = document.getElementById('gamePlayScreen');
    const themeScreen = document.getElementById('themeScreen');
    const achievementsScreen = document.getElementById('achievementsScreen');
    // NEW: History Screen DOM references
    const historyScreen = document.getElementById('historyScreen');
    const earningHistoryTableBody = document.querySelector('#earningHistoryTable tbody');
    const noHistoryMessage = document.getElementById('noHistoryMessage');

    const startGameButton = document.getElementById('startGameButton');
    const themeButton = document.getElementById('themeButton');
    const achievementsButton = document.getElementById('achievementsButton');
    // NEW: History Button DOM reference
    const historyButton = document.getElementById('historyButton');

    const backToIntroButton = document.getElementById('backToIntroButton');
    const backToIntroFromThemeButton = document.getElementById('backToIntroFromThemeButton');
    const backToIntroFromAchievementsButton = document.getElementById('backToIntroFromAchievementsButton');
    // NEW: Back button from History screen
    const backToIntroFromHistoryButton = document.getElementById('backToIntroFromHistoryButton');

    const stakeAmountInput = document.getElementById('stakeAmount');
    const leverageInput = document.getElementById('leverage');
    const playerChoiceSelect = document.getElementById('playerChoice');
    const coinFlipButton = document.getElementById('coinFlipButton');
    const diceRollButton = document.getElementById('diceRollButton');
    const resultDisplay = document.getElementById('resultDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const ecpChangeDisplay = document.getElementById('ecpChangeDisplay');
    const themeGrid = document.querySelector('.theme-grid');
    const achievementsList = document.querySelector('.achievements-list');
    const shareButton = document.getElementById('shareButton');

    // --- Game State Variables (Persisted to Local Storage) ---
    let currentEcp = 200; // Starting ECP
    const MAX_LEVERAGE = 40; // Maximum multiplier

    // Game statistics to track progress for achievements
    let gameStats = {
        totalCoinFlips: 0,
        totalDiceRolls: 0,
        consecutiveWins: 0,
        maxConsecutiveWins: 0,
        totalEcpEarned: 0,
        totalEcpLost: 0,
        highLeverageWins: 0, // Wins with 10x leverage or higher
        highLeverageLosses: 0, // Losses with 10x leverage or higher
        screensVisited: new Set(['gameIntroScreen']), // Use Set for unique visits, convert to array for storage
        totalWins: 0,
        totalLosses: 0,
        firstTryWinThisSession: true, // For 'Golden Guess' achievement
    };

    // NEW: Earning History Array
    let earningHistory = []; // Array to store history of game rounds

    // Achievement Data - CRITICAL FIX: Added 'reward' property and correct icons
    const achievementsData = [
        { id: 'firstFlip', name: 'First Flip!', description: 'Complete your very first coin flip.', threshold: 1, current: 0, unlocked: false, icon: 'fas fa-star', type: 'coin', reward: 50 },
        { id: 'diceRookie', name: 'Dice Rookie', description: 'Roll the dice 10 times.', threshold: 10, current: 0, unlocked: false, icon: 'fas fa-dice-three', type: 'dice', reward: 50 },
        { id: 'luckyStreak', name: 'Lucky Streak', description: 'Achieve 3 consecutive correct guesses.', threshold: 3, current: 0, unlocked: false, icon: 'fas fa-fire', type: 'stat', reward: 50 },
        { id: 'ecpTycoon', name: 'ECP Tycoon', description: 'Accumulate 1000 ECP.', threshold: 1000, current: 0, unlocked: false, icon: 'fas fa-money-bill-wave', type: 'stat', reward: 50 },
        { id: 'highRoller', name: 'High Roller', description: 'Win a bet with 40x leverage.', threshold: 1, current: 0, unlocked: false, icon: 'fas fa-hand-holding-usd', type: 'stat', reward: 50 },
        { id: 'pathfinder', name: 'Pathfinder', description: 'Visit all 4 game screens.', threshold: 4, current: 0, unlocked: false, icon: 'fas fa-compass', type: 'stat', reward: 50 }, // MODIFIED: now 5 screens
        { id: 'riskTaker', name: 'Risk Taker', description: 'Lose 5 bets with 10x leverage or higher.', threshold: 5, current: 0, unlocked: false, icon: 'fas fa-skull-crossbones', type: 'stat', reward: 50 },
        { id: 'echoKingQueen', name: 'Echo King/Queen', description: 'Win 50 total bets.', threshold: 50, current: 0, unlocked: false, icon: 'fas fa-crown', type: 'stat', reward: 50 },
        { id: 'goldenGuess', name: 'Golden Guess', description: 'Win your very first game try in a new session.', threshold: 1, current: 0, unlocked: false, icon: 'fas fa-award', type: 'stat', reward: 50 },
        { id: 'completionist', name: 'Completionist', description: 'Unlock all other 9 achievements.', threshold: 9, current: 0, unlocked: false, icon: 'fas fa-star-of-david', type: 'stat', reward: 100 } // Higher reward for completionist
    ];

    // Theme Data - CRITICAL FIX: Ensure 'id' matches HTML body class suffix
    const themes = [
        { id: 'sci-fi-dark', name: 'Sci-Fi Dark', preview: 'https://i.supaimg.com/f6335090-37be-4cf8-a2f1-40f564f041f8.jpg' }, // Replace with actual image paths
        { id: 'retro-green', name: 'Retro Green', preview: 'https://i.supaimg.com/cbaaf0f2-7ee9-4159-ad03-f038055054b7.jpg' },
        { id: 'cyber-punk', name: 'Cyber Punk', preview: 'https://i.supaimg.com/a387c0cc-febe-4018-8b43-fad589e7a40f.jpg' },
        { id: 'galactic-blue', name: 'Galactic Blue', preview: 'https://i.supaimg.com/ac5b4b65-54ed-4056-a19a-ce3d24eef933.jpg' },
        { id: 'lava-red', name: 'Lava Red', preview: 'https://i.supaimg.com/4b8cb28f-dfbc-412c-800a-270e2fee390c.jpg' }
    ];
    let activeThemeId = 'sci-fi-dark'; // Default theme

    // --- Utility Functions ---

    /**
     * Shows a message to the user for a brief period.
     * @param {string} message - The message to display.
     * @param {string} type - 'success', 'error', or empty for general info.
     * @param {number} duration - How long to display the message in ms.
     */
    function showFeedback(message, type = '', duration = 3000) {
        feedbackMessage.textContent = message;
        feedbackMessage.className = 'feedback-message'; // Reset classes
        if (type) {
            feedbackMessage.classList.add(type);
        }
        clearTimeout(feedbackMessage.timeoutId);
        feedbackMessage.timeoutId = setTimeout(() => {
            feedbackMessage.textContent = '';
            feedbackMessage.className = 'feedback-message'; // Clear type class
        }, duration);
    }

    /**
     * Displays ECP change with color coding.
     * @param {number} amount - The amount of ECP changed.
     */
    function showEcpChange(amount) {
        ecpChangeDisplay.textContent = `${amount > 0 ? '+' : ''}${amount} ECP`;
        ecpChangeDisplay.className = 'ecp-change-message'; // Reset classes
        if (amount > 0) {
            ecpChangeDisplay.classList.add('positive');
        } else if (amount < 0) {
            ecpChangeDisplay.classList.add('negative');
        }
        clearTimeout(ecpChangeDisplay.timeoutId);
        ecpChangeDisplay.timeoutId = setTimeout(() => {
            ecpChangeDisplay.textContent = '';
            ecpChangeDisplay.className = 'ecp-change-message';
        }, 3000);
    }

    /**
     * Updates the displayed ECP balance.
     */
    function updateEcpDisplay() {
        currentEcpDisplay.textContent = currentEcp;
    }

    /**
     * Adds ECP to the player's balance and updates display.
     * @param {number} amount - Amount of ECP to add.
     */
    function addEcp(amount) {
        currentEcp += amount;
        gameStats.totalEcpEarned += amount;
        updateEcpDisplay();
        saveGameStats();
        checkAchievements('ecpTycoon'); // Check ECP related achievement
    }

    /**
     * Subtracts ECP from the player's balance and updates display.
     * @param {number} amount - Amount of ECP to subtract.
     */
    function subtractEcp(amount) {
        currentEcp -= amount;
        gameStats.totalEcpLost += amount;
        updateEcpDisplay();
        saveGameStats();
    }

    /**
     * Switches the active game screen.
     * @param {HTMLElement} screenToShow - The screen element to make active.
     */
    function switchScreen(screenToShow) {
        const allScreens = document.querySelectorAll('.game-screen');
        allScreens.forEach(screen => {
            screen.classList.remove('active-screen');
            screen.classList.add('hidden-screen'); // Ensure it's explicitly hidden
        });
        screenToShow.classList.remove('hidden-screen');
        screenToShow.classList.add('active-screen');
        gameStats.screensVisited.add(screenToShow.id); // Track visited screens for achievement
        checkAchievements('pathfinder');
        saveGameStats(); // Save stats after screen change
    }

    /**
     * Saves all game data to Local Storage.
     * MODIFIED: Now saves earningHistory too.
     */
    function saveGameStats() {
        localStorage.setItem('echoplexEcp', currentEcp);
        // Convert Set to Array for storing gameStats.screensVisited
        const gameStatsToSave = {
            ...gameStats,
            screensVisited: Array.from(gameStats.screensVisited)
        };
        localStorage.setItem('echoplexGameStats', JSON.stringify(gameStatsToSave));
        localStorage.setItem('echoplexAchievements', JSON.stringify(achievementsData));
        localStorage.setItem('echoplexTheme', activeThemeId);
        // NEW: Save earning history
        localStorage.setItem('echoplexEarningHistory', JSON.stringify(earningHistory));
    }

    /**
     * Loads all game data from Local Storage.
     * MODIFIED: Now loads earningHistory too.
     */
    function loadGameStats() {
        const savedEcp = localStorage.getItem('echoplexEcp');
        if (savedEcp !== null) {
            currentEcp = parseInt(savedEcp, 10);
        }

        const savedStats = localStorage.getItem('echoplexGameStats');
        if (savedStats) {
            const loadedStats = JSON.parse(savedStats);
            // Convert Array back to Set for screensVisited
            gameStats = {
                ...loadedStats,
                screensVisited: new Set(loadedStats.screensVisited || ['gameIntroScreen']) // Ensure default is present
            };
        }

        const savedAchievements = localStorage.getItem('echoplexAchievements');
        if (savedAchievements) {
            const loadedAchievements = JSON.parse(savedAchievements);
            // Merge loaded achievements with default structure to prevent missing new achievements
            achievementsData.forEach(defaultAch => {
                const loadedAch = loadedAchievements.find(a => a.id === defaultAch.id);
                if (loadedAch) {
                    // Update only relevant properties, keeping new default properties
                    defaultAch.current = loadedAch.current || 0;
                    defaultAch.unlocked = loadedAch.unlocked || false;
                }
            });
        }

        const savedTheme = localStorage.getItem('echoplexTheme');
        if (savedTheme) {
            activeThemeId = savedTheme;
        }

        // NEW: Load earning history
        const savedHistory = localStorage.getItem('echoplexEarningHistory');
        if (savedHistory) {
            earningHistory = JSON.parse(savedHistory);
        }
    }

    /**
     * Applies the selected theme to the body.
     * @param {string} themeId - The ID of the theme to apply.
     */
    function applyTheme(themeId) {
        // Remove all existing theme classes from body
        document.body.classList.forEach(className => {
            if (className.endsWith('-theme')) {
                document.body.classList.remove(className);
            }
        });
        // Add the new theme class
        document.body.classList.add(`${themeId}-theme`);
        activeThemeId = themeId;
        saveGameStats();
        renderThemes(); // Re-render themes to update "Current" badge
    }

    /**
     * Renders all theme options in the theme selection screen.
     */
    function renderThemes() {
        themeGrid.innerHTML = '';
        themes.forEach(theme => {
            const themeOptionDiv = document.createElement('div');
            themeOptionDiv.classList.add('theme-option');
            if (theme.id === activeThemeId) {
                themeOptionDiv.classList.add('active-theme-selected'); // Add class for active theme
            }

            themeOptionDiv.innerHTML = `
                <img src="${theme.preview}" alt="${theme.name} Theme Preview">
                <h3>${theme.name}</h3>
                <button class="action-button secondary-button apply-theme-button" data-theme-id="${theme.id}">
                    ${theme.id === activeThemeId ? 'Current' : 'Apply'}
                </button>
            `;
            themeGrid.appendChild(themeOptionDiv);

            // Add event listener to the apply button
            const applyButton = themeOptionDiv.querySelector('.apply-theme-button');
            if (theme.id === activeThemeId) {
                applyButton.disabled = true; // Disable "Current" button
            }
            applyButton.addEventListener('click', () => applyTheme(theme.id));
        });
    }

    /**
     * Checks achievement progress and unlocks if thresholds are met.
     * @param {string} achievementId - Optional: check a specific achievement.
     */
    function checkAchievements(achievementId = null) {
        let achievementsToCheck = achievementsData;
        if (achievementId) {
            achievementsToCheck = achievementsData.filter(ach => ach.id === achievementId);
        }

        // MODIFIED: Pathfinder now checks 5 screens
        const pathfinderAch = achievementsData.find(a => a.id === 'pathfinder');
        if (pathfinderAch) {
            pathfinderAch.threshold = 5; // Update threshold if it changes
            if (!pathfinderAch.unlocked && gameStats.screensVisited.size >= pathfinderAch.threshold) {
                 pathfinderAch.current = gameStats.screensVisited.size;
                 pathfinderAch.unlocked = true;
                 if (pathfinderAch.reward && pathfinderAch.reward > 0) {
                    addEcp(pathfinderAch.reward);
                    showFeedback(`🏆 Achievement Unlocked: ${pathfinderAch.name}! +${pathfinderAch.reward} ECP!`, 'success');
                 } else {
                    showFeedback(`🏆 Achievement Unlocked: ${pathfinderAch.name}!`, 'success');
                 }
            } else if (!pathfinderAch.unlocked) {
                 pathfinderAch.current = gameStats.screensVisited.size;
            }
        }


        let totalUnlockedCount = 0; // Track for completionist

        achievementsData.forEach(ach => { // Iterate through all achievements, not just ones to check
            if (ach.unlocked) {
                if (ach.id !== 'completionist') { // Don't count completionist itself for this tally
                    totalUnlockedCount++;
                }
                return; // Skip already unlocked achievements
            }

            let progressUpdated = false;

            switch (ach.id) {
                case 'firstFlip':
                    if (gameStats.totalCoinFlips > ach.current) { ach.current = gameStats.totalCoinFlips; progressUpdated = true; }
                    break;
                case 'diceRookie':
                    if (gameStats.totalDiceRolls > ach.current) { ach.current = gameStats.totalDiceRolls; progressUpdated = true; }
                    break;
                case 'luckyStreak':
                    if (gameStats.maxConsecutiveWins > ach.current) { ach.current = gameStats.maxConsecutiveWins; progressUpdated = true; }
                    break;
                case 'ecpTycoon':
                    // Current ECP is the "current" for this achievement, but it's a "threshold" achievement
                    if (currentEcp >= ach.threshold && !ach.unlocked) {
                        ach.current = currentEcp;
                        progressUpdated = true;
                    } else if (currentEcp < ach.threshold && ach.unlocked) { // If ECP drops below threshold after unlocking
                        ach.unlocked = false; // Relock achievement
                        showFeedback(`Achievement Relocked: ${ach.name} (ECP below ${ach.threshold})`, 'error');
                        progressUpdated = true;
                    }
                    break;
                case 'highRoller':
                    if (gameStats.highLeverageWins > ach.current) { ach.current = gameStats.highLeverageWins; progressUpdated = true; }
                    break;
                case 'riskTaker':
                    if (gameStats.highLeverageLosses > ach.current) { ach.current = gameStats.highLeverageLosses; progressUpdated = true; }
                    break;
                case 'echoKingQueen':
                    if (gameStats.totalWins > ach.current) { ach.current = gameStats.totalWins; progressUpdated = true; }
                    break;
                case 'goldenGuess':
                    // This is handled by a flag in handleGameRound and checked there
                    break;
                case 'pathfinder':
                    // Handled specifically above to avoid conflicting with generic loop
                    break;
                case 'completionist':
                    // Handled specifically below
                    break;
            }

            if (ach.current >= ach.threshold && !ach.unlocked) {
                ach.unlocked = true;
                if (ach.id !== 'completionist') { // Increment count only if it's not completionist
                    totalUnlockedCount++;
                }
                if (ach.reward && ach.reward > 0) {
                    addEcp(ach.reward);
                    showFeedback(`🏆 Achievement Unlocked: ${ach.name}! +${ach.reward} ECP!`, 'success');
                } else {
                    showFeedback(`🏆 Achievement Unlocked: ${ach.name}!`, 'success');
                }
                progressUpdated = true;
            } else if (progressUpdated) {
                saveGameStats(); // Save if progress but not unlock (e.g. current increases)
            }
        });

        // Check for Completionist after all others are processed
        const completionistAch = achievementsData.find(a => a.id === 'completionist');
        if (completionistAch && !completionistAch.unlocked) {
            completionistAch.current = totalUnlockedCount; // Update current count for display
            if (completionistAch.current >= completionistAch.threshold) {
                completionistAch.unlocked = true;
                if (completionistAch.reward && completionistAch.reward > 0) {
                    addEcp(completionistAch.reward);
                    showFeedback(`🌟 Achievement Unlocked: ${completionistAch.name}! +${completionistAch.reward} ECP!`, 'success');
                } else {
                    showFeedback(`🌟 Achievement Unlocked: ${completionistAch.name}!`, 'success');
                }
            }
        }
        renderAchievements(); // Always re-render achievements after checking
        saveGameStats(); // Ensure all changes are saved
    }


    /**
     * Renders all achievement items in the achievements screen.
     */
    function renderAchievements() {
        achievementsList.innerHTML = '';
        achievementsData.forEach(ach => {
            const achievementItemDiv = document.createElement('div');
            achievementItemDiv.classList.add('achievement-item');

            const iconClass = ach.unlocked ? 'unlocked' : 'locked';
            const iconHtml = `<div class="achievement-icon ${iconClass}"><i class="${ach.icon}"></i></div>`;

            // For Pathfinder, display screens visited / total screens
            let progressText = ach.unlocked ? 'Unlocked!' : `(${ach.current}/${ach.threshold})`;
            if (ach.id === 'pathfinder' && !ach.unlocked) {
                progressText = `(${gameStats.screensVisited.size}/${ach.threshold})`;
            }

            achievementItemDiv.innerHTML = `
                ${iconHtml}
                <div class="achievement-details">
                    <h3>${ach.name} <span class="progress-text">${progressText}</span></h3>
                    <p>${ach.description}</p>
                    ${ach.reward ? `<p class="reward-text">Reward: ${ach.reward} ECP</p>` : ''}
                </div>
            `;
            achievementsList.appendChild(achievementItemDiv);
        });
    }

    /**
     * Updates the enabled/disabled state of the play buttons based on selected guess.
     * CRITICAL FIX: Ensures only relevant play button is active.
     */
    function updatePlayButtonState() {
        const selectedValue = playerChoiceSelect.value;
        const isCoinGuess = ['heads', 'tails'].includes(selectedValue);
        const isDiceGuess = ['1', '2', '3', '4', '5', '6'].includes(selectedValue);

        coinFlipButton.classList.toggle('disabled-button', !isCoinGuess);
        diceRollButton.classList.toggle('disabled-button', !isDiceGuess);

        coinFlipButton.disabled = !isCoinGuess;
        diceRollButton.disabled = !isDiceGuess;
    }

    // NEW: Function to log history entry
    function logHistoryEntry(entry) {
        // Limit history to a reasonable number, e.g., 50 entries
        const MAX_HISTORY_ENTRIES = 50;
        earningHistory.unshift(entry); // Add to the beginning of the array (newest first)
        if (earningHistory.length > MAX_HISTORY_ENTRIES) {
            earningHistory.pop(); // Remove the oldest entry if over limit
        }
        saveGameStats(); // Save history immediately
    }

    // NEW: Function to render history table
    function renderHistory() {
        earningHistoryTableBody.innerHTML = ''; // Clear existing entries

        if (earningHistory.length === 0) {
            noHistoryMessage.style.display = 'block';
            return;
        } else {
            noHistoryMessage.style.display = 'none';
        }

        // Sort history by timestamp (newest first)
        const sortedHistory = [...earningHistory].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        sortedHistory.forEach(entry => {
            const row = earningHistoryTableBody.insertRow();
            
            const dateTime = new Date(entry.timestamp).toLocaleString();
            const gameTypeDisplay = entry.gameType === 'coin' ? 'Coin Flip' : 'Dice Roll';
            const playerChoiceDisplay = entry.playerChoice.charAt(0).toUpperCase() + entry.playerChoice.slice(1);
            const outcomeDisplay = String(entry.outcome).charAt(0).toUpperCase() + String(entry.outcome).slice(1);
            const stakeDisplay = entry.stake;
            const leverageDisplay = `${entry.leverage}x`;
            const changeDisplay = `${entry.result > 0 ? '+' : ''}${entry.result}`;
            const resultDisplay = entry.result > 0 ? 'Win' : 'Loss';
            const resultClass = entry.result > 0 ? 'outcome-win' : 'outcome-loss';
            const changeClass = entry.result > 0 ? 'positive' : 'negative';

            row.insertCell().textContent = dateTime;
            row.insertCell().textContent = gameTypeDisplay;
            row.insertCell().textContent = playerChoiceDisplay;
            row.insertCell().textContent = outcomeDisplay;
            row.insertCell().textContent = stakeDisplay;
            row.insertCell().textContent = leverageDisplay;
            const changeCell = row.insertCell();
            changeCell.textContent = changeDisplay;
            changeCell.classList.add(changeClass);
            const resultCell = row.insertCell();
            resultCell.textContent = resultDisplay;
            resultCell.classList.add(resultClass);
        });
    }


    // --- Game Logic ---

    /**
     * Handles a single round of the game (coin flip or dice roll).
     * @param {string} gameType - 'coin' or 'dice'.
     * MODIFIED: Now logs history entry.
     */
    function handleGameRound(gameType) {
        const stake = parseInt(stakeAmountInput.value);
        const leverage = parseInt(leverageInput.value);
        const playerChoice = playerChoiceSelect.value;

        // Input Validation
        if (isNaN(stake) || stake <= 0) {
            showFeedback('Please enter a valid stake amount.', 'error');
            return;
        }
        if (stake > currentEcp) {
            showFeedback('Insufficient ECP!', 'error');
            return;
        }
        if (isNaN(leverage) || leverage < 1 || leverage > MAX_LEVERAGE) { // Enforce max leverage
            showFeedback(`Leverage must be between 1 and ${MAX_LEVERAGE}.`, 'error');
            return;
        }
        if (!playerChoice) {
            showFeedback('Please choose a guess (Heads, Tails, or a Dice Number).', 'error');
            return;
        }

        // CRITICAL FIX: Ensure gameType matches playerChoice type
        if (gameType === 'coin' && !['heads', 'tails'].includes(playerChoice)) {
            showFeedback('You selected a Coin Flip but your guess is for Dice.', 'error');
            return;
        }
        if (gameType === 'dice' && !['1', '2', '3', '4', '5', '6'].includes(playerChoice)) {
            showFeedback('You selected a Dice Roll but your guess is for Coin.', 'error');
            return;
        }

        subtractEcp(stake); // Deduct stake immediately

        let outcome;
        let win = false;
        let resultText = '';
        let ecpChange = -stake; // Initialize ECP change as the stake lost

        if (gameType === 'coin') {
            outcome = Math.random() < 0.5 ? 'heads' : 'tails';
            win = (playerChoice === outcome);
            resultText = `Flipped: ${outcome.charAt(0).toUpperCase() + outcome.slice(1)}`;
            gameStats.totalCoinFlips++;
            checkAchievements('firstFlip');
        } else { // gameType === 'dice'
            outcome = Math.floor(Math.random() * 6) + 1; // 1-6
            win = (parseInt(playerChoice) === outcome);
            resultText = `Rolled: ${outcome}`;
            gameStats.totalDiceRolls++;
            checkAchievements('diceRookie');
        }

        resultDisplay.textContent = resultText;

        if (win) {
            const winnings = stake * leverage;
            addEcp(winnings + stake); // Return stake + winnings
            ecpChange = winnings; // Actual profit
            showFeedback('🎉 You Win!', 'success');
            showEcpChange(winnings);
            gameStats.consecutiveWins++;
            gameStats.totalWins++;
            if (leverage >= 10) { // Update high leverage wins
                gameStats.highLeverageWins++;
                checkAchievements('highRoller'); // Check for high roller
            }
            if (gameStats.firstTryWinThisSession) {
                const goldenGuessAch = achievementsData.find(a => a.id === 'goldenGuess');
                if (goldenGuessAch && !goldenGuessAch.unlocked) { // Only check if not already unlocked
                    goldenGuessAch.unlocked = true;
                    if (goldenGuessAch.reward && goldenGuessAch.reward > 0) {
                        addEcp(goldenGuessAch.reward);
                        showFeedback(`🏆 Achievement Unlocked: ${goldenGuessAch.name}! +${goldenGuessAch.reward} ECP!`, 'success');
                    } else {
                        showFeedback(`🏆 Achievement Unlocked: ${goldenGuessAch.name}!`, 'success');
                    }
                }
                gameStats.firstTryWinThisSession = false; // Only one chance per session
            }
        } else {
            showFeedback('😔 You Lose!', 'error');
            showEcpChange(-stake); // Show the loss
            gameStats.consecutiveWins = 0; // Reset consecutive wins
            gameStats.totalLosses++;
            if (leverage >= 10) { // Update high leverage losses
                gameStats.highLeverageLosses++;
                checkAchievements('riskTaker'); // Check for risk taker
            }
        }

        gameStats.maxConsecutiveWins = Math.max(gameStats.maxConsecutiveWins, gameStats.consecutiveWins);
        checkAchievements('luckyStreak');
        checkAchievements('echoKingQueen');
        saveGameStats();

        // NEW: Log this round to history
        logHistoryEntry({
            type: win ? 'win' : 'loss',
            stake: stake,
            leverage: leverage,
            result: ecpChange, // Actual ECP profit/loss for the round
            timestamp: new Date().toISOString(), // ISO string for easy sorting/storage
            gameType: gameType,
            playerChoice: playerChoice,
            outcome: outcome,
            startingEcp: currentEcp + (win ? (stake - ecpChange) : stake) // ECP before this round
        });
    }

    // --- Event Listeners ---
    startGameButton.addEventListener('click', () => switchScreen(gamePlayScreen));
    themeButton.addEventListener('click', () => { switchScreen(themeScreen); renderThemes(); });
    achievementsButton.addEventListener('click', () => { switchScreen(achievementsScreen); renderAchievements(); });
    // NEW: Event listener for history button
    historyButton.addEventListener('click', () => { switchScreen(historyScreen); renderHistory(); });


    backToIntroButton.addEventListener('click', () => switchScreen(gameIntroScreen));
    backToIntroFromThemeButton.addEventListener('click', () => switchScreen(gameIntroScreen));
    backToIntroFromAchievementsButton.addEventListener('click', () => switchScreen(gameIntroScreen));
    // NEW: Event listener for back button from history screen
    backToIntroFromHistoryButton.addEventListener('click', () => switchScreen(gameIntroScreen));

    coinFlipButton.addEventListener('click', () => handleGameRound('coin'));
    diceRollButton.addEventListener('click', () => handleGameRound('dice'));

    // CRITICAL FIX: Listen for changes on the player choice select to update button states
    playerChoiceSelect.addEventListener('change', updatePlayButtonState);

    // Initial disable of buttons until a choice is made
    coinFlipButton.disabled = true;
    diceRollButton.disabled = true;
    coinFlipButton.classList.add('disabled-button');
    diceRollButton.classList.add('disabled-button');

    // Share Button Logic
    shareButton.addEventListener('click', () => {
        const shareText = `I'm playing EchoPlex: Roll & Flip and have ${currentEcp} ECP! Can you beat my score?`;
        if (navigator.share) {
            navigator.share({
                title: 'EchoPlex: Roll & Flip',
                text: shareText,
                url: window.location.href // Shares the current page URL
            }).catch((error) => console.error('Error sharing:', error));
        } else {
            // Fallback for browsers that do not support navigator.share
            navigator.clipboard.writeText(shareText).then(() => {
                showFeedback('ECP copied to clipboard!', 'success');
            }).catch(err => {
                showFeedback('Failed to copy ECP to clipboard.', 'error');
                console.error('Could not copy text: ', err);
            });
        }
    });

    // --- Initialization ---
    function initializeGame() {
        loadGameStats(); // Load all saved data first
        updateEcpDisplay(); // Update ECP display based on loaded data
        applyTheme(activeThemeId); // Apply the loaded theme
        renderThemes(); // Render themes initially
        renderAchievements(); // Render achievements initially
        // MODIFIED: Pathfinder achievement needs to know all possible screens
        const allPossibleScreens = new Set([
            'gameIntroScreen', 'gamePlayScreen', 'themeScreen', 'achievementsScreen', 'historyScreen'
        ]);
        achievementsData.find(a => a.id === 'pathfinder').threshold = allPossibleScreens.size;

        switchScreen(gameIntroScreen); // Always start on the intro screen
        
        // Initial check for Pathfinder as intro screen is visited on load
        gameStats.screensVisited.add('gameIntroScreen');
        checkAchievements('pathfinder');
        
        // Ensure max leverage is enforced on input
        leverageInput.max = MAX_LEVERAGE;
    }

    initializeGame();
});

