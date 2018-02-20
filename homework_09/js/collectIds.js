function collectIds(arr) {
     var  filterArray=getFilteredArray(arr, function(element) {
          return element.rating > 3
          });
    return getTransformedArray(filterArray, element=> element.id );
}
