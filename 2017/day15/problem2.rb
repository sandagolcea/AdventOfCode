#!/usr/bin/ruby
# http://adventofcode.com/2017/day/15 - part 2
# to run: $ ./problem2.rb

def calculatePairs()
  divider = 2147483647
  repetitions = 5000000
  
  # problem values
  afactor = 16807
  bfactor = 48271
  astart = 679
  bstart = 771

  pairCount = 0
  mask = 65535

  newNumberA = (astart * afactor) % divider
  newNumberB = (bstart * bfactor) % divider

  i = 0
  j = 0

  while (i < repetitions && j < repetitions) do

    if ( newNumberA % 4 != 0 ) then
      newNumberA = (newNumberA * afactor) % divider
    end

    if ( newNumberB % 8 != 0 ) then
      newNumberB = (newNumberB * bfactor) % divider
    end

    if ( newNumberA % 4 == 0 ) && ( newNumberB % 8 == 0 ) then
      binaryNumberA = newNumberA & mask
      binaryNumberB = newNumberB & mask

      if (binaryNumberA == binaryNumberB) then
        pairCount = pairCount + 1
      end

      newNumberA = (newNumberA * afactor) % divider
      newNumberB = (newNumberB * bfactor) % divider
      i = i + 1
      j = j + 1
    end
  end

  return pairCount
end

puts calculatePairs()
