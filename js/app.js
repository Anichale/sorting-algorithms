var cr = {

  button : function (action, name) {
    var button = document.createElement('button');
    button.innerHTML = name;
    button.style.margin = '10px';
    button.setAttribute('onclick', action);
    document.getElementById('visualizer').appendChild(button);
  },

  reset : function () {
    shuffledArray = DataArray.getRandomArray();
    draw.grid(shuffledArray);
  }

};
var shuffledArray = DataArray.getRandomArray();
cr.button('Sort.bubble(shuffledArray)', 'Bubble Sort');
cr.button('Sort.insertion(shuffledArray)', 'Insertion Sort');
cr.button('Sort.Selection(shuffledArray)', 'Selection Sort');
cr.button('Sort.merge(shuffledArray)', 'Merge Sort');
cr.button('Sort.quick(shuffledArray)', 'Quick Sort');
cr.button('cr.reset()', 'Reset');
draw.grid(shuffledArray);