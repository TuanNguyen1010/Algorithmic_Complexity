'use strict'

describe("reverse", function () {

  it("reverse the order of the array", function() {
    expect(reverse([2, 6, 5, 1, 5])).toEqual([5, 1, 5, 6, 2])
  })

  it("returns a reversed array showing [5,4,3,2,1]", function() {
    expect(reverse([1,2,3,4,5])).toEqual([5,4,3,2,1])

  })

});
