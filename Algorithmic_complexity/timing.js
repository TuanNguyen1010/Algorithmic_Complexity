const {performance} = require('perf_hooks');

function createRandomArray(arraySize) {
  array = []
  // var i; 
  for (i = 0; i< arraySize; i++) {
  array.push(Math.round(Math.random() * 100))
  }
  return array
}

function shuffling(sampleArray) {
  return sampleArray.shuffle()

}

function reverse(array){
  var arr = []
  for(i = 0; i < array.length; i++) {
    arr.push(array[(array.length - 1) - i])
  }
  return arr
}

function sort(array){
  for(index = 0; index < array.length; index++) {
    var item = array[index]
    for(place = index + 1; place < array.length; place++){
      if(item > array[place]) {
        [input[index], array[place]]
        item = array[index]
      }
    }
  }
}

// function selectionSort(input) {
//   for(let index = 0; index < input.length; index++) {
//     let item = input[index]
//     for(let place = index +1: place < input.length; place++) {
//       if(item > input[place]) {
//         [input[index], input[place]]
//         item = input[index]
//       }
//     }
//   }
//   return input
// }

function runCodeTimer(functionTested) {
  var i;
  for (i = 0; i < 100001; i+= 5000) {
    testingArray = createRandomArray(i)
    var t0 = performance.now()
    functionTested(testingArray)
    lastItem()
    var t1 = performance.now()
    console.log(i + " took : " + (t1 - t0) + " milliseond")}
}

runCodeTimer(reverse)
// console.log(re([1,5,7,2,4,6]))
// console.log(createRandomArray(10000));