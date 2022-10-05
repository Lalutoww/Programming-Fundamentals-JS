function arrayRotation(inputArr, rotation){
    for(let i = 0; i < rotation % inputArr.length; i++){
        let firstElemet = inputArr.shift();
        inputArr.push(firstElemet);
    }
    console.log(inputArr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)