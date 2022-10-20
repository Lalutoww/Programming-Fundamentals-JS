function lastKNumbers(length, jump){
    let result = [1];

    for(let i = 1; i < length; i++){
        let max = Math.max(result.length - jump, 0);
        let lastElements = result.slice(max)
        
        let sum = 0;
        
        for(const el of lastElements){
            sum += el;
        }

        result.push(sum)
    }
    console.log(result.join(' '));
}
lastKNumbers(6, 3)