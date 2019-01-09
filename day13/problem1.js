
var list = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
list.splice(-1,1);

var wall = [];

// gets the problem input and constructs a structure to map the firewall
// wall format: [{len: 3, step: 0, direction: 'down'}, {}, , ..., {}, , {}]
var constructWall = function() {
  for (var i=0; i < list.length; i++) {
    var line = list[i].replace(':','').split(' ');
    wall[parseInt(line[0])] = {len: parseInt(line[1]), step: 0, direction: 'down'};
  }

  return wall;
}

// responsible for scanner functioning properly
var moveScanner = function() {
  for (var i=0; i < wall.length; i++) {
    if (wall[i]) {

      if (wall[i]['step'] >= wall[i]['len'] - 1) {
        wall[i]['direction'] = 'up';
      }
      if (wall[i]['step'] <= 0) {
        wall[i]['direction'] = 'down';
      }

      wall[i]['direction'] === 'down'
        ? wall[i]['step']++
        : wall[i]['step']--;
    }
  }
}

var traverseWall = function() {
  var position = 0;
  var damage = 0;

  while (position < wall.length) {
    moveScanner();
    position++;

    if (wall[position] && wall[position]['step'] === 0) {
      damage += wall[position]['len'] * position;
    }
  }

  return damage;
}

constructWall();
traverseWall();
