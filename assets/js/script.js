var username;
var continueInput = document.querySelector('.continueInput');

continueInput.addEventListener('click', function() {
  username = document.querySelector('#usernameInput').value;
  document.querySelector('.hello').textContent = `Bonjour,  ${username} choisis ton mode de jeux.`;
  document.querySelector('.usernameBlock').style.display = 'none';
  document.querySelector('.modeGame').style.display = 'flex';
})





var cardFeuille = document.querySelector('.cardFeuille');
var cardCiseaux = document.querySelector('.cardCiseaux');
var cardPierre = document.querySelector('.cardPierre');

var dropZone = document.querySelector('#dragDrop');

cardFeuille.addEventListener('dragstart', function(ev) {
  console.log('start')
  ev.dataTransfer.setData("text", ev.target.id);
  console.log('startData')
})

cardPierre.addEventListener('dragstart', function(ev) {
  console.log('start')
  ev.dataTransfer.setData("text", ev.target.id);
  console.log('startData')
})

cardCiseaux.addEventListener('dragstart', function(ev) {
  console.log('start')
  ev.dataTransfer.setData("text", ev.target.id);
  console.log('startData')
})

dropZone.addEventListener('dragover', function(ev) {
  ev.preventDefault();
})

dropZone.addEventListener('drop', function(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log(data)
  switch (data) {
    case 'dragFeuille' : 
    cardFeuille.classList.add("cardFeuilleDrop");
    cardFeuille.value = "feuille";
    userChoice = cardFeuille.value;
    comChoice = randomComputer();

    switch (comChoice) {
        case "feuille":
          console.log('ega');
            break;
        case "ciseaux":
            console.log('perdu');
            break;
        case "pierre":
            console.log('victoire');
            break;
    }

    break;

    case 'dragPierre' : 
    cardPierre.classList.add("cardPierreDrop");
    cardPierre.value = "pierre";
    userChoice = cardPierre.value;
    comChoice = randomComputer();

    switch (comChoice) {
        case "pierre":
            console.log('ega');
            break;
        case "feuille":
            console.log('perdu');
            break;
        case "ciseaux":
            console.log('victoire');
            break;
    }

    break;

    case 'dragCiseaux' : 
    cardCiseaux.classList.add("cardCiseauxDrop");
    cardCiseaux.value = "ciseaux";
    userChoice = cardCiseaux.value;
    comChoice = randomComputer();

    switch (comChoice) {
        case "ciseaux":
          console.log('ega');
            break;
        case "pierre":
            console.log('perdu');
            break;
        case "feuille":
            console.log('victoire');
            break;
    }

    break;
  }
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