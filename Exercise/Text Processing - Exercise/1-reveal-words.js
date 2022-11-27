function revealWords(string,sentence){

    let sentenceArr = sentence.split(' ');
    let strings = string.split(', ');

    for (const string of strings) {
        for (const word of sentenceArr) {
            if(word.startsWith('*') && word.length == string.length){
                sentenceArr[sentenceArr.indexOf(word)] = string;
                break;
            }
        }   
    }
    console.log(sentenceArr.join(' '));
}
revealWords('great',
'softuni is ***** place for learning new programming languages'

)