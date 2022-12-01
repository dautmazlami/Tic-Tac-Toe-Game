function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player name for both players');
        return;
    }
    
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0 ) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
}

function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    switchPlayer();
    
}