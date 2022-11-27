function addAndRemove(arr){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        let command = arr[i];
        if(command === 'add'){
            newArr.push(i + 1);
        }else if(command === 'remove'){
            newArr.pop();
        }
    }
    if(newArr.length === 0){
        console.log("Empty");
    }else{
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])