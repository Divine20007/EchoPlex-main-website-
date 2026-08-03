/* ==========================================================================
   Roll & Flip — Complete JavaScript (FINAL)
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. DOM REFS
    // ============================================================

    const introScreen = document.getElementById('introScreen');
    const menuScreen = document.getElementById('menuScreen');
    const gameScreen = document.getElementById('gameScreen');

    const achievementsModal = document.getElementById('achievementsModal');
    const themeModal = document.getElementById('themeModal');
    const historyModal = document.getElementById('historyModal');

    const playBtn = document.getElementById('playBtn');
    const achievementsBtn = document.getElementById('achievementsBtn');
    const themeBtn = document.getElementById('themeBtn');
    const historyBtn = document.getElementById('historyBtn');
    const startGameBtn = document.getElementById('startGameBtn');
    const backToMenuFromGameBtn = document.getElementById('backToMenuFromGameBtn');
    const backToIntroFromMenuBtn = document.getElementById('backToIntroFromMenuBtn');

    const diceModeBtn = document.getElementById('diceModeBtn');
    const coinModeBtn = document.getElementById('coinModeBtn');

    const diceControls = document.getElementById('diceControls');
    const coinControls = document.getElementById('coinControls');

    // Dice inputs
    const stakeInput = document.getElementById('stakeInput');
    const leverageInput = document.getElementById('leverageInput');
    const diceCount = document.getElementById('diceCount');
    const diceGuess = document.getElementById('diceGuess');
    const diceBetType = document.getElementById('diceBetType');
    const rollDiceBtn = document.getElementById('rollDiceBtn');

    // Coin inputs
    const coinStakeInput = document.getElementById('coinStakeInput');
    const coinLeverageInput = document.getElementById('coinLeverageInput');
    const coinCount = document.getElementById('coinCount');
    const coinBetType = document.getElementById('coinBetType');
    const coinGuess = document.getElementById('coinGuess');
    const flipCoinBtn = document.getElementById('flipCoinBtn');

    const resultEmoji = document.getElementById('resultEmoji');
    const resultText = document.getElementById('resultText');
    const ecpChangeDisplay = document.getElementById('ecpChangeDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');

    const ecpDisplay = document.getElementById('ecpDisplay');
    const ecpGameDisplay = document.getElementById('ecpGameDisplay');

    const achievementsList = document.getElementById('achievementsList');
    const themeGrid = document.getElementById('themeGrid');
    const statWins = document.getElementById('statWins');
    const statLosses = document.getElementById('statLosses');
    const statHighestEcp = document.getElementById('statHighestEcp');
    const historyBody = document.getElementById('historyBody');
    const noHistoryMessage = document.getElementById('noHistoryMessage');

    const achievementsClose = document.getElementById('achievementsClose');
    const themeClose = document.getElementById('themeClose');
    const historyClose = document.getElementById('historyClose');

    const shareGameBtn = document.getElementById('shareGameBtn');
    const progressBar = document.getElementById('scrollProgress');

    // ============================================================
    // 2. GAME STATE
    // ============================================================

    let gameState = {
        totalWins: 0,
        totalLosses: 0,
        highestEcp: 200,
        currentTheme: 'default',
        achievements: {},
        history: [],
        totalCoinFlips: 0,
        totalDiceRolls: 0
    };

    let currentStreak = 0;
    let currentMode = 'dice';

    // ============================================================
    // 3. ECP FUNCTIONS
    // ============================================================

    function getECP() {
        return ECP.get();
    }

    function addEcp(amount, reason) {
        const newBalance = ECP.add(amount, reason || 'Roll & Flip reward');
        updateAllEcp();
        return newBalance;
    }

    function deductEcp(amount, reason) {
        const newBalance = ECP.spend(amount, reason || 'Roll & Flip cost');
        if (newBalance === -1) {
            feedbackMessage.textContent = 'Not enough ECP!';
            feedbackMessage.className = 'feedback-message error';
            return false;
        }
        updateAllEcp();
        return true;
    }

    function updateAllEcp() {
        const val = getECP();
        if (ecpDisplay) ecpDisplay.textContent = val;
        if (ecpGameDisplay) ecpGameDisplay.textContent = val;
        if (val > gameState.highestEcp) {
            gameState.highestEcp = val;
            saveGame();
        }
    }

    // ============================================================
    // 4. THEMES & ACHIEVEMENTS
    // ============================================================

    const themes = [
        { id: 'default', name: 'Cosmic' },
        { id: 'ocean', name: 'Ocean' },
        { id: 'forest', name: 'Forest' },
        { id: 'cyberpunk', name: 'Cyberpunk' },
        { id: 'sunset', name: 'Sunset' }
    ];

    const achievementsData = [
        { id: 'first_flip', name: 'First Flip!', unlocked: false },
        { id: 'first_roll', name: 'First Roll!', unlocked: false },
        { id: 'lucky_streak_3', name: 'Lucky Streak (3 wins)', unlocked: false },
        { id: 'lucky_streak_5', name: 'Lucky Streak (5 wins)', unlocked: false },
        { id: 'lucky_streak_10', name: 'Lucky Streak (10 wins)', unlocked: false },
        { id: 'high_roller', name: 'High Roller (40x win)', unlocked: false },
        { id: 'ecp_100', name: 'ECP Novice (100 ECP)', unlocked: false },
        { id: 'ecp_500', name: 'ECP Apprentice (500 ECP)', unlocked: false },
        { id: 'ecp_1000', name: 'ECP Master (1000 ECP)', unlocked: false },
        { id: 'win_10', name: '10 Wins', unlocked: false },
        { id: 'win_50', name: '50 Wins', unlocked: false },
        { id: 'win_100', name: '100 Wins', unlocked: false },
        { id: 'share_roll', name: 'Share the Luck', unlocked: false }
    ];

    // ============================================================
    // 5. SAVE / LOAD
    // ============================================================

    function saveGame() {
        localStorage.setItem('rollFlipGame', JSON.stringify(gameState));
        localStorage.setItem('rollFlipAchievements', JSON.stringify(achievementsData));
    }

    function loadGame() {
        const saved = localStorage.getItem('rollFlipGame');
        if (saved) {
            const parsed = JSON.parse(saved);
            gameState = { ...gameState, ...parsed };
        }
        const savedAchievements = localStorage.getItem('rollFlipAchievements');
        if (savedAchievements) {
            const parsed = JSON.parse(savedAchievements);
            achievementsData.forEach((ach, i) => {
                if (parsed[i]) ach.unlocked = parsed[i].unlocked;
            });
        }
        updateAllEcp();
    }

    // ============================================================
    // 6. SCREEN MANAGEMENT
    // ============================================================

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    function showModal(modal) { modal.classList.add('active'); }
    function hideModal(modal) { modal.classList.remove('active'); }

    // ============================================================
    // 7. MODE SWITCHING
    // ============================================================

    function switchMode(mode) {
        currentMode = mode;
        diceModeBtn.classList.toggle('btn-mode--active', mode === 'dice');
        coinModeBtn.classList.toggle('btn-mode--active', mode === 'coin');
        diceControls.style.display = mode === 'dice' ? 'grid' : 'none';
        coinControls.style.display = mode === 'coin' ? 'grid' : 'none';
        resultEmoji.textContent = mode === 'dice' ? '🎲' : '🪙';
        resultText.textContent = 'Place your bet and make a guess!';
        resultText.className = '';
        ecpChangeDisplay.textContent = '';
        ecpChangeDisplay.className = 'ecp-change';
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback-message';
    }

    // ============================================================
    // 8. DICE UI HELPERS
    // ============================================================

    function updateDiceGuessOptions() {
        const numDice = parseInt(diceCount.value);
        const betType = diceBetType.value;
        const guessSelect = diceGuess;
        const isExact = betType === 'exact' || betType === 'exact_sum';

        if (betType === '') {
            guessSelect.disabled = true;
            guessSelect.innerHTML = '<option value="">Select a bet type first...</option>';
            return;
        }

        if (isExact) {
            guessSelect.disabled = false;
            const maxVal = numDice * 6;
            const minVal = numDice;
            let options = `<option value="">Select a number (${minVal}-${maxVal})...</option>`;
            for (let i = minVal; i <= maxVal; i++) {
                options += `<option value="${i}">${i}</option>`;
            }
            guessSelect.innerHTML = options;
        } else {
            guessSelect.disabled = true;
            guessSelect.innerHTML = `<option value="">Guess disabled for this bet type</option>`;
        }
    }

    function updateStakeMax() {
        const leverage = parseInt(leverageInput.value) || 1;
        const maxStake = Math.floor(100000 / leverage);
        stakeInput.max = maxStake;
        if (parseInt(stakeInput.value) > maxStake) {
            stakeInput.value = maxStake;
        }
        stakeInput.placeholder = `Max ${maxStake}`;
    }

    // ============================================================
    // 9. GAME LOGIC — DICE
    // ============================================================

    function rollDice() {
        const stake = parseInt(stakeInput.value);
        const leverage = parseInt(leverageInput.value);
        const numDice = parseInt(diceCount.value);
        const betType = diceBetType.value;
        const guess = parseInt(diceGuess.value);

        // Validations
        if (isNaN(stake) || stake <= 0) {
            feedbackMessage.textContent = 'Please enter a valid stake!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }
        if (stake > getECP()) {
            feedbackMessage.textContent = 'Not enough ECP!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        const maxStake = Math.floor(100000 / leverage);
        if (stake > maxStake) {
            feedbackMessage.textContent = `Max stake for ${leverage}x leverage is ${maxStake} ECP!`;
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        if (isNaN(leverage) || leverage < 1 || leverage > 100) {
            feedbackMessage.textContent = 'Leverage must be between 1 and 100!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }
        if (!betType) {
            feedbackMessage.textContent = 'Please select a bet type!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        // For exact bets, validate guess
        const isExactBet = betType === 'exact' || betType === 'exact_sum';
        if (isExactBet && (isNaN(guess) || guess < numDice || guess > numDice * 6)) {
            feedbackMessage.textContent = `Please select a valid number (${numDice}-${numDice*6})!`;
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        deductEcp(stake, 'Roll & Flip - Dice Stake');

        // Roll dice
        const rolls = [];
        let total = 0;
        for (let i = 0; i < numDice; i++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            rolls.push(roll);
            total += roll;
        }

        // Determine win
        let win = false;
        let outcomeDisplay = '';

        switch (betType) {
            case 'exact':
                win = total === guess;
                outcomeDisplay = `${rolls.join(', ')}`;
                break;
            case 'even':
                win = total % 2 === 0;
                outcomeDisplay = `${rolls.join(', ')}`;
                break;
            case 'odd':
                win = total % 2 !== 0;
                outcomeDisplay = `${rolls.join(', ')}`;
                break;
            case 'over3':
                win = total > 3;
                outcomeDisplay = `${rolls.join(', ')}`;
                break;
            case 'under4':
                win = total < 4;
                outcomeDisplay = `${rolls.join(', ')}`;
                break;
            case 'between1_4':
                win = total >= 1 && total <= 4;
                outcomeDisplay = `${rolls.join(', ')}`;
                break;
            case 'exact_sum':
                win = total === guess;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'over10':
                win = total > 10;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'under11':
                win = total < 11;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'between2_8':
                win = total >= 2 && total <= 8;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'between9_12':
                win = total >= 9 && total <= 12;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'between13_18':
                win = total >= 13 && total <= 18;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'even_sum':
                win = total % 2 === 0;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            case 'odd_sum':
                win = total % 2 !== 0;
                outcomeDisplay = `${rolls.join(', ')} = ${total}`;
                break;
            default:
                win = false;
        }

        let ecpChange = 0;

        // Show result
        const animEl = document.querySelector('.result-animation');
        animEl.className = 'result-animation roll';

        // Build dice display with Unicode dice faces
        const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        let diceDisplay = '';
        if (numDice === 1) {
            diceDisplay = `<span class="dice-face">${diceFaces[rolls[0]-1]}</span>`;
        } else if (numDice === 2) {
            diceDisplay = `<span class="dice-face">${diceFaces[rolls[0]-1]}</span> <span class="dice-face">${diceFaces[rolls[1]-1]}</span>`;
        } else {
            diceDisplay = `<span class="dice-face">${diceFaces[rolls[0]-1]}</span> <span class="dice-face">${diceFaces[rolls[1]-1]}</span> <span class="dice-face">${diceFaces[rolls[2]-1]}</span>`;
        }
        resultEmoji.innerHTML = diceDisplay;

        if (win) {
            const winnings = stake * leverage;
            addEcp(winnings + stake, 'Roll & Flip - Dice Win');
            ecpChange = winnings;
            gameState.totalWins++;
            currentStreak++;
            resultText.className = 'win';
            resultText.textContent = `✅ (${outcomeDisplay}) YOU WIN!`;
            ecpChangeDisplay.className = 'ecp-change positive';
            ecpChangeDisplay.textContent = `+${winnings} ECP`;
            feedbackMessage.textContent = '🎉 Congratulations!';
            feedbackMessage.className = 'feedback-message success';

            if (leverage >= 40) unlockAchievement('high_roller');
            if (currentStreak >= 3) unlockAchievement('lucky_streak_3');
            if (currentStreak >= 5) unlockAchievement('lucky_streak_5');
            if (currentStreak >= 10) unlockAchievement('lucky_streak_10');
            if (gameState.totalWins >= 10) unlockAchievement('win_10');
            if (gameState.totalWins >= 50) unlockAchievement('win_50');
            if (gameState.totalWins >= 100) unlockAchievement('win_100');
        } else {
            ecpChange = -stake;
            gameState.totalLosses++;
            currentStreak = 0;
            resultText.className = 'loss';
            resultText.textContent = `❌ (${outcomeDisplay}) YOU LOSE!`;
            ecpChangeDisplay.className = 'ecp-change negative';
            ecpChangeDisplay.textContent = `-${stake} ECP`;
            feedbackMessage.textContent = '😞 Better luck next time!';
            feedbackMessage.className = 'feedback-message error';
        }

        // History
        gameState.history.unshift({
            gameType: 'dice',
            guess: `${numDice} dice ${betType} ${guess || ''}`,
            outcome: rolls.join(','),
            stake: stake,
            leverage: leverage,
            result: ecpChange,
            win: win,
            timestamp: new Date().toISOString()
        });
        if (gameState.history.length > 100) gameState.history = gameState.history.slice(0, 100);

        gameState.totalDiceRolls = (gameState.totalDiceRolls || 0) + 1;
        if (gameState.totalDiceRolls === 1) unlockAchievement('first_roll');

        checkAchievements();
        saveGame();

        setTimeout(() => {
            animEl.className = 'result-animation';
        }, 800);
    }

    function updateDiceBetTypes() {
    const numDice = parseInt(diceCount.value);
    const betTypeSelect = diceBetType;
    const currentValue = betTypeSelect.value;

    // Store the current selected value
    const selectedValue = currentValue;

    // Clear all options
    betTypeSelect.innerHTML = '<option value="">Select Bet Type</option>';

    // Add 1 Die options
    const group1 = document.createElement('optgroup');
    group1.label = '1 Die';
    const group1Options = ['exact', 'even', 'odd', 'over3', 'under4', 'between1_4'];
    const group1Labels = ['Exact Number', 'Even', 'Odd', 'Over 3', 'Under 4', 'Between 1-4'];
    group1Options.forEach((val, i) => {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = group1Labels[i];
        group1.appendChild(opt);
    });
    betTypeSelect.appendChild(group1);

    // Add 2-3 Dice options
    const group2 = document.createElement('optgroup');
    group2.label = '2-3 Dice';
    const group2Options = ['exact_sum', 'over10', 'under11', 'between2_8', 'between9_12', 'between13_18', 'even_sum', 'odd_sum'];
    const group2Labels = ['Exact Sum', 'Over 10', 'Under 11', 'Between 2-8', 'Between 9-12', 'Between 13-18', 'Even Sum', 'Odd Sum'];
    group2Options.forEach((val, i) => {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = group2Labels[i];
        group2.appendChild(opt);
    });
    betTypeSelect.appendChild(group2);

    // Show/hide groups based on dice count
    if (numDice === 1) {
        group1.style.display = '';
        group2.style.display = 'none';
    } else {
        group1.style.display = 'none';
        group2.style.display = '';
    }

    // Restore selected value if still valid
    if (selectedValue) {
        const options = betTypeSelect.querySelectorAll('option');
        let found = false;
        options.forEach(opt => {
            if (opt.value === selectedValue) {
                found = true;
            }
        });
        if (found) {
            betTypeSelect.value = selectedValue;
        } else {
            betTypeSelect.value = '';
        }
    }
}

    // ============================================================
    // 10. COIN UI HELPERS
    // ============================================================

    function updateCoinGuessOptions() {
        const numCoins = parseInt(coinCount.value);
        const betType = coinBetType.value;
        const guessSelect = coinGuess;

        if (betType === '') {
            guessSelect.disabled = true;
            guessSelect.innerHTML = '<option value="">Select a bet type first...</option>';
            return;
        }

        if (numCoins === 1) {
            guessSelect.disabled = false;
            guessSelect.innerHTML = `<option value="">Select outcome...</option><option value="heads">Heads</option><option value="tails">Tails</option>`;
        } else {
            if (betType === 'exact') {
                guessSelect.disabled = false;
                guessSelect.innerHTML = `<option value="">Select outcome...</option><option value="HH">Heads-Heads</option><option value="HT">Heads-Tails</option><option value="TH">Tails-Heads</option><option value="TT">Tails-Tails</option>`;
            } else {
                guessSelect.disabled = true;
                guessSelect.innerHTML = `<option value="">Guess disabled for this bet type</option>`;
            }
        }
    }

    function updateCoinStakeMax() {
        const leverage = parseInt(coinLeverageInput.value) || 1;
        const maxStake = Math.floor(100000 / leverage);
        coinStakeInput.max = maxStake;
        if (parseInt(coinStakeInput.value) > maxStake) {
            coinStakeInput.value = maxStake;
        }
        coinStakeInput.placeholder = `Max ${maxStake}`;
    }

    // ============================================================
    // 11. GAME LOGIC — COIN FLIP
    // ============================================================

    function flipCoin() {
        const stake = parseInt(coinStakeInput.value);
        const leverage = parseInt(coinLeverageInput.value);
        const numCoins = parseInt(coinCount.value);
        const betType = coinBetType.value;
        const guess = coinGuess.value;

        // Validations
        if (isNaN(stake) || stake <= 0) {
            feedbackMessage.textContent = 'Please enter a valid stake!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }
        if (stake > getECP()) {
            feedbackMessage.textContent = 'Not enough ECP!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        const maxStake = Math.floor(100000 / leverage);
        if (stake > maxStake) {
            feedbackMessage.textContent = `Max stake for ${leverage}x leverage is ${maxStake} ECP!`;
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        if (isNaN(leverage) || leverage < 1 || leverage > 100) {
            feedbackMessage.textContent = 'Leverage must be between 1 and 100!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }
        if (!betType) {
            feedbackMessage.textContent = 'Please select a bet type!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }
        if (betType === 'exact' && !guess) {
            feedbackMessage.textContent = 'Please select your guess!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        deductEcp(stake, 'Roll & Flip - Coin Stake');

        // Random hidden difficulty
        const ratios = [
            { heads: 4, tails: 7 },
            { heads: 0.1, tails: 10 },
            { heads: 10, tails: 0.1 },
            { heads: 3, tails: 5 },
            { heads: 1, tails: 2 },
            { heads: 2, tails: 1 },
            { heads: 5, tails: 3 },
            { heads: 7, tails: 4 }
        ];
        const ratio = ratios[Math.floor(Math.random() * ratios.length)];

        let outcomes = [];
        let win = false;
        let outcomeDisplay = '';

        if (numCoins === 1) {
            const rand = Math.random() * (ratio.heads + ratio.tails);
            const outcome = rand < ratio.heads ? 'heads' : 'tails';
            outcomes = [outcome];
            outcomeDisplay = outcome.charAt(0).toUpperCase() + outcome.slice(1);
            win = guess === outcome;
        } else {
            const outcomes2 = [];
            for (let i = 0; i < 2; i++) {
                const r = Math.random() * (ratio.heads + ratio.tails);
                outcomes2.push(r < ratio.heads ? 'heads' : 'tails');
            }
            outcomes = outcomes2;
            const resultStr = outcomes.map(o => o === 'heads' ? 'H' : 'T').join('');
            outcomeDisplay = resultStr;

            if (betType === 'exact') {
                win = guess === resultStr;
            } else if (betType === 'any_heads') {
                win = outcomes.some(o => o === 'heads');
            } else if (betType === 'any_tails') {
                win = outcomes.some(o => o === 'tails');
            } else if (betType === 'both_same') {
                win = outcomes[0] === outcomes[1];
            }
        }

        let ecpChange = 0;

        // Coin animation
        const animEl = document.querySelector('.result-animation');
        animEl.className = 'result-animation flip';

        let coinDisplay = '';
        if (numCoins === 1) {
            coinDisplay = `<span class="coin-face">${outcomes[0] === 'heads' ? '👑' : '🪙'}</span>`;
        } else {
            const results = outcomes.map(o => o === 'heads' ? '👑' : '🪙').join(' ');
            coinDisplay = `<span class="coin-face">${results}</span>`;
        }
        resultEmoji.innerHTML = coinDisplay;

        if (win) {
            const winnings = stake * leverage;
            addEcp(winnings + stake, 'Roll & Flip - Coin Win');
            ecpChange = winnings;
            gameState.totalWins++;
            currentStreak++;
            resultText.className = 'win';
            resultText.textContent = `✅ (${outcomeDisplay}) YOU WIN!`;
            ecpChangeDisplay.className = 'ecp-change positive';
            ecpChangeDisplay.textContent = `+${winnings} ECP`;
            feedbackMessage.textContent = '🎉 Congratulations!';
            feedbackMessage.className = 'feedback-message success';

            if (leverage >= 40) unlockAchievement('high_roller');
            if (currentStreak >= 3) unlockAchievement('lucky_streak_3');
            if (currentStreak >= 5) unlockAchievement('lucky_streak_5');
            if (currentStreak >= 10) unlockAchievement('lucky_streak_10');
            if (gameState.totalWins >= 10) unlockAchievement('win_10');
            if (gameState.totalWins >= 50) unlockAchievement('win_50');
            if (gameState.totalWins >= 100) unlockAchievement('win_100');
        } else {
            ecpChange = -stake;
            gameState.totalLosses++;
            currentStreak = 0;
            resultText.className = 'loss';
            resultText.textContent = `❌ (${outcomeDisplay}) YOU LOSE!`;
            ecpChangeDisplay.className = 'ecp-change negative';
            ecpChangeDisplay.textContent = `-${stake} ECP`;
            feedbackMessage.textContent = '😞 Better luck next time!';
            feedbackMessage.className = 'feedback-message error';
        }

        // History
        gameState.history.unshift({
            gameType: 'coin',
            guess: `${numCoins} coin ${betType} ${guess || ''}`,
            outcome: outcomes.join(','),
            stake: stake,
            leverage: leverage,
            result: ecpChange,
            win: win,
            timestamp: new Date().toISOString()
        });
        if (gameState.history.length > 100) gameState.history = gameState.history.slice(0, 100);

        gameState.totalCoinFlips = (gameState.totalCoinFlips || 0) + 1;
        if (gameState.totalCoinFlips === 1) unlockAchievement('first_flip');

        checkAchievements();
        saveGame();

        setTimeout(() => {
            animEl.className = 'result-animation';
        }, 800);
    }

    function updateCoinBetTypes() {
    const numCoins = parseInt(coinCount.value);
    const betTypeSelect = coinBetType;
    const currentValue = betTypeSelect.value;

    // Clear all options
    betTypeSelect.innerHTML = '<option value="">Select Bet Type</option>';

    if (numCoins === 1) {
        // 1 Coin: Only exact (Heads/Tails)
        const opt = document.createElement('option');
        opt.value = 'exact';
        opt.textContent = 'Exact Outcome (Heads/Tails)';
        betTypeSelect.appendChild(opt);
    } else {
        // 2 Coins: All options
        const options = [
            { val: 'exact', label: 'Exact Outcome (HH/HT/TH/TT)' },
            { val: 'any_heads', label: 'At least one Heads' },
            { val: 'any_tails', label: 'At least one Tails' },
            { val: 'both_same', label: 'Both Same' }
        ];
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.val;
            option.textContent = opt.label;
            betTypeSelect.appendChild(option);
        });
    }

    // Restore selected value if still valid
    if (currentValue) {
        const options = betTypeSelect.querySelectorAll('option');
        let found = false;
        options.forEach(opt => {
            if (opt.value === currentValue) {
                found = true;
            }
        });
        if (found) {
            betTypeSelect.value = currentValue;
        } else {
            betTypeSelect.value = '';
        }
    }

    // Reset guess
    updateCoinGuessOptions();
}

    // ============================================================
    // 12. ACHIEVEMENTS
    // ============================================================

    function checkAchievements() {
        const ecp = getECP();
        if (ecp >= 100) unlockAchievement('ecp_100');
        if (ecp >= 500) unlockAchievement('ecp_500');
        if (ecp >= 1000) unlockAchievement('ecp_1000');
        saveGame();
        renderAchievements();
    }

    function unlockAchievement(id) {
        const ach = achievementsData.find(a => a.id === id);
        if (ach && !ach.unlocked) {
            ach.unlocked = true;
            addEcp(ECP.REWARDS.ACHIEVEMENT, `Roll & Flip - Achievement: ${ach.name}`);
            feedbackMessage.textContent = `🏆 Achievement Unlocked: ${ach.name}! +${ECP.REWARDS.ACHIEVEMENT} ECP`;
            feedbackMessage.className = 'feedback-message success';
            setTimeout(() => {
                if (feedbackMessage.textContent.includes('Achievement Unlocked')) {
                    feedbackMessage.textContent = '';
                    feedbackMessage.className = 'feedback-message';
                }
            }, 3000);
        }
    }

    function renderAchievements() {
        achievementsList.innerHTML = '';
        achievementsData.forEach(ach => {
            const li = document.createElement('li');
            const nameSpan = document.createElement('span');
            nameSpan.className = 'ach-name';
            nameSpan.textContent = ach.name;
            const statusSpan = document.createElement('span');
            statusSpan.className = `ach-status ${ach.unlocked ? 'unlocked' : 'locked'}`;
            statusSpan.textContent = ach.unlocked ? '✅ Unlocked' : '🔒 Locked';
            li.appendChild(nameSpan);
            li.appendChild(statusSpan);
            achievementsList.appendChild(li);
        });
    }

    // ============================================================
    // 13. THEMES
    // ============================================================

    function renderThemes() {
        themeGrid.innerHTML = '';
        themes.forEach(theme => {
            const btn = document.createElement('button');
            btn.textContent = theme.name;
            if (gameState.currentTheme === theme.id) btn.classList.add('active');
            btn.addEventListener('click', () => {
                applyTheme(theme.id);
                renderThemes();
            });
            themeGrid.appendChild(btn);
        });
    }

    function applyTheme(themeId) {
        document.body.className = '';
        if (themeId !== 'default') {
            document.body.classList.add(`theme-${themeId}`);
        }
        gameState.currentTheme = themeId;
        saveGame();
    }

    // ============================================================
    // 14. HISTORY
    // ============================================================

    function renderHistory() {
        statWins.textContent = gameState.totalWins;
        statLosses.textContent = gameState.totalLosses;
        statHighestEcp.textContent = gameState.highestEcp;

        historyBody.innerHTML = '';

        if (gameState.history.length === 0) {
            noHistoryMessage.style.display = 'block';
            return;
        }

        noHistoryMessage.style.display = 'none';

        gameState.history.forEach(entry => {
            const row = document.createElement('tr');
            const gameTypeDisplay = entry.gameType === 'coin' ? '🪙 Coin' : '🎲 Dice';
            const guessDisplay = entry.guess;
            const outcomeDisplay = entry.outcome;
            const resultClass = entry.win ? 'positive' : 'negative';
            const outcomeClass = entry.win ? 'outcome-win' : 'outcome-loss';

            row.innerHTML = `
                <td>${gameTypeDisplay}</td>
                <td>${guessDisplay}</td>
                <td class="${outcomeClass}">${outcomeDisplay}</td>
                <td>${entry.stake}</td>
                <td>${entry.leverage}x</td>
                <td class="${resultClass}">${entry.result > 0 ? '+' : ''}${entry.result}</td>
            `;
            historyBody.appendChild(row);
        });
    }

    // ============================================================
    // 15. SHARE
    // ============================================================

    function shareProgress() {
        const text = `🎲 Roll & Flip\nECP: ${getECP()}\nWins: ${gameState.totalWins}\nLosses: ${gameState.totalLosses}\n\nPlay now at EchoPlex Games! 🎮`;

        if (navigator.share) {
            navigator.share({ title: 'Roll & Flip', text });
            unlockAchievement('share_roll');
        } else {
            navigator.clipboard.writeText(text).then(() => {
                feedbackMessage.textContent = '📋 Progress copied to clipboard!';
                feedbackMessage.className = 'feedback-message success';
                unlockAchievement('share_roll');
                setTimeout(() => {
                    feedbackMessage.textContent = '';
                    feedbackMessage.className = 'feedback-message';
                }, 2000);
            });
        }
    }

    // ============================================================
    // 16. KEYBOARD SHORTCUTS
    // ============================================================

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
        }
    });

    // ============================================================
    // 17. PARTICLE SYSTEM
    // ============================================================

    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let w, h;

        function resizeCanvas() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.4 + 0.05;
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.01 + Math.random() * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += this.pulseSpeed;
                if (this.x < 0 || this.x > w) this.speedX *= -1;
                if (this.y < 0 || this.y > h) this.speedY *= -1;
                this.currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 250, ${this.currentOpacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 50; i++) particles.push(new Particle());

        function animateParticles() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ============================================================
    // 18. EVENT LISTENERS
    // ============================================================

    playBtn.addEventListener('click', () => showScreen(menuScreen));
    startGameBtn.addEventListener('click', () => {
        switchMode('dice');
        showScreen(gameScreen);
    });

    backToMenuFromGameBtn.addEventListener('click', () => showScreen(menuScreen));
    backToIntroFromMenuBtn.addEventListener('click', () => showScreen(introScreen));

    diceModeBtn.addEventListener('click', () => switchMode('dice'));
    coinModeBtn.addEventListener('click', () => switchMode('coin'));

    rollDiceBtn.addEventListener('click', rollDice);
    flipCoinBtn.addEventListener('click', flipCoin);

    shareGameBtn.addEventListener('click', shareProgress);

    // Dice UI Events
    diceCount.addEventListener('change', () => {
    updateDiceBetTypes();
    updateDiceGuessOptions();
    updateStakeMax();
});

    diceBetType.addEventListener('change', () => {
        updateDiceGuessOptions();
    });

    leverageInput.addEventListener('input', function() {
        let val = parseInt(this.value);
        if (val > 100) {
            this.value = 100;
            feedbackMessage.textContent = '⚠️ Max leverage is 100x!';
            feedbackMessage.className = 'feedback-message error';
            setTimeout(() => {
                feedbackMessage.textContent = '';
                feedbackMessage.className = 'feedback-message';
            }, 2000);
        }
        updateStakeMax();
    });

    // Coin UI Events
   coinCount.addEventListener('change', () => {
    updateCoinBetTypes();
    updateCoinGuessOptions();
    updateCoinStakeMax();
});
    coinBetType.addEventListener('change', () => {
        updateCoinGuessOptions();
    });

    coinLeverageInput.addEventListener('input', function() {
        let val = parseInt(this.value);
        if (val > 100) {
            this.value = 100;
            feedbackMessage.textContent = '⚠️ Max leverage is 100x!';
            feedbackMessage.className = 'feedback-message error';
            setTimeout(() => {
                feedbackMessage.textContent = '';
                feedbackMessage.className = 'feedback-message';
            }, 2000);
        }
        updateCoinStakeMax();
    });

    // Modals
    achievementsBtn.addEventListener('click', () => { renderAchievements(); showModal(achievementsModal); });
    themeBtn.addEventListener('click', () => { renderThemes(); showModal(themeModal); });
    historyBtn.addEventListener('click', () => { renderHistory(); showModal(historyModal); });

    achievementsClose.addEventListener('click', () => hideModal(achievementsModal));
    themeClose.addEventListener('click', () => hideModal(themeModal));
    historyClose.addEventListener('click', () => hideModal(historyModal));

    document.querySelectorAll('.modal').forEach(m => {
        m.addEventListener('click', (e) => {
            if (e.target === m) m.classList.remove('active');
        });
    });

    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
        });
    }

    // ============================================================
    // 19. INITIALIZATION
    // ============================================================

    function init() {
        loadGame();
        applyTheme(gameState.currentTheme);
        renderAchievements();
        updateAllEcp();

        updateStakeMax();
        updateCoinStakeMax();

        diceGuess.disabled = true;
        diceGuess.innerHTML = '<option value="">Select a bet type first...</option>';
        coinGuess.disabled = true;
        coinGuess.innerHTML = '<option value="">Select a bet type first...</option>';

        switchMode('dice');
        updateDiceBetTypes();
        updateCoinBetTypes();
        showScreen(introScreen);

        console.log('%c🎲 Roll & Flip', 'font-size: 20px; font-weight: 700; color: #fbbf24;');
        console.log('%cTest your luck and strategy!', 'font-size: 14px; color: #b8b0d8;');
        console.log('%c🪙 Coin Flip • 🎲 Dice Roll • ⚡ Up to 100x Leverage', 'font-size: 12px; color: #6f6390;');
        console.log(`%c🪙 ECP: ${getECP()} (shared across all games)`, 'font-size: 12px; color: #fbbf24;');
    }

    init();

})();