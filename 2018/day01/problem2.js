// http://adventofcode.com/2018/day/1 - part 2
// input: https://adventofcode.com/2018/day/1/input
// In the console:

const getInputArray = () => {
    const input = document.getElementsByTagName('pre')[0].innerText.split('\n');
    input.pop();
    return input;
}

const input = getInputArray();

getDuplicatedFrequency = (input) => {
  let freqHash = {};
  let duplicateFrequency;
  let index = 0;
  let freq = 0;
  let number;

while (!duplicateFrequency) {
    let number = parseInt(input[index])
    if (freqHash[freq]) {
        duplicateFrequency = freq;
     } else {
        freqHash[freq] = 1;
        freq += number;
    }
    if (index < input.length - 1) { index++; } else { index = 0; }
  }
  return duplicateFrequency;
}

getDuplicatedFrequency(input);
