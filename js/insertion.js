//namespace
var Sort = window.Sort || {};

Sort.insertion = (function() {

  /*  Insertion identifies a number to compare, then shits our array until we find
  *   a space for our value to be inserted to.
  */
  function insertionSort (array) {

    //initialize a variable to identify the number currently being compared
    var value;
    var i = 0;

    //loop through our  array
    var interval = setInterval(function() {

      //indentify our number to be compared
      value = array[i];

      //create a variable to compare the previous number
      var j = i - 1;

      //while our previous number is greater than 0, and the number we're comparing is less
      //than our previous number enter our loop
      while (j > -1 && array[j] > value) {

        //shift the number down the array and give us a space to insert
        //our current value
        array[j + 1] = array[j];

        //decrement j to go through our entire array
        j--;
      }

      //insert our value at the space that has been shifted
      array[j + 1] = value;

      draw.grid(array);

      i++;
      if (i == array.length) {
        clearInterval(interval);
      }

    }, draw.speed());

    //return the sorted array
    return array;
  }

  return insertionSort;

}());