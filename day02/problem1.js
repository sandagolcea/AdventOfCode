// http://adventofcode.com/2017/day/2
// to run in console:
// document.getElementsByTagName('pre')[0].innerHTML.split('\n');
// var matrix = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
// getMatrixSum(matrix)

var getDiffOfMaxMin = function(line) {
  if (line.length === 0) return 0;
  var lineArray = line.split('\t');
  lineArray = lineArray.sort((a,b) => b - a );
  return parseInt(lineArray[0]) - parseInt(lineArray[lineArray.length - 1]);
}

var getMatrixSum = function(matrix) {
  var sum = 0;

  matrix.forEach((line) => {
    sum += getDiffOfMaxMin(line);
  });

  return sum;
};
