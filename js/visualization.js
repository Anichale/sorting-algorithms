var DataArray = (function() {
  var inputNumber = 100;

  var sortedArray = makeSorted(inputNumber);

  function makeSorted (input) {
    var array = [];
    for (var i = 0; i < inputNumber; i++) {
      array.push(i + 1);
    }
    return array;
  }

  var shuffledArray = (function(array) {

    var newArray = array;
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
  })(sortedArray);

  function setLength (input) {
    inputNumber = input;
  }

  function getRandomArray () {
    return shuffledArray;
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

var Create = (function() {

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

  function createCell (data, index) {

    var cell = document.createElement('div');
    cell.style.width = (data * 5) + 'px';
    cell.style.height = '5px';
    cell.id = 'div' + index;
    data = data.toString(16);
    if (data.length < 2) {
      data = '0' + data;
    }
    cell.style.backgroundColor = '#' + '00' + data + data;
    return cell;
  }

  return {
    grid : createGrid
  };
})();