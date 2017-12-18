// http://adventofcode.com/2017/day/6 - part 2
// i.e. input: var list = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4];

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
    for (var i = 0; i < list1.length; i++){
        if (list1[i] !== list2[i]){
            return false;
        }
    }
    return true; 
}

function isPreviousList(list, seenLists) {
  return seenLists.some(seenList => listsEqual(list, seenList));
}

function getDistributedList(list) {
  max = Math.max(...list);

    index = 0;
    while (max !== list[index]) {
      index++;
    }
    var startIndex = index + 1;

    list[index] = 0;

    return list = distribute(max, list, startIndex);
}

var sort = function(list) {
  var seenLists = [];
  var steps = 0;
  var max;
  var index;

  while (!isPreviousList(list, seenLists)) {
    seenLists.push([...list]);
    list = getDistributedList(list);
  }

  var targetList = [].concat(list);
  do {
    list = getDistributedList(list);
    ++steps;
  } while (!listsEqual(targetList, list))

  return steps;
}

sort(list);
