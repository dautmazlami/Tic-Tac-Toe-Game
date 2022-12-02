function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player name for both players");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
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

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  
  const winnerID = checkForGameOver();
  console.log(winnerID);

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // Checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checking the column for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][1];
    }
  }

  //Checking the Diagonal top left to bottom right 
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

   //Checking the Diagonal bottom left to top right 
   if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;

  //   if (
  //     gameData[1][0] > 0 &&
  //     gameData[1][0] === gameData[1][1] &&
  //     gameData[1][1] === gameData[1][2]
  //   ) {
  //     return gameData[1][0];
  //   }

  //   if (
  //     gameData[2][0] > 0 &&
  //     gameData[2][0] === gameData[2][1] &&
  //     gameData[2][1] === gameData[2][2]
  //   ) {
  //     return gameData[2][0];
  //   }
}
