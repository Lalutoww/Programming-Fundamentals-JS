function integerAndFloat(numberOne, numberTwo, numberThree){

    let sum = numberOne + numberTwo + numberThree;
    let output = sum + ' ';
    if(Number.isInteger(sum)){
        console.log(output + '- Integer');
    }else{
        console.log(output + '- Float');
    }

}
integerAndFloat(100, 200, 303)