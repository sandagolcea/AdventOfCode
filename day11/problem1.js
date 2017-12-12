var list = document.getElementsByTagName('pre')[0].innerHTML.split(',');
list.splice(-1,1);

var count = function(list) {
  var x = 0, y = 0, z = 0;

  list.forEach(item => {
    switch (item) {
      case "n": { x++; y-- }; break;
      case "ne": { x++; z-- }; break;
      case "se": { y++; z-- }; break;
      case "s": { x--; y++ }; break;
      case "sw": { x--; z++ }; break;
      case "nw": { y--; z++ }; break;
    }
  });
  return [x, y, z];
}

var pathLength = function(list) {
  var [x, y, z] = count(list);
  console.log("response:");
  console.log((Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2);
}

pathLength(list);
