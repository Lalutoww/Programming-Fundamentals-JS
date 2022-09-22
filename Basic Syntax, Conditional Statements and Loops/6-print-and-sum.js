function printAndSum(num1, num2){
    let sum = 0;
    let output = '';
    for(let i = num1; i <= num2; i++){
        sum+=i
        output += `${i} `
    }
    console.log(output);
    console.log("Sum: "+ sum);
}
printAndSum(5,10)