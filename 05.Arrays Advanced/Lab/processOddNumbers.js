function processOddNumbers(arr){
    let filteredArr = 
    arr.filter((_,i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(' ')
    console.log(filteredArr);
}
processOddNumbers([10, 15, 20, 25])