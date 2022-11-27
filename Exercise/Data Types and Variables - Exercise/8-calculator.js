function calculator(numberOne, operator, numberTwo){
    let sum = 0
    switch (operator) {
        case '+': sum = numberOne + numberTwo; break;
        case '-': sum = numberOne - numberTwo; break;
        case '/': sum = numberOne / numberTwo; break;
        case '*': sum = numberOne * numberTwo; break;
    }
    console.log(sum.toFixed(2));
}
calculator(5, '+', 10)