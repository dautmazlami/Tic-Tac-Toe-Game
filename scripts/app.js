const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');

const editPlayer1Btn = document.getElementById('edit-player1-btn');
const editPlayer2Btn = document.getElementById('edit-player2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');

editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);

cancelConfigBtn.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);
