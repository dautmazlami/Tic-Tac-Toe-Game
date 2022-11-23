function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event) {
    event.preventDefault(); // <-- this method prevents the browser default behavior of sending a request automaticlly
    console.log(event);
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim;
    console.log(enteredPlayerName);

    if (!enteredPlayerName) {
        errorsOutputElement.textContent = 'Please enter a valid name!'
        return;
    }
}