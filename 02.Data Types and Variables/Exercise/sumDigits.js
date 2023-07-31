function sumDigits(number) {
  let numText = number.toString();
  let sum = 0;
  for (let i = 0; i < numText.length; i++) {
    let digit = Number(numText[i]);
    sum += digit;
  }
  console.log(sum);
}
sumDigits(245678);
