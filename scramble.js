// --- DOM Element References ---
const gameIntroScreen = document.getElementById('game-intro-screen');
const levelSelectionScreen = document.getElementById('level-selection-screen');
const mainGameScreen = document.getElementById('main-game-screen');
const historyScreen = document.getElementById('history-screen');
const themeSelectionScreen = document.getElementById('theme-selection-screen');
const ecpDisplayIntro = document.querySelector('#ecp-display-intro span');
const ecpDisplayLevels = document.querySelector('#ecp-display-levels span');
// Buttons
const backToGamesButton = document.getElementById('back-to-games-button'); // NEW
const startGameButton = document.getElementById('start-game-button');
const viewHistoryIntroButton = document.getElementById('view-history-intro-button');
const backToIntroButton = document.getElementById('back-to-intro-button'); // NEW
const selectThemeButton = document.getElementById('select-theme-button');
const viewHistoryLevelsButton = document.getElementById('view-history-levels-button');
const submitAnswerButton = document.getElementById('submit-answer-button');
const hintButton = document.getElementById('hint-button');
const revealButton = document.getElementById('reveal-button');
const shuffleButton = document.getElementById('shuffle-button');
const shareButton = document.getElementById('share-button');
const backToLevelsFromGameButton = document.getElementById('back-to-levels-from-game');
const backToLevelsFromHistoryButton = document.getElementById('back-to-levels-from-history');
const backToLevelsFromThemeButton = document.getElementById('back-to-levels-from-theme');

// Game Displays
const timerDisplay = document.querySelector('#timer span');
const ecpDisplay = document.querySelector('#ecp-display span');
const scrambledWordDisplay = document.getElementById('scrambled-word');
const userInput = document.getElementById('user-input');
const currentLevelInfo = document.getElementById('current-level-info');
const messageDisplay = document.getElementById('message-display');

// Dynamic Content Containers
const levelGrid = document.getElementById('level-grid');
const achievementsList = document.getElementById('achievements-list');
const statsUnscrambled = document.getElementById('stats-unscrambled');
const statsFailures = document.getElementById('stats-failures');
const statsHighestEcp = document.getElementById('stats-highest-ecp');
const themeGrid = document.getElementById('theme-grid');


// --- Game State Variables (Loaded/Saved from Local Storage) ---
let gameData = {
    currentECP: 200, // Default ECP for new users
    completedLevels: {}, // { level: true }
    achievements: {}, // { achievementId: true }
    totalUnscrambled: 0,
    totalFailures: 0,
    highestECP: 200,
    currentTheme: 'default', // Stores the active theme class
    currentLevelNum: 1,
    currentWordIndex: 0
};

// --- Game Logic Variables ---
let currentLevelWords = [];
let correctWord = '';
let timerInterval;
const defaultAttemptTime = 40; // Default 20 seconds for level 1-40
let timeLeft = defaultAttemptTime;


// --- Game Configuration (Based on your requirements) ---

// Achievement Definitions (Matching your 15 requirements)
const achievementsConfig = [
    { id: 'firstScramble', name: 'First Scramble!', description: 'Unscramble your very first word.', condition: (stats) => stats.totalUnscrambled >= 1, awarded: false },
    { id: 'wordWhiz', name: 'Word Whiz', description: 'Unscramble 10 words correctly.', condition: (stats) => stats.totalUnscrambled >= 10, awarded: false },
    { id: 'puzzlePro', name: 'Puzzle Pro', description: 'Unscramble 50 words correctly.', condition: (stats) => stats.totalUnscrambled >= 50, awarded: false },
    { id: 'masterOfWords', name: 'Master of Words', description: 'Unscramble 100 words correctly.', condition: (stats) => stats.totalUnscrambled >= 100, awarded: false },
    { id: 'speedDemon', name: 'Speed Demon', description: 'Unscramble 5 words in a row with 10+ seconds left (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'hintHater', name: 'Hint Hater', description: 'Complete 10 levels without using hints (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'noPeeking', name: 'No Peeking', description: 'Complete 5 levels without using the "Reveal" button (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'levelConqueror', name: 'Level Conqueror', description: 'Complete all levels in a single difficulty tier (Placeholder: Level 40).', condition: (stats) => gameData.completedLevels[40], awarded: false }, // Example: check for a specific level completion
    { id: 'themeExplorer', name: 'Theme Explorer', description: 'Play on all 6 available themes (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'perfectStreak', name: 'Perfect Streak', description: 'Unscramble 20 words in a row without failures (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'economyMaster', name: 'Economy Master', description: 'Accumulate 1000 ECP.', condition: (stats) => stats.highestECP >= 1000, awarded: false },
    { id: 'shareKnowledge', name: 'Share the Knowledge', description: 'Use the "Share" button to ask for help.', condition: (stats) => false, awarded: false }, // Triggered on share button click
    { id: 'comebackKid', name: 'Comeback Kid', description: 'Unscramble a word with less than 5 seconds left (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'marathonMover', name: 'Marathon Mover', description: 'Play 50 game sessions (Not implemented yet, placeholder logic).', condition: (stats) => false, awarded: false }, // Needs more complex tracking
    { id: 'ultimateScrambler', name: 'Ultimate Scrambler', description: 'Complete all 200 levels.', condition: (stats) => Object.keys(gameData.completedLevels).length === 200, awarded: false }
];

// Theme Definitions (Matching your CSS classes)
const themes = [
    { id: 'default', name: 'Cosmic Purple' }, // Your initial theme
    { id: 'ocean', name: 'Deep Ocean' },
    { id: 'forest', name: 'Forest Green' },
    { id: 'desert', name: 'Desert Sands' },
    { id: 'cyberpunk', name: 'Cyberpunk City' },
    { id: 'sunset', name: 'Sunset Hues' }
];

// Level Definitions (Placeholder for word data)
const levelsConfig = [];
// This will be populated by generateAllWords()


// --- Utility Functions ---

// Function to scramble a word
function scrambleWord(word) {
    let a = word.split("");
    let n = a.length;
    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    let scrambled = a.join("");
    // Ensure the scrambled word is not the same as the original, re-scramble if it is
    if (scrambled === word && word.length > 1) {
        return scrambleWord(word); // Recursive call to re-scramble
    }
    return scrambled;
}

// Function to show a specific screen
function showScreen(screenToShow) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.add('active');
            screen.style.animation = 'fadeIn 0.5s ease-out forwards'; // Apply fadeIn
        } else {
            screen.classList.remove('active');
            screen.style.animation = 'fadeOut 0.5s ease-out forwards'; // Apply fadeOut
        }
    });
}


// Function to update ECP display (MODIFIED)
function updateECP(amount) {
    gameData.currentECP += amount;
    if (gameData.currentECP < 0) {
        gameData.currentECP = 0; // Prevent negative ECP
    }

    // Update ALL ECP displays
    ecpDisplay.textContent = gameData.currentECP; // Main game screen
    if (ecpDisplayIntro) { // Check if element exists before updating (good practice)
        ecpDisplayIntro.textContent = gameData.currentECP;
    }
    if (ecpDisplayLevels) { // Check if element exists
        ecpDisplayLevels.textContent = gameData.currentECP;
    }

    if (gameData.currentECP > gameData.highestECP) {
        gameData.highestECP = gameData.currentECP; // Update highest ECP
        checkAchievements(); // Recheck achievements if highest ECP changes
    }
    saveGameData();
    // Update button disabled states based on new ECP (relevant for main game screen)
    updateGameDisplay();
}
// Function to display messages (success/failure)
function displayMessage(message, type) {
    messageDisplay.textContent = message;
    messageDisplay.className = ''; // Clear previous classes
    if (type) {
        messageDisplay.classList.add(type); // Add 'success', 'failure', or 'info' class
    }
    setTimeout(() => {
        messageDisplay.textContent = '';
        messageDisplay.className = '';
    }, 3000); // Message disappears after 2 seconds
}

// --- Game Initialization & Data Handling ---

// Load game data from Local Storage
function loadGameData() {
    const savedData = localStorage.getItem('wordScrambleGameData');
    if (savedData) {
        gameData = JSON.parse(savedData);
    }
    // Ensure new properties are initialized if loading old data
    gameData.completedLevels = gameData.completedLevels || {};
    gameData.achievements = gameData.achievements || {};
    gameData.totalUnscrambled = gameData.totalUnscrambled || 0;
    gameData.totalFailures = gameData.totalFailures || 0;
    gameData.highestECP = gameData.highestECP || 200;
    gameData.currentTheme = gameData.currentTheme || 'default';
    gameData.currentLevelNum = gameData.currentLevelNum || 1;
    gameData.currentWordIndex = gameData.currentWordIndex || 0;

    applyTheme(gameData.currentTheme);
    updateECP(0); // Just update display
}

// Save game data to Local Storage
function saveGameData() {
    localStorage.setItem('wordScrambleGameData', JSON.stringify(gameData));
}


// --- Theme Management ---

function applyTheme(themeId) {
    // Remove all existing theme classes from the body
    document.body.classList.forEach(cls => {
        if (cls.startsWith('theme-')) {
            document.body.classList.remove(cls);
        }
    });
    // Add the new theme class
    if (themeId && themeId !== 'default') {
        document.body.classList.add(`theme-${themeId}`);
    }
    gameData.currentTheme = themeId;
    saveGameData();
    updateThemeButtons(); // Highlight active theme button
}

function renderThemeSelection() {
    themeGrid.innerHTML = '';
    themes.forEach(theme => {
        const themeButton = document.createElement('button');
        themeButton.classList.add('btn', 'theme-btn');
        themeButton.dataset.themeId = theme.id;
        themeButton.textContent = theme.name;
        if (gameData.currentTheme === theme.id) {
            themeButton.classList.add('active-theme');
        }
        themeButton.addEventListener('click', () => {
            applyTheme(theme.id);
            // Optionally, switch back to level selection after choosing theme
            // showScreen(levelSelectionScreen);
        });
        themeGrid.appendChild(themeButton);
    });
}

function updateThemeButtons() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if (btn.dataset.themeId === gameData.currentTheme) {
            btn.classList.add('active-theme');
        } else {
            btn.classList.remove('active-theme');
        }
    });
}


// --- Level Generation & Display ---

// Helper to get words based on approximate difficulty
// (In a real game, you'd have a large word list and pick based on length/complexity)
function getRandomWord(minLength, maxLength) {
    // This is a placeholder. In a real app, you'd load words from a JSON file or API.
    const commonWords = [
        "APPLE", "TABLE", "CHAIR", "HOUSE", "WATER", "PHONE", "CLOUD", "HAPPY", "DREAM", "FLOWER",
        "BUTTERFLY", "COMPUTER", "ELEPHANT", "MOUNTAIN", "OCEANIC", "JOURNEY", "FANTASY", "WHISPER",
        "PARADISE", "HARMONY", "ENDEAVOR", "MAJESTIC", "SERENDIPITY", "EPHEMERAL", "LUMINOUS",
        "INNOVATION", "QUINTESSENTIAL", "EFFULGENT", "CACUOUS", "JUXTAPOSE", "ONOMATOPOEIA",
        "SUPERCALIFRAGILISTICEXPIALIDOCIOUS", "UNCOPYRIGHTABLE", "DEOXYRIBONUCLEIC",
        "SYNCHRONIZE", "AMBIGUOUS", "CACOPHONY", "DIAPHANOUS", "EQUILIBRIUM", "FUGACIOUS",
        "GALUMPHING", "HETEROGENEOUS", "INCONSPICUOUS", "JOCULAR", "KALEIDOSCOPE", "LACONIC",
        "MAELSTROM", "NEFARIOUS", "OBFUSCATE", "PARSIMONIOUS", "QUINTESSENCE", "REDOLENT",
        "SAGACIOUS", "TACITURN", "UBIQUITOUS", "VACILLATE", "WAINSCOT", "XENOPHOBIA",
        "ZEPHYR", "ABERRATION", "BELLIGERENT", "CAPRICIOUS", "DESULTORY", "EFFRONTERY",
        "FLUMMOX", "GARRULOUS", "HEGEMONY", "IMPECUNIOUS", "JETTISON", "KOWTOW",
        "LUGUBRIOUS", "MENDACIOUS", "NOCTURNAL", "OBLIVION", "PANACEA", "QUANDARY",
        "RECALCITRANT", "SANCTIMONIOUS", "TREPIDATION", "UNCTUOUS", "VERISIMILITUDE",
        "WINSOME", "XYLOPHONE", "YOUTHFUL", "ZANY", "ACERBIC", "BENEVOLENT",
        "CAUSTIC", "DEBILITATE", "EFFERVESCENT", "FASTIDIOUS", "GREGARIOUS", "HAPHAZARD",
        "IMPERTURBABLE", "JUBILANT", "KINETIC", "LITHE", "MALLEABLE", "NUGATORY",
        "OBSEQUIOUS", "PERNICIOUS", "QUIXOTIC", "RAUCOUS", "SALIENT", "TRENCHANT",
        "UNFATHOMABLE", "VICARIOUS", "WISTFUL", "YIELDING", "ZIGZAG", "ADUMBRATE",
        "BLITHE", "CHOLERIC", "DELETERIOUS", "EUPHEMISM", "FRACTIOUS", "GAUCHE",
        "HISTRIONIC", "IMPLACABLE", "JINGOISM", "KUDOS", "LASSITUDE", "MAUDLIN",
        "NEPOTISM", "OBSTREPEROUS", "PALLIATE", "QUELL", "REPROBATE", "SARDONIC",
        "TEMERITY", "UNDULATE", "VIRULENT", "WAGGISH", "YOKEL", "ZENITH"
    ];


    let filteredWords = commonWords.filter(word => word.length >= minLength && word.length <= maxLength);
    if (filteredWords.length === 0) {
        // Fallback if no words match criteria, should not happen with good lists
        console.warn(`No words found for length range ${minLength}-${maxLength}. Using default.`);
        return "DEFAULT";
    }
    return filteredWords[Math.floor(Math.random() * filteredWords.length)];
}

// Generate all 200 levels with words and timers
function generateAllWords() {
    levelsConfig.length = 0; // Clear existing levels

    for (let i = 1; i <= 200; i++) {
        let numWords;
        let timer;
        let minLength, maxLength; // For word selection difficulty
        let difficultyTag = '';

        if (i <= 40) { // Level 1-40: 2 words, 20 secs, moderately hard
            numWords = 2;
            timer = 40;
            minLength = 4;
            maxLength = 6;
            difficultyTag = 'Moderately Hard';
        } else if (i <= 80) { // Level 41-80: 3 words, 25 secs, getting harder
            numWords = 3;
            timer = 60;
            minLength = 5;
            maxLength = 8;
            difficultyTag = 'Getting Harder';
        } else if (i <= 120) { // Level 81-120: 4 words, 30 secs, hard
            numWords = 4;
            timer = 80;
            minLength = 6;
            maxLength = 10;
            difficultyTag = 'Hard';
        } else if (i <= 160) { // Level 121-160: 5 words, 35 secs, very hard
            numWords = 5;
            timer = 100;
            minLength = 8;
            maxLength = 12;
            difficultyTag = 'Very Hard';
        } else { // Level 161-200: 6 words, 40 secs, extremely hard
            numWords = 6;
            timer = 120;
            minLength = 10;
            maxLength = 15;
            difficultyTag = 'Extremely Hard';
        }

        let wordsForLevel = [];
        for (let w = 0; w < numWords; w++) {
            wordsForLevel.push(getRandomWord(minLength, maxLength).toUpperCase());
        }

        levelsConfig.push({
            level: i,
            words: wordsForLevel,
            timer: timer,
            difficulty: difficultyTag
        });
    }
    // console.log("Generated levelsConfig:", levelsConfig); // For debugging
}


function renderLevelSelection() {
    levelGrid.innerHTML = '';
    for (let i = 1; i <= 200; i++) {
        const levelButton = document.createElement('button');
        levelButton.classList.add('level-btn');
        levelButton.dataset.level = i;

        const isPreviousLevelCompleted = (i === 1) || gameData.completedLevels[i - 1];
        const isLevelCompleted = gameData.completedLevels[i];
        const isLocked = !isPreviousLevelCompleted && !isLevelCompleted; // A level is locked if previous is not completed AND it's not already completed

        if (isLocked) {
            levelButton.classList.add('locked');
            levelButton.disabled = true; // Disable the button
            // Add a lock icon (using emoji for simplicity, could be Font Awesome)
            levelButton.innerHTML = `<span class="lock-icon">🔒</span> Level ${i}`;
        } else {
            levelButton.textContent = `Level ${i}`;
            if (isLevelCompleted) {
                levelButton.classList.add('completed');
            }
            levelButton.disabled = false; // Ensure it's enabled if not locked
        }

        levelButton.addEventListener('click', () => {
            if (!isLocked) { // Double-check lock status on click
                loadLevel(i);
            } else {
                displayMessage('Complete the previous level to unlock this one!', 'failure');
            }
        });
        levelGrid.appendChild(levelButton);
    }
}

// --- Main Game Flow ---

function loadLevel(levelNum) {
    const levelConfig = levelsConfig[levelNum - 1]; // levelsConfig is 0-indexed
    if (!levelConfig) {
        console.error("Level configuration not found for level:", levelNum);
        displayMessage("Error loading level. Please try again.", "failure");
        return;
    }

    // Stop any ongoing timer from previous game session
    clearInterval(timerInterval);

    gameData.currentLevelNum = levelNum;
    gameData.currentWordIndex = 0; // Start with the first word of the level
    currentLevelWords = [...levelConfig.words]; // Copy array to modify it
    timeLeft = levelConfig.timer;

    showScreen(mainGameScreen);
    startNewWord();
    updateGameDisplay();
    startTimer();
}

function startNewWord() {
    if (gameData.currentWordIndex < currentLevelWords.length) {
        correctWord = currentLevelWords[gameData.currentWordIndex];
        scrambledWordDisplay.textContent = scrambleWord(correctWord);
        userInput.value = ''; // Clear input field
        displayMessage(''); // Clear any previous messages
        updateGameDisplay();
        restartTimer(); // Restart timer for each new word in a level
    } else {
        // All words in the level completed
        gameData.completedLevels[gameData.currentLevelNum] = true;
        saveGameData();
        checkAchievements();
        displayMessage(`Level ${gameData.currentLevelNum} Completed!`, 'success');
        clearInterval(timerInterval); // Stop timer when level is fully completed
        setTimeout(() => {
            showScreen(levelSelectionScreen);
            renderLevelSelection(); // Refresh level buttons to show completion/unlock next
        }, 1500);
    }
}

function updateGameDisplay() {
    ecpDisplay.textContent = gameData.currentECP;
    timerDisplay.textContent = timeLeft;
    currentLevelInfo.textContent = `Level ${gameData.currentLevelNum} - Word ${gameData.currentWordIndex + 1} of ${currentLevelWords.length}`;

    // Disable hint/reveal if ECP is too low
    hintButton.disabled = gameData.currentECP < 20;
    revealButton.disabled = gameData.currentECP < 40;
}


// --- Timer Logic ---

function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleLevelFailure();
        }
    }, 1000);
}

function restartTimer() {
    clearInterval(timerInterval);
    const levelConfig = levelsConfig[gameData.currentLevelNum - 1];
    timeLeft = levelConfig ? levelConfig.timer : defaultAttemptTime;
    timerDisplay.textContent = timeLeft;
    startTimer();
}

function handleLevelFailure() {
    updateECP(-3); // -3 ECP for every failure
    gameData.totalFailures++;
    saveGameData();
    displayMessage(`Time's up! You failed Level ${gameData.currentLevelNum}.`, 'failure');
    clearInterval(timerInterval); // Ensure timer stops

    setTimeout(() => {
        showScreen(levelSelectionScreen); // Redirect to level selection
        renderLevelSelection(); // Refresh level buttons state
    }, 2500);
}


// --- Event Listeners ---

// NEW: Back to Games button
backToGamesButton.addEventListener('click', () => {
    // Redirect to your main game intro page
    window.location.href = 'gameintro.html'; // Assuming this is the path
});

startGameButton.addEventListener('click', () => {
    showScreen(levelSelectionScreen);
    renderLevelSelection();
    updateECP(0)
});

viewHistoryIntroButton.addEventListener('click', () => {
    showScreen(historyScreen);
    renderHistoryScreen();
});

// NEW: Back to Intro button
backToIntroButton.addEventListener('click', () => {
    showScreen(gameIntroScreen);
    updateECP(0);
});

selectThemeButton.addEventListener('click', () => {
    showScreen(themeSelectionScreen);
    renderThemeSelection();
});

viewHistoryLevelsButton.addEventListener('click', () => {
    showScreen(historyScreen);
    renderHistoryScreen();
});

backToLevelsFromGameButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stop timer when leaving game
    showScreen(levelSelectionScreen);
    renderLevelSelection();
    updateECP(0);
});

backToLevelsFromHistoryButton.addEventListener('click', () => {
    showScreen(levelSelectionScreen);
    renderLevelSelection();
    updateECP(0);
});

backToLevelsFromThemeButton.addEventListener('click', () => {
    showScreen(levelSelectionScreen);
    renderLevelSelection();
    updateECP(0);
});


// ... (rest of your script.js code above) ...

submitAnswerButton.addEventListener('click', () => {
    const userAnswer = userInput.value.trim().toUpperCase();
    if (userAnswer === correctWord) {
        // Check if the level is being completed for the first time
        if (!gameData.completedLevels[gameData.currentLevelNum]) {
            updateECP(30); // ONLY award ECP if completing for the first time
            displayMessage('Correct! Level completed!', 'success'); // Changed message
        } else {
            // Level already completed, no ECP awarded
            displayMessage('Correct! (Level already completed)', 'info',); // Informative message
        }

        gameData.totalUnscrambled++;
        gameData.currentWordIndex++; // Move to next word

        // Mark the level as completed AFTER the final word of the level
        if (gameData.currentWordIndex === currentLevelWords.length) {
            gameData.completedLevels[gameData.currentLevelNum] = true;
            checkAchievements(); // Check achievements only after level is marked completed
        }

        saveGameData(); // Save game data after all updates
        setTimeout(startNewWord, 500); // Load next word or finish level after a brief pause
    } else {
        updateECP(-3); // Still deduct ECP for incorrect answers, regardless of first time play
        gameData.totalFailures++;
        displayMessage('Incorrect! Try again.', 'failure');
        saveGameData();
        // Timer continues as per your requirement
    }
});

// ... (rest of your script.js code below) ...

hintButton.addEventListener('click', () => {
    if (gameData.currentECP >= 20) {
        updateECP(-20); // 20 ECP for hint
        giveHint();
        // The displayMessage in giveHint() will handle the feedback
        updateGameDisplay(); // Update ECP display and button states
    } else {
        displayMessage('Not enough ECP for a hint!', 'failure');
    }
});

revealButton.addEventListener('click', () => {
    if (gameData.currentECP >= 40) {
        updateECP(-40); // 40 ECP for reveal
        displayMessage(`The word was: ${correctWord}`, 'info');
        userInput.value = correctWord; // Fill input with correct word
        gameData.totalFailures++; // Reveal counts as a failure, as per game logic "every failure"
        saveGameData();
        clearInterval(timerInterval); // Stop timer
        // Directly call handleLevelFailure after a short delay
        setTimeout(() => {
            handleLevelFailure(); // This will deduct ECP again for the failure, but the user explicitly asked for -3 ECP per failure and reveal counts as failure.
                                  // If you only want -40 ECP for reveal and no additional -3, remove the updateECP(-3) from handleLevelFailure.
                                  // As per "3. ECP for every failure" and "REVEAL button will cost 40 ECP.", I'm interpreting reveal as a type of failure.
        }, 1500);
    } else {
        displayMessage('Not enough ECP to reveal!', 'failure');
    }
});
shuffleButton.addEventListener('click', () => {
    // Re-scramble the correct word and update the display
    scrambledWordDisplay.textContent = scrambleWord(correctWord);
    displayMessage('Word shuffled!', 'info'); // Provide feedback
});

shareButton.addEventListener('click', () => {
    const textToShare = `I'm stuck on this word in Word Scramble: "${scrambledWordDisplay.textContent}"! Can you help me?`;
    if (navigator.share) {
        navigator.share({
            title: 'Word Scramble Help',
            text: textToShare,
        }).then(() => {
            console.log('Shared successfully!');
            // Add achievement logic here if you want to track shares
            // gameData.achievements.shareKnowledge = true; // This specific ID
            // checkAchievements();
            displayMessage('Shared!', 'success');
        }).catch((error) => {
            console.error('Error sharing:', error);
            displayMessage('Failed to share.', 'failure');
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(textToShare).then(() => {
            displayMessage('Scrambled word copied to clipboard!', 'info');
            // gameData.achievements.shareKnowledge = true; // Still counts as sharing intent
            // checkAchievements();
        }).catch(err => {
            console.error('Failed to copy: ', err);
            displayMessage('Could not copy to clipboard.', 'failure');
        });
    }
});


// --- Hint Logic ---
let hintGivenCount = 0; // To track which hint type to give

function giveHint() {
    let hintText = '';
    const currentScrambled = scrambledWordDisplay.textContent;

    // Cycle through hint types
    switch (hintGivenCount % 4) {
        case 0: // Show first letter
            hintText = `First letter: ${correctWord.charAt(0)}`;
            break;
        case 1: // Show second letter
            if (correctWord.length > 1) {
                hintText = `Second letter: ${correctWord.charAt(1)}`;
            } else {
                hintText = `Word is too short for a second letter hint. Meaning: ${getWordMeaning(correctWord)}`;
            }
            break;
        case 2: // Show last letter
            hintText = `Last letter: ${correctWord.charAt(correctWord.length - 1)}`;
            break;
        case 3: // Say the meaning of the word (placeholder)
            hintText = `Meaning: ${getWordMeaning(correctWord)}`;
            break;
    }
    displayMessage(hintText, 'info');
    hintGivenCount++;
}

// Placeholder for getting word meaning. In a real app, you'd use a dictionary API.
function getWordMeaning(word) {
    const meanings = {
        "APPLE": "A round fruit with crisp flesh and a green, red, or yellow skin.",
        "TABLE": "A piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working.",
        "CHAIR": "A separate seat for one person, typically with a back and four legs.",
        "HOUSE": "A building for human habitation, especially one that is lived in by a family or small group of people.",
        "WATER": "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.",
        "COMPUTER": "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        "BUTTERFLY": "An insect with four large, often brightly colored wings, a slender body, and antennae with clubbed ends.",
        "ELEPHANT": "A very large plant-eating mammal with a prehensile trunk, long curved tusks, and large ears, native to Africa and southern Asia.",
        "MOUNTAIN": "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
        "OCEANIC": "Of or relating to the ocean.",
        "JOURNEY": "An act of traveling from one place to another.",
        "FANTASY": "The faculty or activity of imagining things, especially impossible or improbable things.",
        "WHISPER": "Speak very softly using one's breath rather than one's vocal cords, especially for the sake of secrecy.",
        "PARADISE": "An ideal or idyllic place or state.",
        "HARMONY": "The combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.",
        "ENDEAVOR": "An attempt to achieve a goal.",
        "MAJESTIC": "Having or showing impressive beauty or dignity.",
        "SERENDIPITY": "The occurrence and development of events by chance in a happy or beneficial way.",
        "EPHEMERAL": "Lasting for a very short time.",
        "LUMINOUS": "Emitting or reflecting light; shining.",
        "INNOVATION": "The action or process of innovating.",
        "QUINTESSENTIAL": "Representing the most perfect or typical example of a quality or class.",
        "EFFULGENT": "Shining brightly; radiant.",
        "CACUOUS": "Lacking content; empty (less common word, for higher levels).",
        "JUXTAPOSE": "Place or deal with close together for contrasting effect.",
        "ONOMATOPOEIA": "The formation of a word from a sound associated with what is named (e.g., cuckoo, sizzle).",
        "SUPERCALIFRAGILISTICEXPIALIDOCIOUS": "Extraordinarily good; wonderful (from Mary Poppins).",
        "UNCOPYRIGHTABLE": "Not able to be copyrighted.",
        "DEOXYRIBONUCLEIC": "Relating to deoxyribonucleic acid, the main constituent of chromosomes and the carrier of genetic information.",
        "SYNCHRONIZE": "Cause to occur or operate at the same time or rate.",
        "AMBIGUOUS": "Open to more than one interpretation; having a double meaning.",
        "CACOPHONY": "A harsh, discordant mixture of sounds.",
        "DIAPHANOUS": "Light, delicate, and translucent.",
        "EQUILIBRIUM": "A state in which opposing forces or influences are balanced.",
        "FUGACIOUS": "Tending to disappear; fleeting.",
        "GALUMPHING": "Move in a clumsy, ponderous, or noisy manner.",
        "HETEROGENEOUS": "Diverse in character or content.",
        "INCONSPICUOUS": "Not clearly visible or attracting attention.",
        "JOCULAR": "Fond of or characterized by joking; humorous or playful.",
        "KALEIDOSCOPE": "A constantly changing pattern or sequence of elements.",
        "LACONIC": "Using very few words.",
        "MAELSTROM": "A powerful whirlpool in the sea or a river.",
        "NEFARIOUS": "Wicked or criminal.",
        "OBFUSCATE": "Make obscure, unclear, or unintelligible.",
        "PARSIMONIOUS": "Unwilling to spend money or use resources; stingy or frugal.",
        "QUINTESSENCE": "The most perfect or typical example of a quality or class.",
        "REDOLENT": "Strongly reminiscent or suggestive of (something).",
        "SAGACIOUS": "Having or showing keen mental discernment and good judgment; shrewd.",
        "TACITURN": "Reserved or uncommunicative in speech; saying little.",
        "UBIQUITOUS": "Present, appearing, or found everywhere.",
        "VACILLATE": "Alternate or waver between different opinions or actions; be indecisive.",
        "WAINSCOT": "An area of wooden paneling on the lower part of the walls of a room.",
        "XENOPHOBIA": "Dislike of or prejudice against people from other countries.",
        "ZEPHYR": "A soft, gentle breeze.",
        "ABERRATION": "A departure from what is normal, usual, or expected, typically an unwelcome one.",
        "BELLIGERENT": "Hostile and aggressive.",
        "CAPRICIOUS": "Given to sudden and unaccountable changes of mood or behavior.",
        "DESULTORY": "Lacking a plan, purpose, or enthusiasm.",
        "EFFRONTERY": "Impertinent behavior.",
        "FLUMMOX": "Perplex (someone) to the extent of rendering them speechless.",
        "GARRULOUS": "Excessively talkative, especially on trivial matters.",
        "HEGEMONY": "Leadership or dominance, especially by one state or social group over others.",
        "IMPECUNIOUS": "Having little or no money.",
        "JETTISON": "Throw or drop (something) from an aircraft or ship.",
        "KOWTOW": "Act in an excessively subservient manner.",
        "LUGUBRIOUS": "Looking or sounding sad and dismal.",
        "MENDACIOUS": "Not telling the truth; lying.",
        "NOCTURNAL": "Done, occurring, or active at night.",
        "OBLIVION": "The state of being unaware or unconscious of what is happening around one.",
        "PANACEA": "A solution or remedy for all difficulties or diseases.",
        "QUANDARY": "A state of perplexity or uncertainty over what to do in a difficult situation.",
        "RECALCITRANT": "Having an obstinately uncooperative attitude toward authority or discipline.",
        "SANCTIMONIOUS": "Making a show of being morally superior to other people.",
        "TREPIDATION": "A feeling of fear or anxiety about something that may happen.",
        "UNCTUOUS": "Excessively or ingratiatingly flattering; oily.",
        "VERISIMILITUDE": "The appearance of being true or real.",
        "WINSOME": "Attractive or appealing in a fresh, innocent way.",
        "XYLOPHONE": "A musical instrument played by striking a row of wooden bars of different lengths with mallets.",
        "YOUTHFUL": "Having the qualities of youth.",
        "ZANY": "Amusingly unconventional and idiosyncratic.",
        "ADUMBRATE": "Report or represent in outline.",
        "BLITHE": "Showing a casual and cheerful indifference considered to be callous or improper.",
        "CHOLERIC": "Bad-tempered or irritable.",
        "DELETERIOUS": "Causing harm or damage.",
        "EUPHEMISM": "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
        "FRACTIOUS": "Irritable and quarrelsome.",
        "GAUCHE": "Lacking ease or grace; unsophisticated and socially awkward.",
        "HISTRIONIC": "Overly theatrical or melodramatic in character or style.",
        "IMPLACABLE": "Unable to be appeased or mollified.",
        "JINGOISM": "Extreme patriotism, especially in the form of aggressive or warlike foreign policy.",
        "KUDOS": "Praise and honor received for an achievement.",
        "LASSITUDE": "A state of physical or mental weariness; lack of energy.",
        "MAUDLIN": "Self-pityingly or tearfully sentimental, often through drunkenness.",
        "NEPOTISM": "The practice among those with power or influence of favoring relatives or friends, especially by giving them jobs.",
        "OBSTREPEROUS": "Noisy and difficult to control.",
        "PALLIATE": "Make (a disease or its symptoms) less severe or unpleasant without removing the cause.",
        "QUELL": "Put an end to (a rebellion or other disorder), typically by the use of force.",
        "REPROBATE": "An unprincipled person (often used humorously or as a term of endearment).",
        "SARDONIC": "Grimly mocking or cynical.",
        "TEMERITY": "Excessive confidence or boldness; audacity.",
        "UNDULATE": "Move with a smooth up-and-down motion.",
        "VIRULENT": "Extremely severe or harmful in its effects.",
        "WAGGISH": "Humorous in a playful, mischievous, or facetious manner.",
        "YOKEL": "An uneducated and unsophisticated person from the countryside.",
        "ZENITH": "The time at which something is most powerful or successful."
    };
    return meanings[word] || "No meaning found for this word. It's a challenging one!";
}


// --- History and Achievements ---

function renderHistoryScreen() {
    // Update stats display
    statsUnscrambled.textContent = gameData.totalUnscrambled;
    statsFailures.textContent = gameData.totalFailures;
    statsHighestEcp.textContent = gameData.highestECP;

    // Render achievements
    achievementsList.innerHTML = '';
    achievementsConfig.forEach(ach => {
        const li = document.createElement('li');
        li.textContent = ach.name;
        const statusSpan = document.createElement('span');
        if (gameData.achievements[ach.id]) {
            statusSpan.textContent = 'Unlocked';
            li.classList.add('completed-achievement');
        } else {
            statusSpan.textContent = 'Locked';
            li.classList.remove('completed-achievement');
        }
        li.appendChild(statusSpan);
        achievementsList.appendChild(li);
    });
}

function checkAchievements() {
    achievementsConfig.forEach(ach => {
        if (!gameData.achievements[ach.id] && ach.condition(gameData)) {
            gameData.achievements[ach.id] = true;
            updateECP(100); // 100 ECP per achievement completion
            displayMessage(`Achievement Unlocked: ${ach.name}! (+100 ECP)`, 'success');
            saveGameData();
            // Re-render history screen if currently visible
            if (historyScreen.classList.contains('active')) {
                renderHistoryScreen();
            }
        }
    });
}


// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    generateAllWords(); // Generate all words for all levels
    loadGameData(); // Load saved data or initialize new
    // Initial screen setup
    showScreen(gameIntroScreen);
    updateECP(0); // Update ECP display based on loaded data
});
