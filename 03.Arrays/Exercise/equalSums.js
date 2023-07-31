function equalSums(inputArray) {
  let foundIndex = "no";

  for (let i = 0; i < inputArray.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let l = 0; l < i; l++) {
      sumLeft += inputArray[l];
    }
    for (let r = i + 1; r < inputArray.length; r++) {
      sumRight += inputArray[r];
    }
    if (sumLeft === sumRight) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);
