'use strict'

describe("reverse", function () {

  it('returns an empty array', function() {
    expect(reverse([])).toEqual([])
  })

  it("reverse the order of the array", function() {
    expect(reverse([2, 6, 5, 1, 5])).toEqual([5, 1, 5, 6, 2])
  })

  it("returns a reversed array showing [5,4,3,2,1]", function() {
    expect(reverse([1,2,3,4,5])).toEqual([5,4,3,2,1])

  })
});

// describe("sort", function() {
//   it("sort out the array from lowest to highest", function() {
//   expect(sort([7,1,3,9,3])).toEqual([1,3,3,7,9])
//   })
// })
