function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player name for both players');
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0 ) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {

    // if (event.target.tagName != 'LI') { Alternative way to handle the click on the game board
    //     return; 
    // }
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    switchPlayer();
}