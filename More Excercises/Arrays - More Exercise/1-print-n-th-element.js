function print(arr){
    let step = Number(arr[arr.length-1]);
    let newArr = [];
    for(let i = 0; i < arr.length-1; i+=step){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '))
}
print(['dsa', 'asd', 'test', 'test', '2']) 