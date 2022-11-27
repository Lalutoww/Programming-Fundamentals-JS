function stringSubstring(string, sentence){

    let sentenceArr = sentence.split(' ').map(x => x.toLowerCase());
    if(sentenceArr.includes(string)){
        console.log(string);
    }else{
        console.log(`${string} not found!`);
    }

}
stringSubstring('python',
'JavaScript is the best programming language'
)