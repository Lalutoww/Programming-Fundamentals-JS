function worldTour(input){
    let destinations = input.shift();

    let line = input.shift();

    while(line !== 'Travel'){
        let [command,arg1,arg2] = line.split(':');

        switch (command) {
            case 'Add Stop':
                let index = Number(arg1);
                let string = arg2;

                if(index >= 0 && index <= destinations.length){
                   destinations = destinations.split(''); 
                   destinations.splice(index,0,string);
                   destinations = destinations.join('')
                }
            break;
            case 'Remove Stop':
                let startIndex = Number(arg1);
                let endIndex = Number(arg2);

                if(startIndex >= 0 && startIndex < destinations.length && endIndex >= 0 && endIndex < destinations.length ){
                    let substring = destinations.substring(startIndex,endIndex+1);
                    destinations = destinations.replace(substring,'');
                }
            break;
            case 'Switch':
                let oldString = arg1;
                let newString = arg2;

                let rgx = new RegExp(oldString, 'g');
                destinations = destinations.replace(rgx, newString);
            break;
        }
        console.log(destinations);
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
} 
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])