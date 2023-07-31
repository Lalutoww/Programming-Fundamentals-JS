function sumFirstAndLast(input){
    let firstElement = input[0];
    let lastElement = input[input.length-1];
    let sum = firstElement + lastElement;
    console.log(sum);
}
sumFirstAndLast([20, 30, 40])