var DOLLAR_RATE=27.1240;
var EOURO_RATE=33.2324;
var a =  parseFloat(prompt("Enter amount of dollars to exchange",""));
var b = parseFloat(prompt ("Enter amount of euros to exchange",""));
if (isNaN(a) ||  isNaN(a) || a<0 || b<0) { 
    console.log ("Incorrect data");
} else {
        console.log("%f euros are equal %f UAH, %f dollars are equal %f UAH, one euro is equal %f dollars", parseFloat(a.toFixed(2)), 
        parseFloat((a*DOLLAR_RATE).toFixed(2)), parseFloat(b.toFixed(2)), parseFloat((b*EOURO_RATE).toFixed(2)),
        parseFloat((EOURO_RATE/DOLLAR_RATE).toFixed(2)));
    } 