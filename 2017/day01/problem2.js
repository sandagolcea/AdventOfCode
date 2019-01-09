// http://adventofcode.com/2017/day/1 - part 2
var sumOfConsecutives = function(numberArray) {
  var sum = 0;
  var max = numberArray.length;

  for (var i = 0, j = max / 2; i < max / 2, j < max ; i++, j++) {
    if (numberArray[i] === numberArray[j]) {
      sum += 2 * parseInt(numberArray[i]);
    }
  }

  return sum;
}

var number = document.getElementsByTagName('pre')[0].innerHTML.split('');
number.splice(-1,1);

sumOfConsecutives(number);
