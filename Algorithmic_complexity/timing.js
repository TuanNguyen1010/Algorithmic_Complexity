const {performance} = require('perf_hooks')
 

function createRandomArray(arraySize) {
  array = []
  var i;
  for (i = 0; i< arraySize; i++) {
  array.push(Math.round(Math.random() * 100))
  }
  return array
}

function shuffling(sampleArray) {
  return sampleArray.shuffle()

}

function reverse(sampleArray) {
  return sampleArray.reverse()
}

function sort(sampleArray){
  return (sampleArray).sort()
}

function timingCode(functionTested) {
  var i;
  for (i = 5000; i < 100000; i+= 5000) {
    testingArray = createRandomArray(i)
    var t0 = performance.now();
    functionTested(testingArray)
    var t1 = performance.now();

    console.log(i + " took : " + (t1 - t0) + " millisecond")}
}

// timingCode(sort)
// console.log(createRandomArray(10000));

console.log(reverse([2,5,1,6,3,9,2,6,9]))