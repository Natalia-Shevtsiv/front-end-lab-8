function getFilteredArray(arr, fun){
    var filteredArray=[];
    forEach(arr, element=> {
            if (fun(element)) {filteredArray.push(element)}
    });
    return  filteredArray;
}