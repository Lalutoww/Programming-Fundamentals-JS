function messageTranslator(input){
    let validPattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<name>[A-Za-z]{8,})]/g;
    let number = Number(input.shift());

    for(let i=0; i<number;i++){
        let text = input[i]
        let exec = validPattern.exec(text);

        if(exec){
            while(exec){
                let name = exec.groups['name'];
                let temp = '';
                for (const char of name) {
                    temp+= `${char.charCodeAt()} `
                }
                let command = exec.groups['command']
                console.log(`${command}: ${temp}`)

               exec = validPattern.exec(text);
            }
        }else{
            console.log('The message is invalid');
        }
    }
}
messageTranslator(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])

