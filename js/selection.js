//namespace
var Sort = window.Sort || {};

Sort.Selection = (function() {

  /*  Searches the array to find the position of our min value, then loops again
  *   to find the next smallest value, and swaps it to our next position in the
  *   beginning.
  */
  function selectionSort (array) {

    //create variable to store current mininmum in loop
    var min;
    var i = 0;

    //create variable used for swapping
    var prev;

    //loop through array to find minimum
    //using an interval loop
    var interval = setInterval(function() {

      //set this position to our next minimums position
      min = i;

      //loop again through the rest of our array
      for (var j = i + 1; j < array.length; j++) {

        //if the next number is less than our current minimum
        if (array[j] < array[min]) {

          //set our min position to this position
          min = j;
        }
      }

      // if we found a new minimum
      if (min != i) {

        //swap the positions
        prev = array[i];
        array[i] = array[min];
        array[min] = prev;
      }

      //draw our grid using a DOM manipulation function
      Sort.Draw.grid(array);

      //increment for each pass through loop
      i++;

      //if i reachs the end of the array, exit the loop
      if (i == array.length) {
        clearInterval(interval);
      }

      //draw speed determined by user
    }, Sort.Draw.speed());

    //return our stored array
    return array;
  }

  return selectionSort;

})();
