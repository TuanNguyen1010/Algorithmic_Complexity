const runCodeTimer = require('../timing')

function sort(array){
  for(index = 0; index < array.length; index++) {
    for(place = index + 1; place < array.length; place++){
      if(array[place] < array[index]) {
        var temp = array[index]
        array[index] = array[place]
        array[place] = temp
      }
    }
  }
  return array
}

module.exports = sort

runCodeTimer(sort)