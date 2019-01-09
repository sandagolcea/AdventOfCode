
const afactor = 16807
const bfactor = 48271

const astart = 679
const bstart = 771

const divider = 2147483647
const repetitions = 40000000

var getBinary = function(number) {
  var binary = "";
  while (number > 0 && binary.length < 16) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  return binary
}

var createBitMap = function() {
  var bitMap = {};

  for (var i = 0; i < Math.pow(2, 16); i++) {
    bitMap[getBinary(i)] = 0;
  }

  return bitMap;
}

var mapNumbers = function(start, factor, bitmap) {
  var newNumber = getBinary((start * factor) % divider);

  for (var i = 0; i < repetitions; i++) {
    if (bitmap[newNumber] >= 0) bitmap[newNumber]++;
    newNumber = getBinary((newNumber * factor) % divider);
  }

  return bitmap;
}

var calculatePairs = function() {
  var count = 0;

  var bitsB = mapNumbers(bstart, bfactor, createBitMap());

  var bitsA = mapNumbers(astart, afactor, createBitMap());

  return bitsA;
}

calculatePairs();
