'use strict';

function Image(name, path){
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  imageArray.push(this);
}
var imageArray = [];

var bag = new Image('bag', 'assets/bag.jpg');
var banana = new Image('banana', 'assets/banana.jpg');
var bathroom = new Image('bathroom', 'assets/bathroom.jpg');
var boots = new Image('boots', 'assets/boots.jpg');
var breakfast = new Image('breakfast', 'assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'assets/bubblegum.jpg');
var chair = new Image('chair', 'assets/chair.jpg');
var cthulhu = new Image('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new Image('dog-duck', 'assets/dog-duck.jpg');
var dragon = new Image('dragon', 'assets/dragon.jpg');
var pen = new Image('pen', 'assets/pen.jpg');
var petSweep = new Image('pet-sweep', 'assets/pet-sweep.jpg');
var scissors = new Image('scissors', 'assets/scissors.jpg');
var shark = new Image('shark', 'assets/shark.jpg');
var sweep = new Image('sweep', 'assets/sweep.png');
var tauntaun = new Image('tauntaun', 'assets/tauntaun.jpg');
var unicorn = new Image('unicorn', 'assets/unicorn.jpg');
var usb = new Image('usb', 'assets/usb.gif');
var waterCan = new Image('water-can', 'assets/water-can.jpg');
var wineGlass = new Image('wine-glass', 'assets/wine-glass.jpg');

console.log(imageArray);

function getRandomIndex(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var previous3 = [];

function refreshThree(){

  var setOf3 = [];
  while (setOf3.length < 3){
    var randomIndex = getRandomIndex(0, 19);
    if (setOf3.indexOf(randomIndex) === -1 && previous3.indexOf(setOf3)){
      setOf3.push(randomIndex);
    }
    console.log(setOf3);
  }

  var number1 = setOf3[0];
  // console.log(number1);
  var number2 = setOf3[1];
  // console.log(number2);
  var number3 = setOf3[2];
  // console.log(number3);

  var divEl = document.getElementById('products');
  document.body.appendChild(divEl);
  divEl.textContent = '';

  var firstImgEl = document.createElement('Img');
  firstImgEl.setAttribute('src', imageArray[number1].path);
  divEl.appendChild(firstImgEl);
  firstImgEl.addEventListener('click', refreshThree);

  var secondImgEl = document.createElement('Img');
  secondImgEl.setAttribute('src', imageArray[number2].path);
  divEl.appendChild(secondImgEl);
  secondImgEl.addEventListener('click', refreshThree);

  var thirdImgEl = document.createElement('Img');
  thirdImgEl.setAttribute('src', imageArray[number3].path);
  divEl.appendChild(thirdImgEl);
  firstImgEl.addEventListener('click', refreshThree);

  previous3 = setOf3;
}

refreshThree();
