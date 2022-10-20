function arrayManipulations(arr){
    let numbers = arr.shift().split(' ')

    for(let i = 0; i<arr.length; i++){
        let command = arr[i].split(' ');
        switch (command[0]) {
            case 'Add': numbers.push(command[1]); break;
            case 'Remove': let filteredNum = numbers.filter(x => x !== command[1]); numbers = filteredNum;break;
            case 'RemoveAt': numbers.splice(command[1], 1); break;
            case 'Insert': numbers.splice(command[2], 0, command[1]); break;
        }
    }
    console.log(numbers.join(' '));
}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
