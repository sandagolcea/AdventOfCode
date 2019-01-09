// http://adventofcode.com/2017/day/1 - part 1
var sumOfConsecutives = function(numberArray) {
  var sum = 0;
  var elem = numberArray[0];

  if (elem === numberArray[numberArray.length - 1]) {
    sum += parseInt(elem);
  }

  for (var i = 1; i < numberArray.length; i++) {
    elem === numberArray[i]
      ? sum += parseInt(elem)
      : elem = numberArray[i]
  }

  return sum;
}

var number = document.getElementsByTagName('pre')[0].innerHTML.split('');
number.splice(-1,1);

sumOfConsecutives(number);
