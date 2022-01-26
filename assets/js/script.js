var username;
var continueInput = document.querySelector('.continueInput');

continueInput.addEventListener('click', function () {
  username = document.querySelector('#usernameInput').value;
  document.querySelector('.hello').textContent = `Bonjour,  ${username} choisis ton mode de jeux.`;
  document.querySelector('.usernameBlock').style.display = 'none';
  document.querySelector('.modeGame').style.display = 'flex';
})

var vsComputer = document.querySelector('.vsComputer');

vsComputer.addEventListener('click', function() {
  document.querySelector('.title').style.display = 'none';
  document.querySelector('.modeGame').style.display = 'none';
  document.querySelector('.gameBlock').style.display = 'flex';
  document.querySelector('.playMatUsername').textContent = `${username}`
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
  ev.target.innerHTML = document.getElementById(data).outerHTML;
  document.querySelector('.popUp').style.display = "flex";
  switch (data) {
    case 'dragFeuille':
      cardFeuille.value = "feuille";
      userChoice = cardFeuille.value;
      comChoice = randomComputer();

      switch (comChoice) {
        case "feuille":
          windowEquality.style.display = "flex";
          break;
        case "ciseaux":
          windowLose.style.display = "flex";
          document.querySelector('.scoreComputer').textContent = parseInt(document.querySelector('.scoreComputer').textContent) + 1;
          pourcentage()
          break;
        case "pierre":
          windowWin.style.display = "flex";
          document.querySelector('.scorePlayer').textContent = parseInt(document.querySelector('.scorePlayer').textContent) + 1;
          pourcentage()
          break;
      }

      break;

    case 'dragPierre':
      cardPierre.value = "pierre";
      userChoice = cardPierre.value;
      comChoice = randomComputer();

      switch (comChoice) {
        case "pierre":
          windowEquality.style.display = "flex";
          break;
        case "feuille":
          windowLose.style.display = "flex";
          document.querySelector('.scoreComputer').textContent = parseInt(document.querySelector('.scoreComputer').textContent) + 1;
          pourcentage()
          break;
        case "ciseaux":
          windowWin.style.display = "flex";
          document.querySelector('.scorePlayer').textContent = parseInt(document.querySelector('.scorePlayer').textContent) + 1;
          pourcentage()
          break;
      }

      break;

    case 'dragCiseaux':
      cardCiseaux.value = "ciseaux";
      userChoice = cardCiseaux.value;
      comChoice = randomComputer();

      switch (comChoice) {
        case "ciseaux":
          windowEquality.style.display = "flex";
          break;
        case "pierre":
          windowLose.style.display = "flex";
          document.querySelector('.scoreComputer').textContent = parseInt(document.querySelector('.scoreComputer').textContent) + 1;
          pourcentage()
          break;
        case "feuille":
          windowWin.style.display = "flex";
          document.querySelector('.scorePlayer').textContent = parseInt(document.querySelector('.scorePlayer').textContent) + 1;
          pourcentage()
          break;
      }
      break;
    }
    switch(comChoice) {
      case 'pierre':
        if (comChoice == "pierre") {
          document.querySelector('.cardComputerReveal').innerHTML = '<img src="assets/img/La pierre.png" alt="carte pierre" class="computerRevealRock">';
        }
      break;
      
      case 'ciseaux':
          if (comChoice == "ciseaux") {
            document.querySelector('.cardComputerReveal').innerHTML = '<img src="assets/img/Le ciseaux.png" alt="carte ciseaux" class="computerRevealScissors">';
          }
      break;

      case 'feuille':
        if (comChoice == "feuille") {
          document.querySelector('.cardComputerReveal').innerHTML = '<img src="assets/img/La feuille.png" alt="carte papier" class="computerRevealPaper">';
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
  dropZone.innerHTML = '';
  windowEquality.style.display = "none";
  windowLose.style.display = "none";
  windowWin.style.display = "none";
  document.querySelector('.popUp').style.display = "none";
}

function pourcentage() {
  var scorePlayer = parseInt(document.querySelector('.scorePlayer').textContent);
  var scoreComputer = parseInt(document.querySelector('.scoreComputer').textContent);

  var pourcentagePlayer = document.querySelector('.pourcentagePlayer');
  var pourcentageComputer = document.querySelector('.pourcentageComputer');

  pourcentagePlayer.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComputer) * 100) + '%';
  pourcentageComputer.innerHTML = Math.round(scoreComputer / (scorePlayer + scoreComputer) * 100) + '%';
}