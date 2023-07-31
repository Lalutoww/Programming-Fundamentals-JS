function printNthElement(arr){
    let step = Number(arr[arr.length-1]);
    let newArr = [];
    for(let i = 0; i < arr.length-1; i+=step){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '))
}
printNthElement(['dsa', 'asd', 'test', 'test', '2']) 