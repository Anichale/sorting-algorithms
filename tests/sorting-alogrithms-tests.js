var expect = chai.expect;

describe('bubble sort', function() {
  it('should sort an array', function() {
    expect(Sort.bubble([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.bubble([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('merge sort', function() {
  it('should sort an array', function() {
    expect(Sort.merge([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.merge([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('insertion sort', function() {
  it('should sort an array', function() {
    expect(Sort.insertion([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.insertion([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('selection sort', function() {
  it('should sort an array', function() {
    expect(Sort.Selection([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.Selection([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});

describe('quick sort', function() {
  it('should sort an array', function() {
    expect(Sort.quick([4,7,1,4,3,1,8])).to.eql([1,1,3,4,4,7,8]);
    expect(Sort.quick([23,3,1,55,67,2342,1])).to.eql([1,1,3,23,55,67,2342]);
  });
});