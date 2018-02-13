var question =confirm("Do you want to play a game?");
if (!question) {console.log("You did not become a millionaire");}
 while (question) {
  var min = 0;
  var max = 5;
  var attempt = 3;
  var total_prize = 0;
  var maxprize=10;
  var prize=maxprize;
  var random_number =  Math.floor(Math.random() * (max+1));
  while (attempt>0){
    var enter_number = prompt("Enter a number from " + min + " to " + max + "\n" 
                       + "Attemts left: " + (attempt) + "\n"
                       + "Total prize: " + total_prize + "$\n"
                       + "Possible prize in current attempt: " + prize + "$","");
    if (enter_number==null) break;
    if (isNaN(parseInt(enter_number)) || random_number!=Number(enter_number)){
      attempt--;
      prize = Math.floor(prize/2);
    } else {
      total_prize+=prize;
        var question2 =confirm("Do you want to continue a game ?");
        if (question2){ 
          attempt=3;
          max*=2;
          maxprize*=3;
          prize=maxprize;
          random_number =  Math.floor(Math.random() * (max+1));
        } else break;
      }
  } 
  console.log("Thank you for a game. Your prize is: "+total_prize+"$");
  question =confirm("Do you want to play again?");
}
 
