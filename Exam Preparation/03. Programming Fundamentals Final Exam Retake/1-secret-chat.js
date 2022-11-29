function secretChat(input){
    let concealedMessage = input.shift();

    let line = input.shift();

    while(line != 'Reveal'){
        let [command,arg1,arg2] = line.split(':|:');
        
        switch(command){
            case 'InsertSpace':
                let index = Number(arg1);
                concealedMessage = concealedMessage.split('');
                concealedMessage.splice(index,0,' ');
                concealedMessage = concealedMessage.join('');
                console.log(concealedMessage);
            break;
            case 'Reverse':
                let substring = arg1;
                if(concealedMessage.includes(substring)){
                    let startIndex = concealedMessage.indexOf(substring);
                    let endIndex = startIndex + substring.length;
                    reversedString = concealedMessage.substring(startIndex, endIndex);
                    reversedString = reversedString.split('').reverse().join('');
                    concealedMessage = concealedMessage.replace(substring, '');
                    concealedMessage+=reversedString;
                    console.log(concealedMessage);
                }else{
                    console.log('error');
                }
            break;
            case 'ChangeAll':
                let string = arg1;
                let replacement = arg2;

                if(concealedMessage.includes(string)){
                    while(concealedMessage.includes(string)){
                        concealedMessage = concealedMessage.replace(string, replacement);
                    }
                    console.log(concealedMessage);
                }
            break;
        }

        line = input.shift();
    }
    console.log(`You have a new text message: ${concealedMessage}`);

}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)