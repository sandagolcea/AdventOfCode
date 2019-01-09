var list = document.getElementsByTagName('pre')[0].innerHTML.split(',');
list.splice(-1,1);
// list = ["se","sw","se","sw","sw"];
// list = ["ne","ne","s","s"] 
// list = ["ne","ne","sw","sw"]
// list = ["ne","ne","ne"]

var x = 0, y = 0;

var count = function(list) {
  list.forEach(item => {
    switch (item) {
      case "n":  { x--; y++ }; break;
      case "s":  { x++; y-- }; break;
      case "nw": { x--; y++ }; break;
      case "se": { x++; y-- }; break;
      case "ne": { y++; z-- }; break;
      case "sw": { y--; z++ }; break;
    }
  });
  return [x, y, z];
}

count(list);

console.log((Math.abs(x) + Math.abs(y)) / 2);
