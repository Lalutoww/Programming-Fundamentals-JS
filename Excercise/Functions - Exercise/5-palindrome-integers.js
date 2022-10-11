function palindromeIntegers(arr){
    for(let i = 0; i < arr.length; i++){
        let reversedNum = arr[i].toString().split('').reverse().join('')
        if(arr[i] == reversedNum){
            console.log('true');
        }else{
            console.log('false');
        }
        
    }
}
palindromeIntegers([123,323,421,121]);