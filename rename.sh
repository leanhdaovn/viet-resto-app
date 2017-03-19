find . -type d -name '*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/nearbyfavourites/vietresto/')" ;
    mv "${FILE}" "${newfile}" ;
done
