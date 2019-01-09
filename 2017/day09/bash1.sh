#!/bin/bash 
# remove all ! and next char
# remove everything btw <these>
# remove commas because I can  | sed 's/,//g'
LAYER=0
STR=`echo $1 | sed 's/!.//g' | sed -e 's/<[^>]*>//g' | sed 's/,//g'`
STRLEN=$(printf "%s" "$STR" | wc -c)

LEVEL=0

INDEX=0
while [ $INDEX -lt $STRLEN ]
do
  # if it's a beginning sign
  if [[ ${STR:INDEX:1} = '{' ]]; then
    ((LEVEL++))
  fi

  # if it's an ending sign
  if [[ ${STR:INDEX:1} = '}' ]]; then
    LAYER=$(($LAYER + $LEVEL))
    ((LEVEL--))
  fi

  ((INDEX++))
done

echo $LAYER
