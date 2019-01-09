// http://adventofcode.com/2017/day/6 - part 1

var distribute = function(value, list, index) {
  while (value > 0) {
    if (index >= list.length) { index = 0 };
    list[index++]++;
    --value;
  }
  return list;
}

function listsEqual(list1, list2) {
    if (list1.length !== list2.length) return false;
    for (var i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) {
            return false;
        }
    }
    return true; 
}

function isPreviousList(list, seenLists) {
  return seenLists.some(seenList => listsEqual(list, seenList));
}

var sort = function(list) {
  var seenLists = [];
  var steps = 0;
  var max;
  var index;

  while (!isPreviousList(list, seenLists)) {
    ++steps;
    seenLists.push([...list]);
    max = Math.max(...list);

    // get index of max - it will stop when it found it;
    index = 0;
    while (max !== list[index]) {
      index++;
    }
    var startIndex = index + 1;

    list[index] = 0;

    list = distribute(max, list, startIndex);
  }
  return steps;
}

sort(list);
