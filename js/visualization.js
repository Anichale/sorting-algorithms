var DataArray = (function() {
  var inputNumber = 100;

  function makeSorted (input) {
    var array = [];
    for (var i = 0; i < inputNumber; i++) {
      array.push(i + 1);
    }
    return array;
  }

  function setLength (input) {
    inputNumber = input;
  }

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

  function getSortedArray () {
    return makeSorted(inputNumber);
  }

  return {
    setLength : setLength,
    getRandomArray : getRandomArray,
    getSortedArray : getSortedArray
  };

})();

var draw = (function() {

  var container = document.querySelector('#visualizer');

  function createGrid (array) {
    if (document.querySelector('#grid')) {
      container.removeChild(document.querySelector('#grid'));
    }
    var grid = document.createElement('div');
    grid.id = 'grid';
    container.appendChild(grid);
    var piece;
    for (var i = 0; i < array.length; i++) {
      piece = createCell(array[i], i);
      grid.appendChild(piece);
    }

  }

  function speed () {
    var displaySpeed = document.getElementById('speed');
    return displaySpeed.value;
  }

  function createCell (data, index) {

    var cell = document.createElement('div');
    cell.style.width = (data * 5) + 'px';
    cell.style.height = '8px';
    cell.id = 'div' + index;
    data = data.toString(16);
    if (data.length < 2) {
      data = '0' + data;
    }
    cell.style.backgroundColor = '#' + '00' + data + data;
    return cell;
  }

  return {
    grid : createGrid,
    speed : speed
  };
})();