function reverseInPlace(inputArr) {
  let arr = inputArr;
  for (let i = 0; i < arr.length / 2; i++) {
    let tempElement = arr[i];
    let previousIndex = arr.length - 1 - i;
    arr[i] = arr[previousIndex];
    arr[previousIndex] = tempElement;
  }
  /* let output = '';
    for(let i = 0; i<=arr.length-1; i++){
        output += arr[i] + " "
    }
    console.log(output);*/
  console.log(arr.join(" "));
}
reverseInPlace(["33", "123", "0", "dd"]);
