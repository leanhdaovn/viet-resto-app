find . -type f -name '*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/NearbyFavourites/VietResto/')" ;
    mv "${FILE}" "${newfile}" ;
done
