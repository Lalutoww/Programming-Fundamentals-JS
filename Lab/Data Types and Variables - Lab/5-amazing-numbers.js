function amazingNumbers(number){

    let textNum = number.toString();
    let sum = 0;
    for(let i = 0; i < textNum.length; i++){
        sum+=Number(textNum[i]);

    }
    let res = sum.toString().includes('9');
   
    console.log(res
        ? `${number} Amazing? True`
        : `${number} Amazing? False`);
}
amazingNumbers(1233)