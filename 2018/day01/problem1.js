// http://adventofcode.com/2018/day/1 - part 1
// In the console:

// Read elems from each line
let input = document.getElementsByTagName('pre')[0].innerText.split('\n');

// Remove last line (is an empty line)
input.pop();

// Add all values (are strings containing numbers)
reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue);

// Result:
input.reduce(reducer, 0);

