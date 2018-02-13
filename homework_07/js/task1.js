var num = Number(prompt("Enter number from 1 till 20",""));
if (num<=0 || num >20 || isNaN(num) || num%1!==0){ 
  console.error("Incorrect!");
} else {
  var pyramid ="";
  var i=0;
  while (i<num){
    var snip = "";
    var space= "";
    for (let j = 1; j < num - i; j++) {
      space +="   ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      snip += "[~]";
    }
    pyramid +=space + snip + "\n";
    i++;
  }
  console.log (pyramid);
}
