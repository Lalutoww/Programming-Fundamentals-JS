function addSubstract(inputArray) {
  let resultArray = [];
  let originalSum = 0;
  let resultSum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      resultArray.push(inputArray[i] + i);
    } else {
      resultArray.push(inputArray[i] - i);
    }
    originalSum += inputArray[i];
    resultSum += resultArray[i];
  }
  console.log(resultArray);
  console.log(originalSum);
  console.log(resultSum);
}
addSubstract([5, 15, 23, 56, 35]);
