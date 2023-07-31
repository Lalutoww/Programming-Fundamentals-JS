function smallestTwo(arr){
    let filteredArr = arr.sort((a,b) => a-b)
    .slice(0,2);
    console.log(filteredArr.join(' '))
    
}
smallestTwo([30, 15, 50, 5])