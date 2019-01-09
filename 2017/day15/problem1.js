
const afactor = 16807
const bfactor = 48271
const astart = 679
const bstart = 771

var divider = 2147483647
var repetitions = 40000000


var calculatePairs = function() {
  var pairCount = 0;
  var mask = 65535;

  var newNumberA = (astart * afactor) % divider;
  var newNumberB = (bstart * bfactor) % divider;

  for (var i = 0; i < repetitions; i++) {
    binaryNumberA = newNumberA & mask;
    binaryNumberB = newNumberB & mask;
    if (binaryNumberA === binaryNumberB) {
      pairCount++;
    }
    newNumberA = (newNumberA * afactor) % divider;
    newNumberB = (newNumberB * bfactor) % divider;
  }

  return pairCount;
}

calculatePairs();
