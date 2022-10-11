function charInRange(charOne, charTwo){
    let buff = '';
    for(let i = charCodeAt(charOne); i < charCodeAt(charTwo); i++){
        let buff += i;
    }
}
charInRange('a','d')