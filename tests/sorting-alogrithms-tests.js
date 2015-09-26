var expect = chai.expect;

var sortedArray = (function() {
  var array = [];
  for (var i = 0; i < 50000; i++) {
    array.push(i + 1);
  }
  return array;
})();

var shuffledArray = (function(array) {

  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  //while there remain elements to shuffle
  while (currentIndex > 0) {

    //pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //and swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
})(sortedArray);

describe('bubble sort', function() {
  it('should sort an array', function() {
    expect(Sort.bubble([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.bubble([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
    expect(Sort.bubble(shuffledArray)).to.eql(sortedArray);
  });
});

describe('merge sort', function() {
  it('should sort an array', function() {
    expect(Sort.merge([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.merge([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
    expect(Sort.merge(shuffledArray)).to.eql(sortedArray);
  });
});

describe('insertion sort', function() {
  it('should sort an array', function() {
    expect(Sort.insertion([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.insertion([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
    expect(Sort.insertion(shuffledArray)).to.eql(sortedArray);
  });
});

describe('selection sort', function() {
  it('should sort an array', function() {
    expect(Sort.Selection([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.Selection([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
    expect(Sort.Selection(shuffledArray)).to.eql(sortedArray);
  });
});

describe('quick sort', function() {
  it('should sort an array', function() {
    expect(Sort.quick([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.quick([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
    expect(Sort.quick(shuffledArray)).to.eql(sortedArray);
  });
});

describe('V8 engine .sort method', function() {
  it('should sort an array', function() {
    expect(([4,7,1,4,3,1,8]).sort()).to.eql([1,1,3,4,4,7,8]);
    expect(([23,3,1,55,67,2342,1]).sort(function(a, b) { return a - b; })).to.eql([1,1,3,23,55,67,2342]);
    expect(shuffledArray.sort(function(a, b) { return a - b; })).to.eql(sortedArray);
  });
});