// http://adventofcode.com/2017/day/5 - part 1
// the code below is meant to be run in the console
var list = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
list.splice(-1,1)
for (var i=0; i < list.length; i++) { list[i] = +list[i]; } 

var jump = function(list) {
  var steps = 0;
  var prevIndex = 0;
  var index = 0;

  while (index < list.length) {
    prevIndex = index;
    index += list[index];
    list[prevIndex]++;
    steps++;
  }
  return steps;
}

jump(list)
