#!/usr/bin/ruby
# http://adventofcode.com/2017/day/15 - part 2
# to run: $ ./problem1.rb


def calculatePairs()
  divider = 2147483647
  repetitions = 40000000

  afactor = 16807
  bfactor = 48271
  astart = 679
  bstart = 771

  pairCount = 0
  mask = 65535

  newNumberA = (astart * afactor) % divider
  newNumberB = (bstart * bfactor) % divider

  i = 0
  while i < repetitions do
    binaryNumberA = newNumberA & mask
    binaryNumberB = newNumberB & mask
    if (binaryNumberA === binaryNumberB) then
      pairCount = pairCount + 1
    end
    newNumberA = (newNumberA * afactor) % divider
    newNumberB = (newNumberB * bfactor) % divider
    i = i + 1
  end

  return pairCount
end

puts calculatePairs()
