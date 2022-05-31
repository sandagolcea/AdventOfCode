// https://adventofcode.com/2021/day/1/input

// get input from web page because I do all the things in console, can't be asked.

let input = document.getElementsByTagName('pre')[0].textContent.split('\n');
input.splice(-1); // remove last elem, since it's an empty space.

const countIncreasing = (input) => {
  let i = 0;
  let counter = 0;

  while(i < input.length) {
    if(input[i] < input[i+1]) {
      counter++;
    }
    i++;
  }

  return counter;
}

console.log(countIncreasing(input));

// Notes: I am off by on from the official solution, not sure why..

