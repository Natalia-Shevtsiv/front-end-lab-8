function isBigger(number1, number2){
  return number1>number2;
}

function isSmaller(number1, number2){
  return (number1===number2)? false: !isBigger(number1, number2);
}