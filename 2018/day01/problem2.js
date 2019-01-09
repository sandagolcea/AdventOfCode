// http://adventofcode.com/2018/day/1 - part 2
// input: https://adventofcode.com/2018/day/1/input
// In the console:

const getInputArray = () => {
    const input = document.getElementsByTagName('pre')[0].innerText.split('\n');
    input.pop();
    return input;
}

const input = getInputArray();

const foundFreq = (list, newFreq) => list.includes(newFreq);

const getItem = (a) => {
    let sum = parseInt(a[0]) + parseInt(a[1]);
    let freq = [];
    let index = 2;

    while(!foundFreq(freq, sum)) {
      freq.push(sum);
      sum += parseInt(a[index]);
      index < a.length - 1
        ? index++
        : index = 0;
    }
	return sum;
}

getItem(input);
