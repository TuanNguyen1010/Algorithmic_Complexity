function reverse(array){
  var arr = []
  for(i = 0; i < array.length; i++) {
    arr.push(array[(array.length - 1) - i])
  }
  return arr
}

module.exports = reverse