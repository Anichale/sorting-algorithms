function mergeSort (array) {

  //if the array is length 0 or 1, then we can assume it is already
  //sorted and return it (works as base case for later recursion)
  if (array.length < 2) {
    return array;
  }

  //pick a pivot at our the middle of our array
  var pivot = (Math.floor(array.length / 2));

  //separate the array into two places, the low end
  var pLeft = array.slice(0, pivot);

  //and our high end
  var pRight = array.slice(pivot, array.length);

  function merge (left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length > 0) {
      result.push(left.shift());
    }

    while (right.length > 0) {
      result.push(right.shift());
    }

    return result;
  }

  return merge(mergeSort(pLeft), mergeSort(pRight));
}

module.exports = mergeSort;