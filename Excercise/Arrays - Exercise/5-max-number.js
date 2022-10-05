function maxNumber(inputArr){
    let resultArray = [];
    for(let i = 0; i < inputArr.length; i++){
        let isBigger = true;
        for(let j = i + 1; j < inputArr.length; j++){
            if(inputArr[i] <= inputArr[j]){
                isBigger = false;
            }
        }
        if(isBigger){
            resultArray.push(inputArr[i]);
            
        }
    }
    console.log(resultArray.join(' '));
}
maxNumber([1, 4, 3, 2])