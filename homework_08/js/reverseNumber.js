function reverseNumber(a) {
    var number=a.toString();
    var reverseNum = number[0]==="-"? "-": ""; 
    for(let i=number.length-1; i>=0;i--){
     reverseNum +=  number[i];
    }
     return parseInt(reverseNum);
  } 

