// Calculate the Manhattan distance
// http://adventofcode.com/2017/day/3

var constructMatrix = function(level) {
  var value = 1;
  var currentLevel = 0;
  var matrix = {};

  matrix[value] = [currentLevel, currentLevel];
  // Each concentric matrix circle has 5x moves:
  // Right, Up, Left, Down, and Right again (to close the circle);

  while (currentLevel < level) {
    x = y = currentLevel;
    nextLevel = currentLevel + 1;

    // Right: x, y++;
    matrix[++value] = [x, ++y];

    // Up: x--; y; until -L, L;
    while (x > -nextLevel) {
      matrix[++value] = [--x, y];
    }

    // Left: x; y--; -L, -L;
    while (y > -nextLevel) {
      matrix[++value] = [x, --y];
    }

    // Down: x++; y; L, -L;
    while (x < nextLevel) {
      matrix[++value] = [++x, y];
    }

    // Right: x, y++; L, L;
    while (y < nextLevel) {
      matrix[++value] = [x, ++y];
    }

    // Get to the next level
    currentLevel = nextLevel;
  }

  return matrix;
}

var calculateDistance = function(matrixLevel, element) {
  var matrix = constructMatrix(matrixLevel);
  var x = Math.abs(matrix[element][0]);
  var y = Math.abs(matrix[element][1]);
  return x + y;
}
