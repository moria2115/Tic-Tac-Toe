function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid; //+'1' ==>1
  editedPlayer = selectedPlayerId;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerNAme = formData.get("playername").trim(); // '     ' ==> ''

  if (!enteredPlayerNAme) {
    // enteredPlayerName === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerNAme;

  //   if (editedPlayer === 1) {
  //     players[0].name = enteredPlayerNAme;
  //   } else {
  //     players[1].name = enteredPlayerNAme;
  //   }

  players[editedPlayer - 1].name = enteredPlayerNAme; //shorter than if
  
  closePlayerConfig();
}
