function reversedChars(charOne, charTwo, charThree){
    let concatenate = charOne + charTwo + charThree;
    let reverse = concatenate.split("").reverse();
    let buff = "";
    for (let str of reverse) {  
        buff +=str + " ";
    }  
    console.log(buff);  
}
reversedChars('A', 'B', 'C')