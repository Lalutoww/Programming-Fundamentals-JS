function wordOccurences(input){

    let wordStorage = {};

    for (const word of input) {

        if(!wordStorage[word]){
            wordStorage[word] = 0;
        }
            wordStorage[word]++     
    }
    
    let countSort = Object.entries(wordStorage);
    countSort.sort((a,b) => b[1] - a[1]);

    for (const entry of countSort) {
        console.log(`${entry[0]} -> ${entry[1]} times`);
    }
}
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])