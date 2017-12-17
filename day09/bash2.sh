#!/bin/bash 
# remove all ! and next char, count chars
# 
STR_BEFORE=`echo $1 | sed 's/!.//g'`
STRLEN_BEFORE=$(printf "%s" "$STR_BEFORE" | wc -c)

STR_AFTER=`echo $1 | sed 's/!.//g' | sed -e 's/<[^>]*>/xx/g'`
STRLEN_AFTER=$(printf "%s" "$STR_AFTER" | wc -c)

echo $(($STRLEN_BEFORE - $STRLEN_AFTER))
