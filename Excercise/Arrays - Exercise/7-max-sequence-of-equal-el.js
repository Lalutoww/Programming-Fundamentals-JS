function maxSequence(inputArr){
    let isFound = false;
    let sequence = 0;
    let lastNum = 0;

    for(let i = 0; i < inputArr.length; i++){
        lastNum = inputArr[i];
        let nextNum = inputArr[i+1]
        if(lastNum === nextNum){
            console.log(lastNum);
            console.log(nextNum);
        }
    }
    console.log(sequence);
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])