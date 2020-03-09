const {performance} = require('perf_hooks')
 

function createRandomArray(arraySize) {
  array = []
  var i;
  for (i = 0; i< arraySize; i++) {
  array.push(Math.round(Math.random() * 100))
  }
  return array
}

function shuffle(sampleArray) {
  [sampleArray].shuffle

}

function sort(sampleArray){
  (sampleArray).sort
}

function timingCode() {
  var i;
  for (i = 5000; i < 100000; i+= 5000) {
    testingArray = createRandomArray(i)
    var t0 = performance.now();
    sort(testingArray)
    var t1 = performance.now();

    console.log("sort for " + i + " took ; " + (t1 - t0) + " millisecond")}
}

timingCode()
// console.log(createRandomArray(10000));