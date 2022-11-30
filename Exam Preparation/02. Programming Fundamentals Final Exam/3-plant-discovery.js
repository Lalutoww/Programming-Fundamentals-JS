function plantDiscovery(input){
    let plantsNum = Number(input.shift());
    let plantCollection = {};

    for(let i = 0; i < plantsNum; i++){
        let [plantName, rarity] = input.shift().split('<->');
        plantCollection[plantName] =
        {
            rarity: Number(rarity),
            rating: []
        }    
    }
    
    let command = input.shift();

    while(command != 'Exhibition'){
        
        let args = command.split(': ');
        let task = args[0];
        let [plantName,value] = args[1].split(' - ');

        if(plantCollection[plantName]){
            switch(task){
                case 'Rate': plantCollection[plantName].rating.push(Number(value));
                break;
                case 'Update': plantCollection[plantName].rarity = Number(value);
                break;
                case 'Reset': plantCollection[plantName].rating = [];
            }
        }else{
            console.log('error');
        }
        command = input.shift();
    }

    console.log('Plants for the exhibition:');
    for (const plant in plantCollection) {
        let averageRating = calculateAverage(plantCollection[plant].rating);

        console.log(`- ${plant}; Rarity: ${plantCollection[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
     }

    function calculateAverage(array){
        let numberCount = array.length;
        if(!numberCount > 0){
            return 0.00;
        }
        let total = array.reduce((a,b) => a+b,0);

        return total / numberCount;

    }
}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])


