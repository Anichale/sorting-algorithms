//namespace
var Sort = window.Sort || {};

//module creates buttons and reset function to
//generate a random array to be sorted.
Sort.cr = {

  //method to create buttons
  button : function (action, name) {
    var button = document.createElement('button');
    button.innerHTML = name;
    button.style.margin = '10px';
    button.setAttribute('onclick', action);
    document.getElementById('visualizer').appendChild(button);
  },

  //method to create a new random dataset and clear the
  //currently sorted one
  reset : function () {
    shuffledArray = Sort.DataArray.getRandomArray();
    Sort.Draw.grid(shuffledArray);
  }

};

//initialized our random array
var shuffledArray = Sort.DataArray.getRandomArray();

//create a button for each algorithm and reset func
Sort.cr.button('Sort.bubble(shuffledArray)', 'Bubble Sort');
Sort.cr.button('Sort.insertion(shuffledArray)', 'Insertion Sort');
Sort.cr.button('Sort.Selection(shuffledArray)', 'Selection Sort');
Sort.cr.button('Sort.bottomMerge(shuffledArray)', 'Merge Sort');
Sort.cr.button('Sort.quick(shuffledArray)', 'Quick Sort');
Sort.cr.button('Sort.cr.reset()', 'Reset');

//draw our first random dataset grid
Sort.Draw.grid(shuffledArray);