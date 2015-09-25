function mergeSort (array) {

  //if the array is length 0 or 1, then we can assume it is already
  //sorted and return it (works as base case for later recursion)
  if (array.length < 2) {
    return array;
  }

  //pick a pivot at our the middle of our array
  var pivot = (Math.floor(array.length / 2));

  //separate the array into two places, everything before it
  var pLeft = array.slice(0, pivot);

  //and everything after
  var pRight = array.slice(pivot, array.length);

  //used to merge all of our pieces back together after recursively separating the array
  function merge (left, right) {

    //initialize array to return
    var result = [];

    //if both of our split arrays have items inside go through this while loop
    while (left.length > 0 && right.length > 0) {

      //compare the first element of each array
      if (left[0] <= right[0]) {

        //if the left array has a smaller element, push it to result
        //and use the shift method to remove it from our left array
        result.push(left.shift());
      } else {

        //do the same if the right element is smaller
        result.push(right.shift());
      }
    }

    //if only our left array has an element left, push that
    while (left.length > 0) {
      result.push(left.shift());
    }

    //if only our right array has an element left, push that
    while (right.length > 0) {
      result.push(right.shift());
    }

    //return the sorted array
    return result;
  }

  //call our mergeSort recursively on this array, splitting it further and further until
  //it hits our base case and the array is split into lengths less than 2
  return merge(mergeSort(pLeft), mergeSort(pRight));
}