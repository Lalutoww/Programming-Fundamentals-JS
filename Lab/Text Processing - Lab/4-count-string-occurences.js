function countStringOccurences(sentence,string){
 
    let words = sentence.split(' ');
    let counter = 0;

    for (const word of words) {
        if(string === word){
            counter++
        }
    }
    console.log(counter);
}
countStringOccurences('softuni is great place for learning new programming languages',
'softuni'

)