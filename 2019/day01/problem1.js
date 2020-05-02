// Problem here: https://adventofcode.com/2019/day/1#part1
// Go here to get the input https://adventofcode.com/2019/day/1/input
// And paste the following into the console to get the result:

const getInput = () => {
  // Read elems from each line
  let input = document.getElementsByTagName('pre')[0].innerText.split('\n');

  // Remove last line (it's an empty line)
  input.pop();

  return input;
}

// Calculate the mass for each elem after the given formula
// elems are strings, hence converting to int
const calcMass = (n) => {
  nr = n - 0;
  return Math.floor(nr/3) - 2
};

// Main solution for getting all masses
const getMasses = () => {
  const input = getInput();

  const reducer = (sum, val) => sum + calcMass(val);

  return input.reduce(reducer, 0);
}

getMasses();
