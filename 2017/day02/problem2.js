// http://adventofcode.com/2017/day/2 - part 2
// to run in console:
// document.getElementsByTagName('pre')[0].innerHTML.split('\n');
// var matrix = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
// getMatrixSum(matrix)

var getDivisor = function(a, b) {
  var result = 0;
  var first = parseInt(a);
  var second = parseInt(b);

  if (first >= second) {
    if (first % second === 0) {
      result = first / second
    }
  } else {
    if (second % first === 0) {
      result = second / first
    }
  }
  return result;
}

var getEvenlyDivisibleResult = function(line) {
  if (line.length === 0) return 0;
  var lineArray = line.split('\t');
  var result = 0;

  for (var i = 0; i < lineArray.length - 1; i++) {
    for (var j = i + 1; j < lineArray.length; j++) {
      result += getDivisor(lineArray[i], lineArray[j]);
    }
  }
  return result;
}

var getMatrixSum = function(matrix) {
  var sum = 0;

  matrix.forEach((line) => {
    sum += getEvenlyDivisibleResult(line);
  });

  return sum;
};
