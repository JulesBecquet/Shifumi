var username;
var continueInput = document.querySelector('.continueInput');

continueInput.addEventListener('click', function () {
  username = document.querySelector('#usernameInput').value;
  document.querySelector('.hello').textContent = `Bonjour,  ${username} choisis ton mode de jeux.`;
  document.querySelector('.usernameBlock').style.display = 'none';
  document.querySelector('.modeGame').style.display = 'flex';
})


var windowWin = document.querySelector('.win');
var windowLose = document.querySelector('.lose');
var windowEquality = document.querySelector('.equality');

var cardFeuille = document.querySelector('.cardFeuille');
var cardCiseaux = document.querySelector('.cardCiseaux');
var cardPierre = document.querySelector('.cardPierre');

var dropZone = document.querySelector('#dragDrop');

cardFeuille.addEventListener('dragstart', function (ev) {
  ev.dataTransfer.setData("text", ev.target.id);
})

cardPierre.addEventListener('dragstart', function (ev) {
  ev.dataTransfer.setData("text", ev.target.id);
})

cardCiseaux.addEventListener('dragstart', function (ev) {
  ev.dataTransfer.setData("text", ev.target.id);
})

dropZone.addEventListener('dragover', function (ev) {
  ev.preventDefault();
})

dropZone.addEventListener('drop', function (ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  switch (data) {
    case 'dragFeuille':
      cardFeuille.classList.add("cardFeuilleDrop");
      cardFeuille.value = "feuille";
      userChoice = cardFeuille.value;
      comChoice = randomComputer();

      switch (comChoice) {
        case "feuille":
          windowEquality.style.display = "flex";
          break;
        case "ciseaux":
          windowLose.style.display = "flex";
          document.querySelector('.scoreComputer').textContent = +1;
          break;
        case "pierre":
          windowWin.style.display = "flex";
          document.querySelector('.scorePlayer').textContent = +1;
          break;
      }

      break;

    case 'dragPierre':
      cardPierre.classList.add("cardPierreDrop");
      cardPierre.value = "pierre";
      userChoice = cardPierre.value;
      comChoice = randomComputer();

      switch (comChoice) {
        case "pierre":
          windowEquality.style.display = "flex";
          break;
        case "feuille":
          windowLose.style.display = "flex";
          document.querySelector('.scoreComputer').textContent = +1;
          break;
        case "ciseaux":
          windowWin.style.display = "flex";
          document.querySelector('.scorePlayer').textContent = +1;
          break;
      }

      break;

    case 'dragCiseaux':
      cardCiseaux.classList.add("cardCiseauxDrop");
      cardCiseaux.value = "ciseaux";
      userChoice = cardCiseaux.value;
      comChoice = randomComputer();

      switch (comChoice) {
        case "ciseaux":
          windowEquality.style.display = "flex";
          break;
        case "pierre":
          windowLose.style.display = "flex";
          document.querySelector('.scoreComputer').textContent = +1;
          break;
        case "feuille":
          windowWin.style.display = "flex";
          document.querySelector('.scorePlayer').textContent = +1;
          break;
      }

      break;
  }

  setTimeout(function () {
    reset();
  }, 1500);

})

let choices = ["cardPierre", "cardFeuille", "cardCiseaux"];
var userChoice = "";
var comChoice = "";
var result = document.getElementById("result");


function randomComputer() {
  var random = Math.floor(Math.random() * choices.length);

  if (random == 0) {
    comChoice = "pierre";
  }

  if (random == 1) {
    comChoice = "feuille";
  }

  if (random == 2) {
    comChoice = "ciseaux";
  }
  return comChoice;
}

function reset() {
  while (dragDrop.firstChild) {
    dragDrop.removeChild(dragDrop.firstChild);
  }
  var cardPlayer = document.querySelector('.cardPlayer');
  cardPlayer.innerHTML = `<img src="assets/img/La feuille.png" alt="carte feuille" class="cardFeuille" draggable="true" id="dragFeuille">` + `<img src="assets/img/Le ciseaux.png" alt="carte ciseaux" class="cardCiseaux" draggable="true" id="dragCiseaux">` + `<img src="assets/img/La pierre.png" alt="carte pierre" class="cardPierre" draggable="true" id="dragPierre">`;
  windowEquality.style.display = "none";
  windowLose.style.display = "none";
  windowWin.style.display = "none";
}