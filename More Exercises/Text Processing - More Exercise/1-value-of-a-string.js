function stringValue(input){
    let string = input[0];
    let command = input[1];
    let sum = 0;

    for (const char of string) {
        switch(command){
            case 'LOWERCASE': if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
                sum+= char.charCodeAt();
            } break;
            case 'UPPERCASE': if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
                sum+= char.charCodeAt();
            }break; 
        }
    }
    console.log(`The total sum is: ${sum}`);
}
stringValue(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)