function Numbers(input){
    let numbers = input.shift().split(' ').map(Number);
    
    let currentLine = input.shift();
    
    
    while(currentLine != 'Finish'){
        let lineArr = currentLine.split(' ');
        let command = lineArr[0];
        let value = Number(lineArr[1]);
        let replacement = Number(lineArr[2]); 

        switch(command){
            case 'Add':
                numbers.push(value);
            break;
            case 'Remove':
                for(let i = 0; i < numbers.length; i++){
                    if(numbers[i] == value){
                        numbers.splice(i, 1);
                        break;
                    }
                }
            break;
            case 'Replace':
                for(let i = 0; i < numbers.length; i++){
                    if(numbers[i] == value){
                        numbers.splice(i, 1, replacement);
                        break;
                    }
                }
            break;
            case 'Collapse':
               numbers = numbers.filter(x => x > value);
            break;
        }
        currentLine = input.shift();
    }
    console.log(numbers.join(' '))
}
Numbers(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])




