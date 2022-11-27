function distinctArr(arr){
    let resultArr = [];
    for(let i = 0; i<arr.length; i++){
        if(resultArr.includes(arr[i])){
            let index = arr.indexOf(arr[i])
            resultArr.slice(index,1)
        }else{
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])