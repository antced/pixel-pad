"use strict"


// VARIABLES
let clickStatus = false;
let colorChoice = "black";
const colors = ['black', 'red', 'yellow', 'blue', 'white']


// CREATE ELEMENTS
let container = document.createElement('div');
container.className = "container";
document.body.append(container);

let divContainer = document.createElement('div');
divContainer.className = "divContainer";
container.append(divContainer);

function makeDivs() {
  for (let i = 0; i < 1024; i++) {
    let div = document.createElement('div');
    div.className = "divs"
    divContainer.append(div);
  }
}
makeDivs();


// BUTTONS
let buttonContainer = document.createElement('div');
buttonContainer.className = "buttonContainer";
document.body.append(buttonContainer);

function makeButtons() {
  for (let j = 0; j < colors.length; j++) {
    let button = document.createElement('button');
    button.className = 'colorButton';
    button.style.background = colors[j];
    buttonContainer.append(button);
    button.addEventListener('click', function() {
      colorChoice = colors[j];
    });
  }
}
makeButtons();

let reset = document.createElement('button');
reset.className = "resetButton";
reset.textContent = "Clear"
buttonContainer.append(reset);

reset.addEventListener('click', function() {
  let div = document.querySelectorAll('.divs');
  for (let i = 0; i < draw.length; i++) {
    div[i].style.backgroundColor = "";
}
});


// DRAWING
const draw = document.querySelectorAll('.divs');
for (let i = 0; i < draw.length; i++) {
  draw[i].addEventListener('mousedown', function() {
    draw[i].style.backgroundColor = colorChoice;
    clickStatus = true;
  });
  draw[i].addEventListener('mouseup', function() {
    clickStatus = false;
  });
  draw[i].addEventListener('click', function() {
    draw[i].style.backgroundColor = colorChoice;
  });
  draw[i].addEventListener('mouseover', function() {
    if (clickStatus === true) {
      draw[i].style.backgroundColor = colorChoice;
    }
  });
}
