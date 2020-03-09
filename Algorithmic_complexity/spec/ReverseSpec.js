'use strict'

describe("reverse", function () {

  var reverse

  it("reverse the order of the array", function() {
    expect(reverse([2, 6, 5, 1, 5])).toEqual([5, 1, 5, 6, 2])
  })
});