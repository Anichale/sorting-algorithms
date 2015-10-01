//namespace
var Sort = window.Sort || {};

//module for getting a randomized data array
Sort.DataArray = (function() {

  //length of the array
  var inputNumber = 50;

  //first generate a sorted array for inputNumber length
  function makeSorted (input) {
    var array = [];
    for (var i = 0; i < inputNumber; i++) {
      array.push(i + 1);
    }
    return array;
  }

  //set method for later user interaction
  function setLength (input) {
    inputNumber = input;
  }

  //take our newly generated sorted array
  //and randomly scramble it
  function getRandomArray () {
    var newArray = makeSorted(inputNumber);
    var currentIndex = newArray.length;
    var temporaryValue;
    var randomIndex;

    //while there remain elements to shuffle
    while (currentIndex > 0) {

      //pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      //and swap it with the current element
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
    return newArray;
  }

  //get original sorted array for testing and
  //reference
  function getSortedArray () {
    return makeSorted(inputNumber);
  }

  //reveal
  return {
    setLength : setLength,
    getRandomArray : getRandomArray,
    getSortedArray : getSortedArray
  };

})();

//Module for DOM Manipulation and animation
Sort.Draw = (function() {

  //get our container in static HTML page
  var container = document.querySelector('#visualizer');

  //method generates a dom element with an
  //array parameter
  function createGrid (array) {

    //if it exists already, clear it
    if (document.querySelector('#grid')) {
      container.removeChild(document.querySelector('#grid'));
    }

    //create a new DOM element to append the pieces to
    var grid = document.createElement('div');
    grid.id = 'grid';
    container.appendChild(grid);

    //loop through and for the arrays length
    //generate a new cell for the arrays data
    var piece;
    for (var i = 0; i < array.length; i++) {
      piece = createCell(array[i], i);

      //attach it to the container
      grid.appendChild(piece);
    }

  }

  //method takes user input to determine draw speed
  function speed () {
    var displaySpeed = document.getElementById('speed');
    return displaySpeed.value;
  }

  //method called in createGrid that takes in
  //data from the array and makes a visual
  //representation from it according to height
  //and color
  function createCell (data, index) {

    var cell = document.createElement('div');
    cell.style.width = data + '2px';
    cell.style.height = '8px';
    cell.style.fontSize = '8px';
    cell.style.color = 'white';
    cell.style.padding = '5px';
    cell.id = 'div' + index;
    cell.innerHTML = data;

    //hex value parsing
    data = data.toString(16);
    if (data.length < 2) {
      data = '0' + data;
    }
    cell.style.backgroundColor = '#' + '00' + data + data;
    return cell;
  }

  //reveal
  return {
    grid : createGrid,
    speed : speed
  };
})();