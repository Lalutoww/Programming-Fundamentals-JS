function equalArrays(arr1, arr2){
    let sum = 0;
    let areEqual = true;
    for(let i = 0; i<= arr1.length-1; i++){
        if(arr1[i] !== arr2[i]){
           // areEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }else{
            sum+= Number(arr1[i]);
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','3','4','5'])