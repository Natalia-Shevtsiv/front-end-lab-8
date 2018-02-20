function decypherPhrase (obj, fraze){
    var new_obj={};
     getTransformedArray(Object.keys(obj), element=>{
       var key = obj[element];
       new_obj[key]=element;
    });
     return   cypherPhrase(new_obj, fraze);
 }
    
