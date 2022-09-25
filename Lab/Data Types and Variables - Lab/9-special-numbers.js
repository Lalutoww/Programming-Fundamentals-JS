function specialNumbers(number) {
  let startNum = 1;
  let digit = '';
  let lastDigit = 0;
  let sum = 0;
  let isSpecial = false;
  for (let i = 1; i <= number; i++) {
    digit = i.toString();
    lastDigit = i % 10;
    if (digit.length == "1") {
      lastDigit = parseInt(lastDigit / 10);
    }
    sum = lastDigit + Number(digit[0]);
      if (sum == 5 || sum == 7 || sum == 11) {
        isSpecial = true;
      }else{
        isSpecial = false;
      }
      console.log(isSpecial ? `${startNum} -> True` : `${startNum} -> False`);
      startNum++;
  }
}
specialNumbers(15);
