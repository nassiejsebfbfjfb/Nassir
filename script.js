// Game State
const gameState = {
    numPlayers: 0,
    players: [],
    currentPlayerIndex: 0,
    round: 1,
    board: [],
    gameActive: true,
    selectedToken: null
};

// Animal Tokens
const animalTokens = [
    '🐪', '🐕', '🐈', '🐸', '🦁', '🐢', '🦊', '🐻',
    '🦉', '🦆', '🐙', '🦅', '🐘', '🦒', '🦓', '🦏',
    '🦛', '🦘', '🐨', '🐅', '🦣', '🦬', '🦡', '🦝'
];

// Board Spaces
const boardSpaces = [
    { name: 'GO', type: 'go', price: 0 },
    { name: 'Mediterranean Avenue', type: 'property', price: 60, color: '#8B4513' },
    { name: 'Community Chest', type: 'chest', price: 0 },
    { name: 'Baltic Avenue', type: 'property', price: 60, color: '#8B4513' },
    { name: 'Income Tax', type: 'tax', price: 200 },
    { name: 'Reading Railroad', type: 'railroad', price: 200 },
    { name: 'Oriental Avenue', type: 'property', price: 100, color: '#ADD8E6' },
    { name: 'Chance', type: 'chance', price: 0 },
    { name: 'Vermont Avenue', type: 'property', price: 100, color: '#ADD8E6' },
    { name: 'Connecticut Avenue', type: 'property', price: 120, color: '#ADD8E6' },
    { name: 'Jail', type: 'jail', price: 0 },
    { name: 'St. Charles Place', type: 'property', price: 140, color: '#FFB6C1' },
    { name: 'Electric Company', type: 'utility', price: 150 },
    { name: 'States Avenue', type: 'property', price: 140, color: '#FFB6C1' },
    { name: 'Virginia Avenue', type: 'property', price: 160, color: '#FFB6C1' },
    { name: 'St. James Place', type: 'property', price: 180, color: '#FFA500' },
    { name: 'Community Chest', type: 'chest', price: 0 },
    { name: 'Tennessee Avenue', type: 'property', price: 180, color: '#FFA500' },
    { name: 'New York Avenue', type: 'property', price: 200, color: '#FFA500' },
    { name: 'Free Parking', type: 'parking', price: 0 },
    { name: 'Kentucky Avenue', type: 'property', price: 220, color: '#FF0000' },
    { name: 'Chance', type: 'chance', price: 0 },
    { name: 'Indiana Avenue', type: 'property', price: 220, color: '#FF0000' },
    { name: 'Illinois Avenue', type: 'property', price: 240, color: '#FF0000' },
    { name: 'B&O Railroad', type: 'railroad', price: 200 },
    { name: 'Atlantic Avenue', type: 'property', price: 260, color: '#FFFF00' },
    { name: 'Ventnor Avenue', type: 'property', price: 260, color: '#FFFF00' },
    { name: 'Water Works', type: 'utility', price: 150 },
    { name: 'Marvin Gardens', type: 'property', price: 280, color: '#FFFF00' },
    { name: 'Go To Jail', type: 'gotojail', price: 0 },
    { name: 'Pacific Avenue', type: 'property', price: 300, color: '#00B050' },
    { name: 'North Carolina Avenue', type: 'property', price: 300, color: '#00B050' },
    { name: 'Community Chest', type: 'chest', price: 0 },
    { name: 'Pennsylvania Avenue', type: 'property', price: 320, color: '#00B050' },
    { name: 'Short Line', type: 'railroad', price: 200 },
    { name: 'Chance', type: 'chance', price: 0 },
    { name: 'Park Place', type: 'property', price: 350, color: '#00008B' },
    { name: 'Luxury Tax', type: 'tax', price: 75 },
    { name: 'Boardwalk', type: 'property', price: 400, color: '#00008B' }
];

// Property Class
class Property {
    constructor(space) {
        this.name = space.name;
        this.type = space.type;
        this.price = space.price;
        this.color = space.color;
        this.owner = null;
    }
}

// Player Class
class Player {
    constructor(name, token) {
        this.name = name;
        this.token = token;
        this.balance = 1500;
        this.position = 0;
        this.properties = [];
        this.isBankrupt = false;
    }
}

// Set number of players
function setPlayers(num) {
    gameState.numPlayers = num;
    gameState.players = [];
    
    document.getElementById('setupScreen').classList.remove('active');
    document.getElementById('playerSetupScreen').classList.add('active');
    
    renderPlayerSetup();
}

// Render Player Setup
function renderPlayerSetup() {
    document.getElementById('playerNameInput').value = '';
    gameState.selectedToken = null;
    renderTokenGrid();
    updatePlayerList();
}

// Render Token Grid
function renderTokenGrid() {
    const tokenGrid = document.getElementById('tokenGrid');
    tokenGrid.innerHTML = '';
    
    const usedTokens = gameState.players.map(p => p.token);
    
    animalTokens.forEach(token => {
        const tokenDiv = document.createElement('div');
        tokenDiv.className = 'token-option';
        if (usedTokens.includes(token)) {
            tokenDiv.classList.add('disabled');
        }
        if (token === gameState.selectedToken) {
            tokenDiv.classList.add('selected');
        }
        tokenDiv.textContent = token;
        tokenDiv.onclick = () => {
            if (!usedTokens.includes(token)) {
                gameState.selectedToken = token;
                renderTokenGrid();
            }
        };
        tokenGrid.appendChild(tokenDiv);
    });
}

// Update Player List
function updatePlayerList() {
    const playerList = document.getElementById('playerList');
    const currentPlayer = gameState.players.length + 1;
    
    document.getElementById('currentPlayerSetup').textContent = `Player ${currentPlayer}: Enter your name and choose a token`;
    
    playerList.innerHTML = gameState.players
        .map((p, i) => `<li>${i + 1}. ${p.token} ${p.name}</li>`)
        .join('');
    
    if (gameState.players.length === gameState.numPlayers) {
        document.getElementById('nextPlayerBtn').style.display = 'none';
        document.getElementById('startGameBtn').style.display = 'inline-block';
    } else {
        document.getElementById('nextPlayerBtn').style.display = 'inline-block';
        document.getElementById('startGameBtn').style.display = 'none';
    }
}

// Add Player
function addPlayer() {
    const name = document.getElementById('playerNameInput').value.trim();
    
    if (!name) {
        alert('Please enter a player name!');
        return;
    }
    
    if (!gameState.selectedToken) {
        alert('Please select an animal token!');
        return;
    }
    
    const player = new Player(name, gameState.selectedToken);
    gameState.players.push(player);
    
    document.getElementById('playerNameInput').value = '';
    gameState.selectedToken = null;
    
    updatePlayerList();
    renderTokenGrid();
}

// Go Back to Setup
function goBackToSetup() {
    document.getElementById('playerSetupScreen').classList.remove('active');
    document.getElementById('setupScreen').classList.add('active');
    gameState.players = [];
    gameState.numPlayers = 0;
}

// Initialize Board
function initializeBoard() {
    gameState.board = boardSpaces.map(space => new Property(space));
}

// Start Game
function startGame() {
    initializeBoard();
    gameState.currentPlayerIndex = 0;
    gameState.round = 1;
    
    document.getElementById('playerSetupScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    
    updateGameDisplay();
}

// Update Game Display
function updateGameDisplay() {
    const player = gameState.players[gameState.currentPlayerIndex];
    
    document.getElementById('currentPlayerName').textContent = `${player.token} ${player.name}'s Turn`;
    document.getElementById('playerBalance').textContent = `$${player.balance}`;
    document.getElementById('playerPosition').textContent = boardSpaces[player.position].name;
    document.getElementById('playerProperties').textContent = player.properties.length;
    document.getElementById('roundNumber').textContent = gameState.round;
    document.getElementById('activePlayers').textContent = gameState.players.filter(p => !p.isBankrupt).length;
    
    updateBoardDisplay();
    updatePlayerStatusGrid();
    resetActionButtons();
    document.getElementById('actionMessage').textContent = `${player.token} ${player.name} is ready to roll!`;
    document.getElementById('actionMessage').classList.remove('error', 'success');
}

// Update Board Display - Show player positions
function updateBoardDisplay() {
    // Clear all player displays
    for (let i = 0; i < 40; i++) {
        const playersDiv = document.getElementById(`players${i}`);
        if (playersDiv) {
            playersDiv.innerHTML = '';
        }
    }
    
    // Add players to their positions
    gameState.players.forEach(player => {
        const playersDiv = document.getElementById(`players${player.position}`);
        if (playersDiv) {
            const tokenSpan = document.createElement('div');
            tokenSpan.className = 'player-token-small';
            tokenSpan.textContent = player.token;
            tokenSpan.title = player.name;
            playersDiv.appendChild(tokenSpan);
        }
    });
}

// Update Player Status Grid
function updatePlayerStatusGrid() {
    const grid = document.getElementById('playerStatusGrid');
    grid.innerHTML = gameState.players
        .map((p, i) => `
            <div class="player-status ${i === gameState.currentPlayerIndex ? 'current' : ''} ${p.isBankrupt ? 'bankrupt' : ''}">
                <div class="player-status-token">${p.token}</div>
                <div class="player-status-name">${p.name}</div>
                <div class="player-status-money">💰 $${p.balance}</div>
                <div class="player-status-money">🏠 ${p.properties.length}</div>
            </div>
        `)
        .join('');
}

// Reset Action Buttons
function resetActionButtons() {
    document.getElementById('rollDiceBtn').style.display = 'block';
    document.getElementById('buyPropertyBtn').style.display = 'none';
    document.getElementById('endTurnBtn').style.display = 'none';
}

// Roll Dice
function rollDice() {
    const player = gameState.players[gameState.currentPlayerIndex];
    
    if (player.isBankrupt) {
        endTurn();
        return;
    }
    
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;
    
    document.getElementById('actionMessage').textContent = `🎲 ${player.token} ${player.name} rolled ${dice1} + ${dice2} = ${total}`;
    
    player.position = (player.position + total) % 40;
    
    if ((player.position + total) >= 40) {
        player.balance += 200;
        document.getElementById('actionMessage').textContent += ` 🎉 Passed GO! Collected $200!`;
    }
    
    document.getElementById('rollDiceBtn').disabled = true;
    
    setTimeout(() => {
        handleLanding(player);
        document.getElementById('rollDiceBtn').disabled = false;
    }, 1000);
}

// Handle Landing on Space
function handleLanding(player) {
    const space = boardSpaces[player.position];
    const property = gameState.board[player.position];
    
    updateGameDisplay();
    
    switch (space.type) {
        case 'property':
            handlePropertyLanding(player, property);
            break;
        case 'tax':
            player.balance -= space.price;
            document.getElementById('actionMessage').classList.add('error');
            document.getElementById('actionMessage').textContent = `💸 ${player.token} ${player.name} paid $${space.price} in taxes!`;
            document.getElementById('endTurnBtn').style.display = 'block';
            break;
        case 'gotojail':
            player.position = 10;
            document.getElementById('actionMessage').textContent = `🚔 ${player.token} ${player.name} goes to Jail!`;
            document.getElementById('endTurnBtn').style.display = 'block';
            break;
        case 'go':
            document.getElementById('actionMessage').classList.add('success');
            document.getElementById('actionMessage').textContent = `🎉 ${player.token} ${player.name} is at GO!`;
            document.getElementById('endTurnBtn').style.display = 'block';
            break;
        case 'parking':
        case 'jail':
        case 'chest':
        case 'chance':
            document.getElementById('actionMessage').textContent = `${player.token} ${player.name} landed on ${space.name}!`;
            document.getElementById('endTurnBtn').style.display = 'block';
            break;
    }
}

// Handle Property Landing
function handlePropertyLanding(player, property) {
    if (property.owner === null) {
        document.getElementById('actionMessage').textContent = `🏠 ${player.token} ${player.name} landed on unowned ${property.name}. Buy for $${property.price}?`;
        document.getElementById('buyPropertyBtn').style.display = 'block';
        document.getElementById('endTurnBtn').style.display = 'block';
    } else if (property.owner === player) {
        document.getElementById('actionMessage').classList.add('success');
        document.getElementById('actionMessage').textContent = `✨ ${player.token} ${player.name} owns ${property.name}!`;
        document.getElementById('endTurnBtn').style.display = 'block';
    } else {
        const rent = Math.ceil(property.price / 10);
        if (player.balance >= rent) {
            player.balance -= rent;
            property.owner.balance += rent;
            document.getElementById('actionMessage').classList.add('error');
            document.getElementById('actionMessage').textContent = `💸 ${player.token} ${player.name} paid $${rent} rent to ${property.owner.token} ${property.owner.name}!`;
        } else {
            player.isBankrupt = true;
            document.getElementById('actionMessage').classList.add('error');
            document.getElementById('actionMessage').textContent = `❌ ${player.token} ${player.name} cannot pay rent and is BANKRUPT!`;
        }
        document.getElementById('endTurnBtn').style.display = 'block';
    }
}

// Buy Property
function buyProperty() {
    const player = gameState.players[gameState.currentPlayerIndex];
    const property = gameState.board[player.position];
    
    if (player.balance >= property.price) {
        player.balance -= property.price;
        property.owner = player;
        player.properties.push(property);
        document.getElementById('actionMessage').classList.remove('error');
        document.getElementById('actionMessage').classList.add('success');
        document.getElementById('actionMessage').textContent = `✅ ${player.token} ${player.name} bought ${property.name} for $${property.price}!`;
    } else {
        document.getElementById('actionMessage').classList.remove('success');
        document.getElementById('actionMessage').classList.add('error');
        document.getElementById('actionMessage').textContent = `❌ ${player.token} ${player.name} cannot afford ${property.name}!`;
    }
    
    document.getElementById('buyPropertyBtn').style.display = 'none';
    document.getElementById('endTurnBtn').style.display = 'block';
    updateGameDisplay();
}

// End Turn
function endTurn() {
    document.getElementById('actionMessage').classList.remove('error', 'success');
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    
    // Check for bankruptcy and skip bankrupt players
    while (gameState.players[gameState.currentPlayerIndex].isBankrupt && gameState.players.some(p => !p.isBankrupt)) {
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    }
    
    // Check if only one player left
    const activePlayers = gameState.players.filter(p => !p.isBankrupt);
    if (activePlayers.length <= 1) {
        endGame(activePlayers[0]);
        return;
    }
    
    // Update round
    if (gameState.currentPlayerIndex === 0) {
        gameState.round++;
    }
    
    updateGameDisplay();
}

// Quit Game
function quitGame() {
    if (confirm('Are you sure you want to quit the game?')) {
        location.reload();
    }
}

// End Game
function endGame(winner) {
    gameState.gameActive = false;
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('gameOverScreen').classList.add('active');
    
    const winnerInfo = document.getElementById('winnerInfo');
    winnerInfo.innerHTML = `
        <div class="trophy">🏆</div>
        <h2>${winner.token} ${winner.name} WINS!</h2>
        <p>Total Assets: $${winner.balance + (winner.properties.length * 100)}</p>
    `;
    
    const standings = document.getElementById('finalStandings');
    const sortedPlayers = [...gameState.players].sort((a, b) => b.balance - a.balance);
    standings.innerHTML = '<h3>📊 Final Standings:</h3>' + sortedPlayers
        .map((p, i) => `
            <div class="standings-entry">
                <strong>${i + 1}. ${p.token} ${p.name}</strong> - $${p.balance} (${p.properties.length} properties)
            </div>
        `)
        .join('');
}
