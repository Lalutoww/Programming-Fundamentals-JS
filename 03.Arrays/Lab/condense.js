function condense(arr) {
    while (arr.length > 1) {
        let condense = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condense[i] = Number(arr[i] + arr[i + 1]);
 
        }
        arr = condense;
        condense = 0;
    }
        console.log(Number(arr));
}
condense([2,10,3])