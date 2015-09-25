var expect = chai.expect;

describe('bubble sort', function() {
  it('should fail this test', function() {
    expect(bubbleSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
  });
});

describe('merge sort', function() {
  it('should fail this test', function() {
    expect(mergeSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
  });
});

describe('insertion sort', function() {
  it('should fail this test', function() {
    expect(insertionSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
  });
});

describe('selection sort', function() {
  it('should fail this test', function() {
    expect(selectionSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
  });
});

describe('quick sort', function() {
  it('should fail this test', function() {
    expect(quickSort([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
  });
});