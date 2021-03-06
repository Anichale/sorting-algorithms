//namespace
var Sort = window.Sort || {};

Sort.bubble = (function() {


  /* Bubble sort works in a nature similar to its name, the lesser - or lighter - values
  *  will 'bubble' to the beginning of the array, and the heavier values will 'sink'
  *  to the bottom.
  */
  function bubbleSort (array) {

    //create variables for swapping and our while loop condition
    var swapped;
    var prev;

    //previously used a do while loop to sort, setInterval
    //is used so the sorting can be seen in real time

    //first set the interval to a variable interval
    //to be cleared later
    var interval = setInterval(function() {
      //initilize our loop variable to false, so we can exit our loop
      //if our array is sorted
      swapped = false;

      //loop through our array
      for (var i = 0; i < array.length; i++) {

        //at each position, compare this element with the previous
        //if this one is greater than our previous one swap it and
        //flag our conditional to loop through our array again
        if (array[i - 1] > array[i]) {

          //store the prev variable to our previous element
          prev = array[i - 1];

          //set our previous element to this element
          array[i - 1] = array[i];

          //set this element to our prev variable
          array[i] = prev;

          //flag our conditional to continue looping
          swapped = true;

          //draw our array of data visually by DOM manipulation
          //in every loop of the interval
          Sort.Draw.grid(array);
        }

        //if we go through the entire loop and our swapped conditional is never
        //flagged then swapped is still false
      }

      //and we can exit our interval loop
      //by clearing the stored interval
      if (swapped === false) {
        clearInterval(interval);
      }

      //draw speed determined by user
    }, Sort.Draw.speed());

    //return our sorted array
    return array;
  }

  return bubbleSort;

}());