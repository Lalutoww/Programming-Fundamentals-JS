function repeatString(string, repeat){
    let buff =''
    for(let i = 0; i< repeat; i++){
        buff+=string;
    }
    return buff;
}
console.log(repeatString('abc',3));