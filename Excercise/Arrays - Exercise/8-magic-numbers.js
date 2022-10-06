function magicNumbers(arr, resultNum){
    let magicNumArr = [];
    for(let i = 0; i < arr.length; i++){
        let currentNum1 = arr[i];
        for(let j = i + 1 ; j < arr.length; j++){
            let currentNum2 = arr[j];
            let sum = currentNum1 + currentNum2;
            if(sum === resultNum){
                magicNumArr.push(currentNum1);
                magicNumArr.push(currentNum2);
            }
        }
    }
    let buff = '';
    console.log(magicNumArr);
    for(let i = 0; i < magicNumArr.length; i++){
        if(i % 2 === 0 && i !== 0){
            buff+='\n' + magicNumArr[i] + ' ';
        }else{
            buff+= magicNumArr[i] + ' ';
        }
    }
    console.log(buff);
}
magicNumbers(
[1, 7, 6, 2, 19, 23],
8
)