//namespace
var Sort = window.Sort || {};

Sort.merge = (function() {

  /*  Merge sort utilizes two functions, the first splitting the array into smaller
  *   arrays, and the second merges values by comparing.
  */
  function mergeSort (array) {

    //if the array is length 0 or 1, then we can assume it is already
    //sorted and return it (works as base case for later recursion)
    if (array.length < 2) {
      return array;
    }

    // var prev;

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
          result.push(left.shift());
        } else {
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

      draw.grid(result);

      //return the sorted array
      return result;
    }

    //call our mergeSort recursively on this array, splitting it further and further until
    //it hits our base case and the array is split into lengths less than 2
    return merge(mergeSort(pLeft), mergeSort(pRight));
  }

  return mergeSort;

})();

Sort.bottomMerge = (function() {

  function bottomUpMergeSort (items) {

    //init an array to not mutate the original array
    var array = [];

    //map it to the array
    if (items) {
      array = items.map(function(item) { return item;});
    }

    //call our sort function
    bottomSort(array, array.length);

    //return the sorted array
    return array;
  }


  function bottomSort (items, n) {
    var width = 1;
    var i;

    var interval = setInterval(function() {
      for (i = 0; i < n; i = i + 2 * width) {
        bottomMerge(items, i, Math.min(i + width, n), Math.min(i + 2 * width, n));
      }
      draw.grid(items);
      width = width * 2;
      if (width >= n) {
        clearInterval(interval);
      }
    }, draw.speed());

  }

  //takes in the original array, a left partition, right partition and the end
  function bottomMerge (items, left, right, end) {

    //store variables for later use
    var n = left;
    var m = right;

    //init variable to store a sorted array
    var currentSort = [];
    var j;

    for (j = left; j < end; j++) {
      if (n < right && (m >= end || items[n] < items[m])) {
        currentSort.push(items[n]);
        n++;
      } else {
        currentSort.push(items[m]);
        m++;
      }
    }
    currentSort.map(function(item, i) { items[left + i] = item; });
  }


  return bottomUpMergeSort;
})();