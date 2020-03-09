const {performance} = require('perf_hooks')
 
function shuffle(sampleArray) {
  [sampleArray].shuffle

}

function timingCode() {
    var t0 = performance.now();
    shuffle()
    var t1 = performance.now();

    console.log("doSomething took " + (t1 - t0) + " millisecond")
}

timingCode()