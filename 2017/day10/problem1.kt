// Prolem requirements: http://adventofcode.com/2017/day/10
// Kotlin Playground: https://try.kotlinlang.org/#/UserProjects/fls7apfrvnh4jcng58v2tgbfs4/ud8m543dgmg2p93pg4m22gaadv

fun main(args: Array<String>) {
    var lengthArray: IntArray = intArrayOf(102,255,99,252,200,24,219,57,103,2,226,254,1,0,69,216)
    pb(lengthArray)
  return
}

fun pb(_input: IntArray) {
    var input = _input
    var index = 0; var currentPosition = 0; var skip = 0;
    var line = IntArray(256, {i -> i})

    while (index < input.size) {
    if (currentPosition > line.size - 1) {
            currentPosition = currentPosition - line.size
        }
    line = reverse(line, currentPosition, input[index])
        currentPosition = currentPosition + skip + input[index]
        skip++
        index++
    }

    for (item in line) {
        print("${item} ")
    }
  println()
    println("response: ${line[0] * line[1]}")
}

fun reverse(line: IntArray, _start: Int, len: Int): IntArray {
    var aux: Int;
    var start = _start;
    var end = start + len - 1;
  
    var i = 0
    while (i < len/2) {
        
        // resetting start
        if (start >= line.size) start = 0;
        // resetting end
        if (end >= line.size) end = (start + len) - line.size - 1
        if (end < 0) end = line.size - 1
        
        aux = line[start]
        line[start] = line[end]
        line[end] = aux
        start++; end--;
        i++;
    }

    return line
}
