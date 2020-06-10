function reverse(array){
  var arr = []
  
  for(i = 0; i < array.length; i++) {
    arr.push(array[(array.length - 1) - i])
  }
  return arr
}

console.log(reverse([6,2,4,5]))