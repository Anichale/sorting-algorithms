var expect = chai.expect;

describe('bubble sort', function() {
  it('should sort an array', function() {
    expect(bubbleSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(bubbleSort([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('merge sort', function() {
  it('should sort an array', function() {
    expect(mergeSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(mergeSort([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('insertion sort', function() {
  it('should sort an array', function() {
    expect(insertionSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(insertionSort([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('selection sort', function() {
  it('should sort an array', function() {
    expect(selectionSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(selectionSort([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('quick sort', function() {
  it('should sort an array', function() {
    expect(quickSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(quickSort([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});