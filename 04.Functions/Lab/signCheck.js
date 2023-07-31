function signCheck(numberOne, numberTwo, numberThree) {
  function isPositive(numberOne, numberTwo) {
    if (numberOne * numberTwo >= 0) {
      return true;
    } else {
      return false;
    }
  }
  if (isPositive(numberOne, numberTwo) && numberThree >= 0) {
    return "Positive";
  } else if (!isPositive(numberOne, numberTwo) && numberThree <= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}
console.log(signCheck(1,-2,3));
