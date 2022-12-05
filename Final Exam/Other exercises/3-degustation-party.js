function degustationParty(input){

    let likes = {};

    let line = input.shift();
    let unlikedMeals = 0;


    while(line != 'Stop'){
        let [command, guest, meal] = line.split('-');

        switch (command) {
            case 'Like':
                if(!likes[guest]){
                    likes[guest] =
                    {
                        likes: meal,
                    }
                }else{
                    likes[guest].likes += ', ' + meal;
                }
                break;
        
            case 'Dislike':
                if(!likes[guest]){
                    console.log(`${guest} is not at the party.`);
                }else if(!likes[guest].likes.includes(meal) ){
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }else{
                    delete likes[guest].likes
                    unlikedMeals++;
                    console.log(`${guest} doesn't like ${meal}`);
                }
                break;
        }
        line = input.shift();
    }
    for (const guest in likes) {
        if(likes[guest].likes === undefined){
            likes[guest].likes = '';
        }
        console.log(`${guest}: ${likes[guest].likes}`);
    }
    console.log(`Unliked meals: ${unlikedMeals}`);
}
degustationParty(["Like-Krisi-shrimp, salad",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])



