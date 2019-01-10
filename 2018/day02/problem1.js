// http://adventofcode.com/2018/day/2 - part 1
// For each string, save if it has a letter occuring twice, and thrice
// Calculate the checksum for all strings like:
// sum of strings with a AA letter * sum of strings with a AAA letter 

const getLetterHash = (str) => {
    let hashy = {};
    for (const ch of str) {
        hashy[ch]
            ? hashy[ch] = hashy[ch] + 1        
            : hashy[ch] = 1;
    }
    return hashy;
}

const getFlags = (hashy) => {
    let twoFlag = 0;
    let threeFlag = 0;

    for (const char in hashy) {
        if (hashy[char] === 2) { twoFlag = 1 };
        if (hashy[char] === 3) { threeFlag = 1 };
    }

    return { twoFlag, threeFlag }
};

const calculateChecksum = (input) => {
    let twoCount = 0;
    let threeCount = 0;

    input.forEach(str => {
        let hashy = getLetterHash(str);
        let { twoFlag, threeFlag } = getFlags(hashy);
        twoCount += twoFlag;
        threeCount += threeFlag;
    });
    return twoCount * threeCount;
}

let input = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
input.pop();

calculateChecksum(input);
