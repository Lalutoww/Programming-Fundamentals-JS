function simpleCalculator(numberOne, numberTwo, operator){
    let sum = 0;
    switch(operator){
        case 'multiply': sum = numberOne * numberTwo; break;
        case 'divide': sum = numberOne / numberTwo; break;
        case 'add': sum = numberOne + numberTwo; break;
        case 'subtract': sum = numberOne - numberTwo; break;
    }
    return sum;
}
console.log(simpleCalculator(5,5,'multiply'));