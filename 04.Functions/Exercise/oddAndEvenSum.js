function oddAndEvenSum(arr){
    let evenSum = 0;
    let oddSum = 0;
    let newArr = [];
    let sArr =  arr.toString();

    for(let i = 0; i < sArr.length; i++){
        newArr.push(Number(sArr.charAt(i)));
        if(newArr[i] % 2 === 0){
            evenSum += Number(newArr[i]);
        }else{
            oddSum += Number(newArr[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)
