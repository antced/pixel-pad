"use strict"


// VARIABLES
let clickStatus = false;
let colorChoice = "lime";
const colors = ['#90d83f', '#009FDC', '#B280D2', '#d64646', '#FFD700', '#10121a', 'slategray', 'white']


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

let toolsContainer = document.createElement('div');
toolsContainer.className = "toolsContainer";
document.body.append(toolsContainer);

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

let changeWidth = document.createElement('button');
changeWidth.className = "widthButton";
changeWidth.textContent = "WIDTH"
toolsContainer.append(changeWidth);

changeWidth.addEventListener('click', function() {
  let width = prompt("Enter pixel width: (max is 25)");
  let div = document.querySelectorAll('.divs');
  for (let i = 0; i < div.length; i++) {
    if (width <= 25) {
      div[i].style.width = width + "px";
    } else {
      alert("Width must be 25 or less");
      break
    }
  }
});

let changeHeight = document.createElement('button');
changeHeight.className = "heightButton";
changeHeight.textContent = "HEIGHT"
toolsContainer.append(changeHeight);

changeHeight.addEventListener('click', function() {
  let height = prompt("Enter pixel height: (max is 25)");
  let div = document.querySelectorAll('.divs');
  for (let i = 0; i < div.length; i++) {
    if (height <= 25) {
      div[i].style.height = height + "px";
    } else {
      alert("Height must be 25 or less");
      break
    }
  }
});

let random = document.createElement('button');
random.className = "randomButton";
random.textContent = "RANDOM"
toolsContainer.append(random);

random.addEventListener('click', function() {
  let div = document.querySelectorAll('.divs');
  for (let i = 0; i < div.length; i++) {
    let randomColor = colors[Math.floor((Math.random() * colors.length))];
    div[i].style.backgroundColor = randomColor;
  }
});

let reset = document.createElement('button');
reset.className = "resetButton";
reset.textContent = "RESET"
toolsContainer.append(reset);

reset.addEventListener('click', function() {
  let div = document.querySelectorAll('.divs');
  let answer = confirm("Are you sure?");
  if (answer === true) {
    for (let i = 0; i < draw.length; i++) {
      div[i].style.backgroundColor = "";
      div[i].style.height = "25px";
      div[i].style.width = "25px";
    }
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
