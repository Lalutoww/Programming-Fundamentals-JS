function sortNumbers(numberOne, numberTwo, numberThree){
    let numArray = [numberOne, numberTwo, numberThree];
    numArray.sort().reverse()
    for (let num of numArray) {  
        console.log(num);
    } 
}
sortNumbers(6,4,2)