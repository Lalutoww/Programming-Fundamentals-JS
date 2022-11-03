function sorting(arr){
    let sortedArr = arr.sort((a,b) => a-b)
    let resultArr = [];

    while(sortedArr.length !== 0){
        resultArr.push(sortedArr.pop());
        resultArr.push(sortedArr.shift());
    }

    console.log(resultArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])