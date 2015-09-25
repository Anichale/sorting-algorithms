function selectionSort (array) {
  var min;
  var prev;
  for (var i = 0; i < array.length; i++) {
    min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      prev = array[i];
      array[i] = array[min];
      array[min] = prev;
    }
  }
  return array;
}