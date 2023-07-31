function treasureFinder(input){

    const key = input.shift().split(' ').map(x => Number(x));
    let stringIndex = 0;
    let string = input[stringIndex];

    while(string != 'find'){
        let result = '';
        let index = 0;
        for (const char of string) {
            let code = char.charCodeAt();
            let replacement = String.fromCharCode(code -= key[index++]);

            result += replacement;
     
            if(key[index] === undefined){
                 index = 0;
            } 
        }  
        string = input[++stringIndex];
        
        let type = result.split('&')[1];
        let coords = result.split('<')[1].split('>')[0];

        console.log(`Found ${type} at ${coords}`);
    }

}
treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"]
)