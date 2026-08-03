/* ==========================================================================
   Word Scramble — Complete JavaScript (FULL 200 Levels)
   ========================================================================== */

(function() {
    'use strict';

    // ============================================================
    // 1. DOM REFS
    // ============================================================

    const introScreen = document.getElementById('introScreen');
    const menuScreen = document.getElementById('menuScreen');
    const levelScreen = document.getElementById('levelScreen');
    const gameScreen = document.getElementById('gameScreen');
    const backToIntroFromMenuBtn = document.getElementById('backToIntroFromMenuBtn');

    const achievementsModal = document.getElementById('achievementsModal');
    const themeModal = document.getElementById('themeModal');
    const historyModal = document.getElementById('historyModal');

    const playBtn = document.getElementById('playBtn');
    const achievementsBtn = document.getElementById('achievementsBtn');
    const themeBtn = document.getElementById('themeBtn');
    const historyBtn = document.getElementById('historyBtn');
    const startGameBtn = document.getElementById('startGameBtn');
    const backToMenuBtn = document.getElementById('backToMenuBtn');
    const prevLevelBtn = document.getElementById('prevLevelBtn');
    const nextLevelBtn = document.getElementById('nextLevelBtn');
    const backToLevelsBtn = document.getElementById('backToLevelsBtn');
    const prevWordBtn = document.getElementById('prevWordBtn');
    const nextWordBtn = document.getElementById('nextWordBtn');
    const submitGuessBtn = document.getElementById('submitGuessBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const hintBtn = document.getElementById('hintBtn');
    const revealBtn = document.getElementById('revealBtn');
    const shareGameBtn = document.getElementById('shareGameBtn');
    const shareProgressBtn = document.getElementById('shareProgressBtn');

    const ecpDisplay = document.getElementById('ecpDisplay');
    const ecpLevelDisplay = document.getElementById('ecpLevelDisplay');
    const ecpGameDisplay = document.getElementById('ecpGameDisplay');
    const currentLevelDisplay = document.getElementById('currentLevelDisplay');
    const puzzleGrid = document.getElementById('puzzleGrid');
    const gameLevelDisplay = document.getElementById('gameLevelDisplay');
    const timerValue = document.getElementById('timerValue');
    const timerDisplay = document.getElementById('timerDisplay');
    const wordCounter = document.getElementById('wordCounter');
    const scrambledWord = document.getElementById('scrambledWord');
    const guessInput = document.getElementById('guessInput');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const hintCost = document.getElementById('hintCost');
    const revealCost = document.getElementById('revealCost');

    const achievementsList = document.getElementById('achievementsList');
    const themeGrid = document.getElementById('themeGrid');
    const statUnscrambled = document.getElementById('statUnscrambled');
    const statFailures = document.getElementById('statFailures');
    const statHighestEcp = document.getElementById('statHighestEcp');

    const achievementsClose = document.getElementById('achievementsClose');
    const themeClose = document.getElementById('themeClose');
    const historyClose = document.getElementById('historyClose');

    // ============================================================
    // 2. GAME DATA — FULL 200 LEVELS
    // ============================================================

    const wordLists = {
        easy: ['APPLE', 'TABLE', 'CHAIR', 'HOUSE', 'WATER', 'PHONE', 'CLOUD', 'HAPPY', 'DREAM', 'FLOWER', 'LIGHT', 'MUSIC', 'DANCE', 'PEACE', 'STONE', 'HEART', 'STAR', 'MOON', 'SUN', 'WIND', 'FIRE', 'RAIN', 'SNOW', 'TREE', 'BIRD', 'FISH', 'LION', 'BEAR', 'WOLF', 'FOX', 'OWL', 'EAGLE', 'HAWK', 'SNAKE', 'TIGER', 'PANDA', 'KOALA', 'ZEBRA', 'HORSE', 'SHEEP', 'GOAT', 'COW', 'PIG', 'DOG', 'CAT', 'RABBIT', 'MOUSE', 'DEER', 'ELK', 'MOOSE'],
        medium: ['BUTTERFLY', 'COMPUTER', 'ELEPHANT', 'MOUNTAIN', 'OCEANIC', 'JOURNEY', 'FANTASY', 'WHISPER', 'PARADISE', 'HARMONY', 'ENDEAVOR', 'MAJESTIC', 'SERENDIPITY', 'EPHEMERAL', 'LUMINOUS', 'INNOVATION', 'QUINTESSENTIAL', 'EFFULGENT', 'JUXTAPOSE', 'ONOMATOPOEIA', 'SYNCHRONIZE', 'AMBIGUOUS', 'CACOPHONY', 'DIAPHANOUS', 'EQUILIBRIUM', 'FUGACIOUS', 'GALUMPHING', 'HETEROGENEOUS', 'INCONSPICUOUS', 'JOCULAR'],
        hard: ['SUPERCALIFRAGILISTICEXPIALIDOCIOUS', 'UNCOPYRIGHTABLE', 'DEOXYRIBONUCLEIC', 'KALEIDOSCOPE', 'LACONIC', 'MAELSTROM', 'NEFARIOUS', 'OBFUSCATE', 'PARSIMONIOUS', 'QUINTESSENCE', 'REDOLENT', 'SAGACIOUS', 'TACITURN', 'UBIQUITOUS', 'VACILLATE', 'WAINSCOT', 'XENOPHOBIA', 'ZEPHYR', 'ABERRATION', 'BELLIGERENT', 'CAPRICIOUS', 'DESULTORY', 'EFFRONTERY', 'FLUMMOX', 'GARRULOUS', 'HEGEMONY', 'IMPECUNIOUS', 'JETTISON', 'KOWTOW', 'LUGUBRIOUS']
    };

    const levelsConfig = [];

    for (let i = 1; i <= 200; i++) {
        let wordCount, timer, wordPool;
        if (i <= 40) { wordCount = 2; timer = 30; wordPool = wordLists.easy; }
        else if (i <= 80) { wordCount = 3; timer = 45; wordPool = wordLists.easy.concat(wordLists.medium); }
        else if (i <= 120) { wordCount = 4; timer = 60; wordPool = wordLists.medium; }
        else if (i <= 160) { wordCount = 5; timer = 75; wordPool = wordLists.medium.concat(wordLists.hard); }
        else { wordCount = 6; timer = 90; wordPool = wordLists.hard; }

        const words = [];
        const shuffledPool = [...wordPool].sort(() => Math.random() - 0.5);
        for (let w = 0; w < wordCount; w++) {
            words.push(shuffledPool[w % shuffledPool.length]);
        }
        levelsConfig.push({ level: i, words: words, timer: timer });
    }

    // ============================================================
    // 3. GAME STATE
    // ============================================================

    let gameState = {
        currentLevel: 1,
        currentWordIndex: 0,
        completedPuzzles: {},
        totalUnscrambled: 0,
        totalFailures: 0,
        highestEcp: 200,
        currentTheme: 'default',
        achievements: {}
    };

    let timerInterval = null;
    let timeLeft = 30;
    let savedTimeLeft = 0;
    let currentWords = [];
    let currentCorrectWord = '';
    let currentScrambled = '';
    let currentStreak = 0;

    // Store time per word index
    let wordTimers = {};

    // ============================================================
    // 4. ECP FUNCTIONS — USING ECP MANAGER
    // ============================================================

    function getECP() {
        return ECP.get();
    }

    function addEcp(amount, reason) {
        const newBalance = ECP.add(amount, reason || 'Word Scramble reward');
        updateAllEcp();
        return newBalance;
    }

    function deductEcp(amount, reason) {
        const newBalance = ECP.spend(amount, reason || 'Word Scramble cost');
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
        if (ecpLevelDisplay) ecpLevelDisplay.textContent = val;
        if (ecpGameDisplay) ecpGameDisplay.textContent = val;
        if (val > gameState.highestEcp) {
            gameState.highestEcp = val;
            saveGame();
        }
    }

    // ============================================================
    // 5. THEMES & ACHIEVEMENTS
    // ============================================================

    const themes = [
        { id: 'default', name: 'Cosmic' },
        { id: 'ocean', name: 'Ocean' },
        { id: 'forest', name: 'Forest' },
        { id: 'cyberpunk', name: 'Cyberpunk' },
        { id: 'sunset', name: 'Sunset' }
    ];

    const achievementsData = [
        { id: 'first_scramble', name: 'First Scramble!', unlocked: false },
        { id: 'word_whiz', name: 'Word Whiz (10 words)', unlocked: false },
        { id: 'puzzle_pro', name: 'Puzzle Pro (50 words)', unlocked: false },
        { id: 'master_of_words', name: 'Master of Words (100 words)', unlocked: false },
        { id: 'level_conqueror', name: 'Level Conqueror (Complete Level 1)', unlocked: false },
        { id: 'level_10', name: 'Level 10 Master', unlocked: false },
        { id: 'level_50', name: 'Level 50 Legend', unlocked: false },
        { id: 'level_100', name: 'Level 100 Champion', unlocked: false },
        { id: 'level_200', name: 'Ultimate Scrambler (All 200 Levels)', unlocked: false },
        { id: 'ecp_100', name: 'ECP Novice (100 ECP)', unlocked: false },
        { id: 'ecp_500', name: 'ECP Apprentice (500 ECP)', unlocked: false },
        { id: 'ecp_1000', name: 'ECP Master (1000 ECP)', unlocked: false },
        { id: 'streak_5', name: 'Streak of 5', unlocked: false },
        { id: 'streak_10', name: 'Streak of 10', unlocked: false },
        { id: 'share_knowledge', name: 'Share the Knowledge', unlocked: false }
    ];

    // ============================================================
    // 6. SAVE / LOAD
    // ============================================================

    function saveGame() {
        localStorage.setItem('scrambleGame', JSON.stringify(gameState));
        localStorage.setItem('scrambleAchievements', JSON.stringify(achievementsData));
        // Save word timers
        localStorage.setItem('scrambleWordTimers', JSON.stringify(wordTimers));
    }

    function loadGame() {
        const saved = localStorage.getItem('scrambleGame');
        if (saved) {
            const parsed = JSON.parse(saved);
            gameState = { ...gameState, ...parsed };
        }
        const savedAchievements = localStorage.getItem('scrambleAchievements');
        if (savedAchievements) {
            const parsed = JSON.parse(savedAchievements);
            achievementsData.forEach((ach, i) => {
                if (parsed[i]) ach.unlocked = parsed[i].unlocked;
            });
        }
        // Load word timers
        const savedTimers = localStorage.getItem('scrambleWordTimers');
        if (savedTimers) {
            wordTimers = JSON.parse(savedTimers);
        }
        updateAllEcp();
    }

    // ============================================================
    // 7. SCREEN MANAGEMENT
    // ============================================================

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
        if (screen === levelScreen) renderPuzzleGrid();
    }

    function showModal(modal) { modal.classList.add('active'); }
    function hideModal(modal) { modal.classList.remove('active'); }

    // ============================================================
    // 8. SCRAMBLE
    // ============================================================

    function scrambleWord(word) {
        let arr = word.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        let scrambled = arr.join('');
        if (scrambled === word && word.length > 1) {
            return scrambleWord(word);
        }
        return scrambled;
    }

    // ============================================================
    // 9. TIMER
    // ============================================================

    function startTimer() {
        stopTimer();
        const levelConfig = levelsConfig[gameState.currentLevel - 1];
        const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
        
        // Check if we have a saved time for this word
        if (wordTimers[timerKey] !== undefined && wordTimers[timerKey] > 0) {
            timeLeft = wordTimers[timerKey];
        } else {
            timeLeft = levelConfig ? levelConfig.timer : 30;
        }
        
        timerValue.textContent = timeLeft;
        timerDisplay.classList.remove('low');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerValue.textContent = timeLeft;
            
            // Save current time to wordTimers every second
            const saveKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
            wordTimers[saveKey] = timeLeft;
            
            if (timeLeft <= 5) timerDisplay.classList.add('low');
            if (timeLeft <= 0) {
                stopTimer();
                handleTimeOut();
            }
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timerDisplay.classList.remove('low');
    }

    function handleTimeOut() {
        deductEcp(ECP.COSTS.SCRAMBLE_WRONG, 'Time out penalty');
        feedbackMessage.textContent = `⏰ Time's up! -${ECP.COSTS.SCRAMBLE_WRONG} ECP`;
        feedbackMessage.className = 'feedback-message error';
        gameState.totalFailures++;
        guessInput.disabled = true;
        submitGuessBtn.disabled = true;
        stopTimer();
        
        // Clear saved time for this word on timeout
        const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
        delete wordTimers[timerKey];
        
        setTimeout(() => {
            showScreen(levelScreen);
            renderPuzzleGrid();
            resetGameUI();
        }, 1500);
    }

    function resetGameUI() {
        guessInput.disabled = false;
        submitGuessBtn.disabled = false;
        guessInput.value = '';
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback-message';
    }

    // ============================================================
    // 10. LOAD LEVEL
    // ============================================================

    function loadLevel(level) {
        const levelConfig = levelsConfig[level - 1];
        if (!levelConfig) return;

        gameState.currentLevel = level;
        gameState.currentWordIndex = 0;
        currentWords = [...levelConfig.words];
        currentStreak = 0;

        showScreen(gameScreen);
        loadWord();
        updateAllEcp();
        saveGame();
    }

    function loadWord() {
        const levelConfig = levelsConfig[gameState.currentLevel - 1];
        if (!levelConfig) {
            showScreen(levelScreen);
            renderPuzzleGrid();
            return;
        }

        if (gameState.currentWordIndex >= levelConfig.words.length) {
            const allCompleted = levelConfig.words.every((_, i) => {
                return gameState.completedPuzzles[`${gameState.currentLevel}_${i}`];
            });

            if (allCompleted) {
                feedbackMessage.textContent = `🏆 Level ${gameState.currentLevel} Complete! +${ECP.REWARDS.LEVEL_COMPLETE} ECP`;
                feedbackMessage.className = 'feedback-message success';
                addEcp(ECP.REWARDS.LEVEL_COMPLETE, `Word Scramble - Level ${gameState.currentLevel} complete`);
                // Clear timers for this level
                Object.keys(wordTimers).forEach(key => {
                    if (key.startsWith(`${gameState.currentLevel}_`)) {
                        delete wordTimers[key];
                    }
                });
                setTimeout(() => {
                    showScreen(levelScreen);
                    renderPuzzleGrid();
                    resetGameUI();
                }, 1500);
            }
            return;
        }

        currentCorrectWord = levelConfig.words[gameState.currentWordIndex];
        currentScrambled = scrambleWord(currentCorrectWord);
        scrambledWord.textContent = currentScrambled;
        guessInput.value = '';
        guessInput.disabled = false;
        submitGuessBtn.disabled = false;
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback-message';

        const total = levelConfig.words.length;
        wordCounter.textContent = `Word ${gameState.currentWordIndex + 1} / ${total}`;
        gameLevelDisplay.textContent = `Level ${gameState.currentLevel}`;

        // Previous button
        if (prevWordBtn) {
            prevWordBtn.disabled = (gameState.currentWordIndex === 0);
        }

        // Next button
        if (nextWordBtn) {
            const key = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
            const isCompleted = gameState.completedPuzzles[key];
            const isLast = (gameState.currentWordIndex === levelConfig.words.length - 1);
        
            if (isCompleted && !isLast) {
                nextWordBtn.style.display = 'inline-flex';
                nextWordBtn.disabled = false;
            } else {
                nextWordBtn.style.display = 'none';
            }
        }

        const key = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
        if (gameState.completedPuzzles[key]) {
            guessInput.disabled = true;
            submitGuessBtn.disabled = true;
            feedbackMessage.textContent = '✅ Already completed!';
            feedbackMessage.className = 'feedback-message success';
            stopTimer();
        } else {
            startTimer();
        }

        updateHintRevealButtons();
        saveGame();
    }

    function updateHintRevealButtons() {
        const ecp = getECP();
        hintCost.textContent = `${ecp >= ECP.COSTS.SCRAMBLE_HINT ? ECP.COSTS.SCRAMBLE_HINT : '🔒 ' + ECP.COSTS.SCRAMBLE_HINT} ECP`;
        revealCost.textContent = `${ecp >= ECP.COSTS.SCRAMBLE_REVEAL ? ECP.COSTS.SCRAMBLE_REVEAL : '🔒 ' + ECP.COSTS.SCRAMBLE_REVEAL} ECP`;
        hintBtn.disabled = ecp < ECP.COSTS.SCRAMBLE_HINT;
        revealBtn.disabled = ecp < ECP.COSTS.SCRAMBLE_REVEAL;
    }

    // ============================================================
    // 11. SUBMIT GUESS
    // ============================================================

    function submitGuess() {
        const guess = guessInput.value.trim().toUpperCase();
        if (!guess) {
            feedbackMessage.textContent = 'Please enter a word!';
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        const key = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
        if (gameState.completedPuzzles[key]) {
            feedbackMessage.textContent = 'Already completed!';
            feedbackMessage.className = 'feedback-message success';
            return;
        }

        if (guess === currentCorrectWord) {
            feedbackMessage.textContent = `🎉 Correct! +${ECP.REWARDS.CORRECT_ANSWER} ECP`;
            feedbackMessage.className = 'feedback-message success';
            addEcp(ECP.REWARDS.CORRECT_ANSWER, 'Word Scramble - Correct word');
            gameState.totalUnscrambled++;
            gameState.completedPuzzles[key] = true;
            currentStreak++;

            guessInput.disabled = true;
            submitGuessBtn.disabled = true;
            stopTimer();

            // Clear saved time for this word
            const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
            delete wordTimers[timerKey];

            checkAchievements();

            setTimeout(() => {
                gameState.currentWordIndex++;
                loadWord();
                saveGame();
            }, 1000);
        } else {
            feedbackMessage.textContent = '❌ Wrong word. Try again!';
            feedbackMessage.className = 'feedback-message error';
            deductEcp(ECP.COSTS.SCRAMBLE_WRONG, 'Word Scramble - Wrong guess');
            gameState.totalFailures++;
            currentStreak = 0;
            saveGame();
        }
    }

    // ============================================================
    // 12. SHUFFLE
    // ============================================================

    function shuffleWord() {
        if (guessInput.disabled) return;
        currentScrambled = scrambleWord(currentCorrectWord);
        scrambledWord.textContent = currentScrambled;
        feedbackMessage.textContent = '🔄 Shuffled!';
        feedbackMessage.className = 'feedback-message hint';
        setTimeout(() => {
            if (feedbackMessage.textContent === '🔄 Shuffled!') {
                feedbackMessage.textContent = '';
                feedbackMessage.className = 'feedback-message';
            }
        }, 1000);
    }

    // ============================================================
    // 13. HINT & REVEAL
    // ============================================================

    function giveHint() {
        if (getECP() < ECP.COSTS.SCRAMBLE_HINT) {
            feedbackMessage.textContent = `Not enough ECP for a hint! (${ECP.COSTS.SCRAMBLE_HINT} ECP needed)`;
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        const word = currentCorrectWord;
        let hint = `First letter: ${word[0]}`;
        if (word.length > 3) {
            hint += `, Last letter: ${word[word.length - 1]}`;
        }
        if (word.length > 5) {
            hint += `, ${word.length} letters total`;
        }

        feedbackMessage.textContent = `💡 ${hint}`;
        feedbackMessage.className = 'feedback-message hint';
        deductEcp(ECP.COSTS.SCRAMBLE_HINT, 'Word Scramble - Hint used');
        saveGame();
    }

    function revealAnswer() {
        if (getECP() < ECP.COSTS.SCRAMBLE_REVEAL) {
            feedbackMessage.textContent = `Not enough ECP to reveal! (${ECP.COSTS.SCRAMBLE_REVEAL} ECP needed)`;
            feedbackMessage.className = 'feedback-message error';
            return;
        }

        const key = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
        if (gameState.completedPuzzles[key]) {
            feedbackMessage.textContent = 'Already completed!';
            feedbackMessage.className = 'feedback-message success';
            return;
        }

        feedbackMessage.textContent = `👁️ The word is: ${currentCorrectWord}`;
        feedbackMessage.className = 'feedback-message hint';
        guessInput.value = currentCorrectWord;
        deductEcp(ECP.COSTS.SCRAMBLE_REVEAL, 'Word Scramble - Reveal used');
        gameState.completedPuzzles[key] = true;
        gameState.totalFailures++;
        currentStreak = 0;
        guessInput.disabled = true;
        submitGuessBtn.disabled = true;
        stopTimer();
        
        // Clear saved time for this word
        const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
        delete wordTimers[timerKey];
        
        saveGame();

        setTimeout(() => {
            gameState.currentWordIndex++;
            loadWord();
            saveGame();
        }, 1500);
    }

    // ============================================================
    // 14. PUZZLE GRID
    // ============================================================

    function renderPuzzleGrid() {
        const levelConfig = levelsConfig[gameState.currentLevel - 1];
        if (!levelConfig) {
            console.error('No level config found for level:', gameState.currentLevel);
            puzzleGrid.innerHTML = '<p style="color: var(--nebula-rose); text-align: center; padding: 20px;">Error loading level data.</p>';
            return;
        }

        puzzleGrid.innerHTML = '';
        currentLevelDisplay.textContent = `Level ${gameState.currentLevel}`;

        levelConfig.words.forEach((word, index) => {
            const box = document.createElement('div');
            box.classList.add('puzzle-box');
            const key = `${gameState.currentLevel}_${index}`;

            if (gameState.completedPuzzles[key]) {
                box.classList.add('completed');
            } else {
                const isFirst = index === 0;
                const prevKey = `${gameState.currentLevel}_${index - 1}`;
                const isPrevCompleted = gameState.completedPuzzles[prevKey];
                const isPrevLevelCompleted = gameState.currentLevel === 1 ||
                    levelsConfig[gameState.currentLevel - 2].words.every((_, i) => {
                        return gameState.completedPuzzles[`${gameState.currentLevel - 1}_${i}`];
                    });

                if ((isFirst && isPrevLevelCompleted) || (isPrevCompleted && isPrevLevelCompleted)) {
                    box.classList.add('current');
                    box.textContent = index + 1;
                    box.addEventListener('click', () => {
                        gameState.currentWordIndex = index;
                        currentWords = [...levelConfig.words];
                        currentStreak = 0;
                        showScreen(gameScreen);
                        loadWord();
                        saveGame();
                    });
                } else {
                    box.classList.add('locked');
                }
            }

            puzzleGrid.appendChild(box);
        });

        prevLevelBtn.disabled = gameState.currentLevel === 1;
        const allCompleted = levelConfig.words.every((_, i) => {
            return gameState.completedPuzzles[`${gameState.currentLevel}_${i}`];
        });
        nextLevelBtn.disabled = gameState.currentLevel === levelsConfig.length || !allCompleted;

        updateAllEcp();
    }

    // ============================================================
    // 15. ACHIEVEMENTS
    // ============================================================

    function checkAchievements() {
        if (gameState.totalUnscrambled >= 1) unlockAchievement('first_scramble');
        if (gameState.totalUnscrambled >= 10) unlockAchievement('word_whiz');
        if (gameState.totalUnscrambled >= 50) unlockAchievement('puzzle_pro');
        if (gameState.totalUnscrambled >= 100) unlockAchievement('master_of_words');

        const level1Config = levelsConfig[0];
        if (level1Config) {
            const all = level1Config.words.every((_, i) => gameState.completedPuzzles[`1_${i}`]);
            if (all) unlockAchievement('level_conqueror');
        }
        if (gameState.completedPuzzles[`10_${levelsConfig[9].words.length - 1}`]) unlockAchievement('level_10');
        if (gameState.completedPuzzles[`50_${levelsConfig[49].words.length - 1}`]) unlockAchievement('level_50');
        if (gameState.completedPuzzles[`100_${levelsConfig[99].words.length - 1}`]) unlockAchievement('level_100');

        const allLevels = levelsConfig.every((l, li) => {
            return l.words.every((_, wi) => gameState.completedPuzzles[`${li + 1}_${wi}`]);
        });
        if (allLevels) unlockAchievement('level_200');

        const ecp = getECP();
        if (ecp >= 100) unlockAchievement('ecp_100');
        if (ecp >= 500) unlockAchievement('ecp_500');
        if (ecp >= 1000) unlockAchievement('ecp_1000');

        if (currentStreak >= 5) unlockAchievement('streak_5');
        if (currentStreak >= 10) unlockAchievement('streak_10');

        saveGame();
        renderAchievements();
    }

    function unlockAchievement(id) {
        const ach = achievementsData.find(a => a.id === id);
        if (ach && !ach.unlocked) {
            ach.unlocked = true;
            addEcp(ECP.REWARDS.ACHIEVEMENT, `Word Scramble - Achievement: ${ach.name}`);
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
    // 16. THEMES
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
    // 17. HISTORY
    // ============================================================

    function renderHistory() {
        statUnscrambled.textContent = gameState.totalUnscrambled;
        statFailures.textContent = gameState.totalFailures;
        statHighestEcp.textContent = gameState.highestEcp;
    }

    // ============================================================
    // 18. SHARE
    // ============================================================

    function shareProgress() {
        const totalLevels = levelsConfig.length;
        let completedCount = 0;
        for (let i = 1; i <= totalLevels; i++) {
            const levelConfig = levelsConfig[i - 1];
            const all = levelConfig.words.every((_, wi) => gameState.completedPuzzles[`${i}_${wi}`]);
            if (all) completedCount++;
        }

        const text = `🧩 Word Scramble\nLevel: ${gameState.currentLevel}\nECP: ${getECP()}\nWords Unscrambled: ${gameState.totalUnscrambled}\nCompleted ${completedCount}/${totalLevels} Levels\n\nPlay now at EchoPlex Games! 🎮`;

        if (navigator.share) {
            navigator.share({ title: 'Word Scramble', text });
            unlockAchievement('share_knowledge');
        } else {
            navigator.clipboard.writeText(text).then(() => {
                feedbackMessage.textContent = '📋 Progress copied to clipboard!';
                feedbackMessage.className = 'feedback-message success';
                unlockAchievement('share_knowledge');
                setTimeout(() => {
                    feedbackMessage.textContent = '';
                    feedbackMessage.className = 'feedback-message';
                }, 2000);
            });
        }
    }

    // ============================================================
    // 19. KEYBOARD SHORTCUTS
    // ============================================================

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && gameScreen.classList.contains('active')) {
            submitGuess();
        }
        if (e.key === 'h' && gameScreen.classList.contains('active')) {
            giveHint();
        }
        if (e.key === 'r' && gameScreen.classList.contains('active')) {
            revealAnswer();
        }
        if (e.key === 's' && gameScreen.classList.contains('active')) {
            shuffleWord();
        }
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
        }
    });

    // ============================================================
    // 20. PARTICLE SYSTEM
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
    // 21. EVENT LISTENERS
    // ============================================================

    playBtn.addEventListener('click', () => showScreen(menuScreen));

    startGameBtn.addEventListener('click', () => {
        const levelConfig = levelsConfig[gameState.currentLevel - 1];
        if (levelConfig) {
            currentWords = [...levelConfig.words];
            currentStreak = 0;
        }
        showScreen(levelScreen);
        renderPuzzleGrid();
    });

    backToMenuBtn.addEventListener('click', () => showScreen(menuScreen));

    backToIntroFromMenuBtn.addEventListener('click', () => {
        showScreen(introScreen);
    });

    backToLevelsBtn.addEventListener('click', () => {
        // Save current time before leaving
        if (timerInterval) {
            const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
            wordTimers[timerKey] = timeLeft;
            stopTimer();
        }
        showScreen(levelScreen);
        renderPuzzleGrid();
        resetGameUI();
    });

    prevLevelBtn.addEventListener('click', () => {
        if (gameState.currentLevel > 1) {
            gameState.currentLevel--;
            renderPuzzleGrid();
        }
    });

    nextLevelBtn.addEventListener('click', () => {
        if (gameState.currentLevel < levelsConfig.length) {
            gameState.currentLevel++;
            renderPuzzleGrid();
        }
    });

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

    submitGuessBtn.addEventListener('click', submitGuess);

    guessInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitGuess();
    });

    shuffleBtn.addEventListener('click', shuffleWord);
    hintBtn.addEventListener('click', giveHint);
    revealBtn.addEventListener('click', revealAnswer);
    shareGameBtn.addEventListener('click', shareProgress);
    shareProgressBtn.addEventListener('click', shareProgress);

    // Previous Word Button
    prevWordBtn.addEventListener('click', () => {
        if (gameState.currentWordIndex > 0) {
            // Save current time before leaving
            if (timerInterval) {
                const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
                wordTimers[timerKey] = timeLeft;
                stopTimer();
            }
            gameState.currentWordIndex--;
            loadWord();
            saveGame();
        }
    });

    // Next Word Button
    nextWordBtn.addEventListener('click', () => {
        if (gameState.currentWordIndex < currentWords.length - 1) {
            // Save current time before leaving
            if (timerInterval) {
                const timerKey = `${gameState.currentLevel}_${gameState.currentWordIndex}`;
                wordTimers[timerKey] = timeLeft;
                stopTimer();
            }
            gameState.currentWordIndex++;
            loadWord();
            saveGame();
        }
    });

    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
        });
    }

    // ============================================================
    // 22. INITIALIZATION
    // ============================================================

    function init() {
        loadGame();
        applyTheme(gameState.currentTheme);
        renderAchievements();
        updateAllEcp();
        showScreen(introScreen);

        console.log('%c🧩 Word Scramble', 'font-size: 20px; font-weight: 700; color: #ec4899;');
        console.log('%c200 Levels • Complete Word Lists • Full Achievement System', 'font-size: 14px; color: #b8b0d8;');
        console.log(`%c📊 Loaded ${levelsConfig.length} levels with ${levelsConfig.reduce((acc, l) => acc + l.words.length, 0)} words`, 'font-size: 12px; color: #a78bfa;');
        console.log(`%c🪙 ECP: ${getECP()} (shared across all games)`, 'font-size: 12px; color: #fbbf24;');
        console.log('%c⌨️ Shortcuts: Enter=Submit, H=Hint, R=Reveal, S=Shuffle', 'font-size: 12px; color: #6f6390;');
    }

    init();

})();