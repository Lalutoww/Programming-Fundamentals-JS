function factorialDivision(numOne, numTwo){
    function firstFactorial(numOne){
        let sum = 1;
        for(let i = numOne; i>=1; i--){
            sum*=i
        }
        return sum;
    }
    function secondFactorial(numTwo){
        let sum = 1;
        for(let i = numTwo; i>=1; i--){
            sum*=i
        }
        return sum;
    }
    return (firstFactorial(numOne) / secondFactorial(numTwo)).toFixed(2);
}

console.log(factorialDivision(5,2));