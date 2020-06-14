'use strict'

describe('sort', function() {

  it('returns an empty array', function() {
    expect(sort([])).toEqual([])
  })

  it('sort an array of 2 items', function() {
    expect(sort([2,1])).toEqual([1,2])
  })
})