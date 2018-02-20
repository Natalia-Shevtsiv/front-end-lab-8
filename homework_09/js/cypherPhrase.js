function cypherPhrase(obj, fraze){
return getTransformedArray(fraze.split(''), function (element1){
          getTransformedArray(Object.keys(obj), function (element2){
          if (element2===element1) {element1=obj[element2]} 
          });
          return element1;
        }).join('');
}