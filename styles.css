* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.screen {
    display: none;
    width: 100%;
    max-width: 1600px;
    animation: fadeIn 0.5s ease-in;
}

.screen.active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Setup Screen */
.setup-container {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.setup-container h1 {
    font-size: 48px;
    margin-bottom: 10px;
    color: #667eea;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
}

.setup-box {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    margin: 20px 0;
}

.setup-box h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
}

/* Player Selector */
.player-selector {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
    margin: 30px 0;
}

.player-btn {
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    border: 3px solid #ddd;
    background: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.player-btn:hover {
    border-color: #667eea;
    background: #f0f4ff;
    transform: scale(1.05);
}

.player-btn.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: #667eea;
}

/* Player Input Section */
.player-input-section {
    margin: 30px 0;
}

.name-input {
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
    transition: all 0.3s ease;
}

.name-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

/* Token Selection */
.token-selection {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 15px;
    margin: 20px 0;
}

.token-selection h3 {
    margin-bottom: 20px;
    color: #333;
}

/* Token Grid */
.token-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 12px;
    margin: 20px 0;
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
}

.token-option {
    background: white;
    border: 3px solid #ddd;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 40px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.token-option:hover {
    border-color: #667eea;
    transform: scale(1.1);
    background: #f0f4ff;
}

.token-option.selected {
    border-color: #667eea;
    background: #e7eeff;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transform: scale(1.15);
}

.token-option.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

/* Current Players */
.current-players {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 15px;
    margin: 20px 0;
    text-align: left;
}

.current-players h3 {
    margin-bottom: 15px;
    color: #333;
}

.player-list {
    list-style: none;
}

.player-list li {
    padding: 12px;
    background: white;
    margin: 8px 0;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    font-weight: 500;
}

/* Buttons */
.btn-primary, .btn-secondary, .btn-danger, .btn-action {
    padding: 12px 30px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background: #5a6268;
    transform: translateY(-2px);
}

.btn-danger {
    background: #dc3545;
    color: white;
}

.btn-danger:hover {
    background: #c82333;
    transform: translateY(-2px);
}

.btn-action {
    padding: 10px 20px;
    font-size: 14px;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    flex-wrap: wrap;
}

/* Game Screen Layout */
.game-wrapper {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 20px;
    background: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    height: 100vh;
    overflow: hidden;
}

@media (max-width: 1400px) {
    .game-wrapper {
        grid-template-columns: 1fr;
        height: auto;
    }
}

/* Sidebar */
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    max-height: 100vh;
}

/* Main Area */
.main-area {
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    max-height: 100vh;
}

/* Current Player Box */
.current-player-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 15px;
}

.current-player-box h2 {
    font-size: 20px;
    margin-bottom: 15px;
}

.player-stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 10px 15px;
    border-radius: 8px;
}

.stat .label {
    font-weight: bold;
    font-size: 14px;
}

.stat .value {
    font-size: 16px;
    font-weight: bold;
}

/* Game Info Box */
.game-info-box {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.info-item {
    text-align: center;
    padding: 10px;
    background: white;
    border-radius: 8px;
}

.info-item .label {
    display: block;
    font-size: 12px;
    color: #666;
    margin-bottom: 5px;
}

.info-item .value {
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #667eea;
}

/* Monopoly Board */
.monopoly-board {
    display: grid;
    grid-template-columns: 80px repeat(9, 1fr) 80px;
    grid-template-rows: 80px repeat(9, 1fr) 80px;
    gap: 2px;
    background: #ddd;
    padding: 10px;
    border-radius: 10px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23ddd" width="100" height="100"/></svg>');
    height: fit-content;
}

.board-space {
    background: white;
    border: 1px solid #999;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 80px;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
}

.board-space.corner {
    background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
    color: white;
    grid-column: span 1;
    grid-row: span 1;
    font-size: 12px;
}

.space-name {
    font-weight: bold;
    margin-bottom: 3px;
}

.space-players {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;
}

.player-token-small {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}

.board-top {
    grid-column: 2 / 11;
    grid-row: 1;
    display: flex;
    gap: 2px;
    flex-direction: row-reverse;
}

.board-bottom {
    grid-column: 2 / 11;
    grid-row: 11;
    display: flex;
    gap: 2px;
    flex-direction: row;
}

.board-left {
    grid-column: 1;
    grid-row: 2 / 11;
    display: flex;
    gap: 2px;
    flex-direction: column;
}

.board-right {
    grid-column: 11;
    grid-row: 2 / 11;
    display: flex;
    gap: 2px;
    flex-direction: column-reverse;
}

.board-center {
    grid-column: 2 / 11;
    grid-row: 2 / 11;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 24px;
    font-weight: bold;
}

/* Board Corners */
#space0 {
    grid-column: 1;
    grid-row: 11;
}

#space10 {
    grid-column: 1;
    grid-row: 1;
}

#space20 {
    grid-column: 11;
    grid-row: 11;
}

#space30 {
    grid-column: 11;
    grid-row: 1;
}

/* Action Box */
.action-box {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
    border-top: 3px solid #667eea;
}

.action-message {
    background: white;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #333;
    border-left: 4px solid #667eea;
    text-align: center;
}

.action-message.error {
    background: #f8d7da;
    border-left-color: #dc3545;
    color: #721c24;
}

.action-message.success {
    background: #d4edda;
    border-left-color: #28a745;
    color: #155724;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* Players Section */
.players-section {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
}

.players-section h3 {
    margin-bottom: 12px;
    color: #333;
}

.player-status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
}

.player-status {
    background: white;
    padding: 12px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 13px;
}

.player-status.current {
    background: #fff3cd;
    border-left-color: #ffc107;
}

.player-status.bankrupt {
    background: #f8d7da;
    border-left-color: #dc3545;
    opacity: 0.7;
}

.player-status-token {
    font-size: 20px;
    margin-bottom: 5px;
}

.player-status-name {
    font-weight: bold;
    margin-bottom: 5px;
}

.player-status-money {
    font-size: 12px;
    color: #666;
}

/* Winner Box */
.winner-box {
    background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
    color: white;
    padding: 40px;
    border-radius: 15px;
    margin: 30px 0;
    text-align: center;
}

.winner-box .trophy {
    font-size: 80px;
    margin-bottom: 20px;
}

.standings {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 15px;
    margin: 20px 0;
    text-align: left;
}

.standings-entry {
    padding: 10px;
    margin: 5px 0;
    background: white;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.standings-entry strong {
    color: #667eea;
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #764ba2;
}
