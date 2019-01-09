#!/usr/bin/ruby
# run with ./problem1.rb
# the nr of repetitions, divider, start values and factors are provided
# divider and repetitions are common for A and B

# get the last 16 binary digits
def getBinary(number)
  binary = ""
  while (number > 0 && binary.size < 16) do
    binary << (number % 2).to_s
    number = number / 2
  end
  # might add condition for case where binary.size < 16, to add extra zero-es
  return binary.reverse
end

def createNumbersArray(start, factor)
  divider = 2147483647
  repetitions = 40000000
  # repetitions = 5

  numbers = Array.new(0)
  newNumber = (start * factor) % divider

  i = 0
  while i < repetitions do
    numbers.push(getBinary(newNumber))
    newNumber = (newNumber * factor) % divider
    i = i + 1
  end

  return numbers
end

def countMatches()
  # afactor = 65
  afactor = 16807
  # bfactor = 8921
  bfactor = 48271

  # astart = 679
  astart = 65
  # bstart = 771
  bstart = 8921

  count = 0
  arrayA = createNumbersArray(astart, afactor)
  arrayB = createNumbersArray(bstart, bfactor)

  i = 0
  while i < arrayA.size do
    # j = i + 1
    j = 0
    while j < arrayB.size do
      # puts arrayA[i]
      # puts arrayB[j]
      # puts "\n"
      if ((arrayA[i] <=> arrayB[j]) == 0) then
        count = count + 1
      end
      j = j + 1
    end
    i = i + 1
  end

  puts count
end

countMatches()

#  comparing two strings: "Apples" <=> "Apples"
# if ((newNumber * factor).size > 8)
#   then puts "yeeeelp!!"
# end