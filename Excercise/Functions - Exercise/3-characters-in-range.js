function charInRange(charOne, charTwo){
    let buff = [];
    if(charOne.charCodeAt() > charTwo.charCodeAt()){
        for(let i = charTwo.charCodeAt() + 1; i < charOne.charCodeAt(); i++){
            buff.push(String.fromCharCode(i));
        }
    }else{
        for(let i = charOne.charCodeAt() + 1; i < charTwo.charCodeAt(); i++){
            buff.push(String.fromCharCode(i));
        }
    }
    console.log(buff.join(' '));
}
charInRange('C','#')