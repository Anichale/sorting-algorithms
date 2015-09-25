function selectionSort (array) {

  //create variable to store current mininmum in loop
  var min;

  //create variable used for swapping
  var prev;

  //loop through array to find minimum
  for (var i = 0; i < array.length; i++) {

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
  }

  //return our stored array
  return array;
}