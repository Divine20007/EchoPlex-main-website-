// script.js (Conceptual - not strictly necessary for basic links)

// Example game data (you would likely fetch this from a server or a JSON file)
const games = [
    {
        id: 'game-1',
        title: 'Game Title One',
        description: 'A fast-paced action game where you battle hordes of aliens to save the galaxy. Experience intense combat and explore diverse worlds.',
        thumbnail: 'path/to/game1-thumbnail.jpg',
        link: 'game1.html'
    },
    {
        id: 'game-2',
        title: 'Mystic Puzzle Quest',
        description: 'Unravel ancient mysteries in this challenging puzzle game. Exercise your mind with intricate riddles and discover hidden secrets.',
        thumbnail: 'path/to/game2-thumbnail.jpg',
        link: 'game2.html'
    },
    {
        id: 'game-3',
        title: 'Infinite Runner X',
        description: 'Test your reflexes in this endless runner. Jump, slide, and dodge obstacles as you aim for the highest score!',
        thumbnail: 'path/to/game3-thumbnail.jpg',
        link: 'game3.html'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gameShowcase = document.querySelector('.game-showcase');

    // If you were generating cards with JS, you'd clear existing ones first
    // gameShowcase.innerHTML = '';

    // This loop is more for demonstration if you were building the HTML with JS
    // For now, our HTML is static, so this part isn't active.
    /*
    games.forEach(game => {
        const gameCard = document.createElement('section');
        gameCard.classList.add('game-card');
        gameCard.id = game.id;
        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="Thumbnail for ${game.title}">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <a href="${game.link}" class="play-button">Play Now</a>
        `;
        // gameShowcase.appendChild(gameCard); // Uncomment if generating all with JS
    });
    */

    // Simple example: Add a subtle animation class after load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
