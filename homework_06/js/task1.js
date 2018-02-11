var a =  parseFloat(prompt("Enter first side of triangle",""));
var b = parseFloat(prompt ("Enter second side of triangle",""));
var c = parseFloat(prompt("Enter third side of triangle",""));
 if(isNaN(a) || isNaN(b) || isNaN(c) || a<=0 || b<=0 || c<=0) {
      console.log ("Incorrect data");
    }  else if (a+b<=c || a+c<=b || c+b<=a){ 
           console.log ("Incorrect data. Sum of two sides must be bigger than third side.");
        } else {
                 var p = (a+b+c)/2;
                 var square=(Math.sqrt(p*(p-a)*(p-b)*(p-c)));
                 if (a*b/2 == square || a*c/2 == square || b*c/2 == square) {
                      console.log ("Type of triangle is right triangle and square is %f",  parseFloat(square.toFixed(2)));
                    } else if (a==b && a==c) {
                         console.log ("Type of triangle is equilateral triangle and square is %f", parseFloat(square.toFixed(2)));
                        } else if (a==b || a==c || b==c) { 
                            console.log ("Type of triangle is isosceles triangle and square is %f",parseFloat(square.toFixed(2)));
                            } else {
                               console.log ("Type of triangle is scalene triangle and square is %f", parseFloat(square.toFixed(2)));
                                   }
            }
