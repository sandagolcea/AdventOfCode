// http://adventofcode.com/2017/day/8
// Paste the code below in the console of http://adventofcode.com/2017/day/8/input to get the result
var list = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
var register = {};

var getAllRegisters = function(lines) {
  lines.forEach(line => {
    if (!register[line.split(' ')[0]]) {
      register[line.split(' ')[0]] = 0;
    };
    if (!register[line.split(' ')[4]]) {
      register[line.split(' ')[4]] = 0;
    };
  });
  return register;
}

var registerList = getAllRegisters(list);

registerList;

var perform = function(registerList, register, op, value) {
  op === "dec"
    ? registerList[register] = registerList[register] - value
    : registerList[register] = registerList[register] + value
}

var performOperations = function(linesList, registerList) {
  linesList.forEach(list => {
    var a = list.split(' ')[4];
    var b = parseInt(list.split(' ')[6]);

    var register = list.split(' ')[0];
    var operation = list.split(' ')[1];

    var cond = list.split(' ')[5];
    var value = parseInt(list.split(' ')[2]);

    switch (cond) {
      case "&lt;": {
          if (registerList[a] < b) perform(registerList, register, operation, value);
        };
        break;
      case "&lt;=": {
          if (registerList[a] <= b) perform(registerList, register, operation, value);
        };
        break;
      case "==": {
          if (registerList[a] == b) perform(registerList, register, operation, value);
        };
        break;

      case "!=": {
          if (registerList[a] != b) perform(registerList, register, operation, value);
        };
        break;

      case "&gt;=": {
          if (registerList[a] >= b) perform(registerList, register, operation, value);
        };
        break;

      case "&gt;": {
          if (registerList[a] > b) perform(registerList, register, operation, value);
        };
        break;
    }
  })
}


performOperations(list, registerList);

Math.max(...Object.values(registerList));
