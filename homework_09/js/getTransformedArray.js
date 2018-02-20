function getTransformedArray(arr, fun){
    var transformedArray=[];
    forEach(arr, element=>transformedArray.push(fun(element)));
    return  transformedArray;
}