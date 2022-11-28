function openPlayerConfig(event) {
    editedPlayer = + event.target.dataset.playerid; // +'1' => 1 int
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault(); // <-- this method prevents the browser default behavior of sending a request automaticlly
    console.log(event);
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim(); // don't forget to add curly braces () to --> .trim() because this method wont work
    console.log(enteredPlayerName);

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1];

    closePlayerConfig();

}