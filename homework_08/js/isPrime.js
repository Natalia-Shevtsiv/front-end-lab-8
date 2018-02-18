function  isPrime(a) {
    if (parseInt(a)<=1 || (a%2===0 && a!==2)) {
      return false
    } else { 
         for(let i = 3; i <= Math.sqrt(a); i+=2) { 
              if(a%i===0)  {
                 return false; break;
                }
           }
         return true;
        }
}
  