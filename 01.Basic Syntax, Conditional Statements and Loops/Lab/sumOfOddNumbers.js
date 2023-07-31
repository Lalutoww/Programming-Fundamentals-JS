function solve(count){
    let sum = 0;
    let oddNumber = 1;
    for(let i = 1; i <= count; i++){
        console.log(oddNumber);
        sum+=oddNumber
        oddNumber+=2
    }
    console.log("Sum: " + sum);
}
solve(5)