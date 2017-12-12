var list = document.getElementsByTagName('pre')[0].innerHTML.split(',');
list.splice(-1,1);

var getMaxPath = function(list) {
  var x = 0, y = 0, z = 0;
  var maxPath = 0, currentPathLength;
  list.forEach(item => {
    switch (item) {
      case "n": { x++; y-- }; break;
      case "ne": { x++; z-- }; break;
      case "se": { y++; z-- }; break;
      case "s": { x--; y++ }; break;
      case "sw": { x--; z++ }; break;
      case "nw": { y--; z++ }; break;
    }
    var currentPathLength = ((Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2);
    if (currentPathLength > maxPath) maxPath = currentPathLength;
  });
  return maxPath;
}

console.log(getMaxPath(list));
