function nxnMatrix(number){
    let rowBuff = '';
    for(let row = 1; row <= number; row++){
        rowBuff+= number.toString() + " ";
    }
    for(let i = 1; i<= number; i++){
        console.log(rowBuff)
    }
}
nxnMatrix(7);