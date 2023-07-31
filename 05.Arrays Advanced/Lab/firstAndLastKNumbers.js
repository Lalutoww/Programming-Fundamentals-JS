function firstAndLastKNumbers(arr){
    let count = arr.shift();
    let firstNums = arr.slice(0, count);
    let lastNums = arr.slice(arr.length - count);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])