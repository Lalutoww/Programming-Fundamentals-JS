function imitationGame(input){
    let message = input.shift();
    let line = input.shift();

    while(line != 'Decode'){
        let [command,arg1,arg2] = line.split('|');

        switch(command){
            case 'Move':
                let numberOfLetters = arg1;
                let lettersToMove = message.substring(0, numberOfLetters);
                message = message.replace(lettersToMove, "");
                message += lettersToMove;
            break;
            case 'Insert':
                let index = Number(arg1);
                let value = arg2;

                message = message.split('');
                message.splice(index,0,value);
                message = message.join('');
        
            break;
            case 'ChangeAll':
                let substring = arg1;
                let replacement = arg2;

                while(message.includes(substring)){
                    message =message.replace(substring,replacement);
                }
            break;
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode'
]
)