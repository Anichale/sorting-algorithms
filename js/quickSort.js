//namespace
var Sort = window.Sort || {};

Sort.quick = (function() {

  /*  Known as partition-exchange sort, quicksort picks a pivot from a partition
  *   (assuming the first partition is our array). Reorders our array into lower
  *   higher value partitions, then recursively creates partitions until it cannot.
  *  takes in the array and optionally low and high parameters for recursion
  */
  function quickSort (array, low, high) {

    //swap method because its used multiple times
    function swap (array, index1, index2) {

      //store a tmp variable at pos index2
      var tmp = array[index2];

      //set value  of index2 to our value at index
      array[index2] = array[index1];

      //set our value of index1 to our stored variable
      array[index1] = tmp;
    }

    //reset our pivot for recursive use
    var pivot = null;

    //used for initialization, begin on the end
    if (typeof low !== 'number') {
      low = 0;
    }

    //used for initialization, begin on the end
    if (typeof high !== 'number') {
      high = array.length - 1;
    }

    //base case for recursion, if low is >= high, then its already sorted
    if (low < high) {

      //create a point between our low and high values
      pivot = low + (Math.ceil((high - low) * 0.5));

      //create the positions and partitions to be recursively sorted
      nextPivot = partition(array, pivot, low, high);

      //sort from low, to the pivot - 1, because nextPivot belongs where it is
      //set a timeout for real-time visualization
      setTimeout(quickSort, draw.speed(), array, low, nextPivot - 1);

      //sort from pivot + 1 to high
      //set a timeout for real-time visualization
      setTimeout(quickSort, draw.speed(), array, nextPivot + 1, high);

    }

    //function for creating our partitions and swapping
    function partition (arr, pivot, lo, hi) {

      // the value of our pivot, where pivot is the index
      var pivotValue = arr[pivot];

      // our new pivot to be, and our comparison
      var index = lo;

      //swap our pivot to the end, because we want it in the hi partition
      swap(arr, hi, pivot);

      // loop through our array, from our lo value, to our hi value
      for (var i = lo; i < hi; i++) {

        //if the value at this position is less than our pivot value, then it needs to be sorted
        //to the left
        if (arr[i] < pivotValue) {

          //swap it and the index, and now that we know it should be sorted
          //increment the index because its been sorted
          swap(arr, i, index);
          index++;
        }
      }

      //swap our hi value back with the index value, this is putting our pivot value
      //back where it rightfully belongs
      swap(arr, index, hi);

      //return the index for a new pivot in recursively calling quickSort
      return index;
    }

    //draws our current array (through iterations of the sorting)
    //visually using DOM manipulation
    Sort.Draw.grid(array);

    //return the sorted array
    return array;
  }

  return quickSort;

})();
