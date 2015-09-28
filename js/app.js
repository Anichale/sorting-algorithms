

function createButton (action, name) {
  var button = document.createElement('button');
  button.innerHTML = name;
  button.style.margin = '10px';
  button.setAttribute('onclick', action);
  document.getElementById('visualizer').appendChild(button);
}

function reset () {
  shuffledArray = DataArray.getRandomArray();
  draw.grid(shuffledArray);
}

createButton('Sort.bubble(shuffledArray)', 'Bubble Sort');
createButton('Sort.insertion(shuffledArray)', 'Insertion Sort');
createButton('Sort.Selection(shuffledArray)', 'Selection Sort');
createButton('Sort.quick(shuffledArray)', 'Quick Sort');
createButton('reset()', 'Reset');
var shuffledArray = DataArray.getRandomArray();
draw.grid(shuffledArray);

//Sort.bubble(shuffledArray);
//Sort.insertion(shuffledArray);
//Sort.merge(shuffledArray);
//Sort.Selection(shuffledArray);
//Sort.quick(shuffledArray);