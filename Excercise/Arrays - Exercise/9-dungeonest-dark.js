function dungeonestDark(inputArray){
    let health = 100;
    let coins = 0;
    let arraySplit = inputArray[0].split("|");
    let room = 0;
    let isDead = false;

    for(let i = 0; i < arraySplit.length; i++){
        let currentRoom = arraySplit[i].split(' ');
        let command = currentRoom[0];
        let number = Number(currentRoom[1]);
        room++

        if(command === 'potion' && health !== 100){
            let healthCheck = health + number;
            if(health < 100 && healthCheck > 100){
                number = 100 - health;
                health += number;
            }else{
                health+= number;
            }

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(command === 'chest'){
            coins+= number;
            console.log(`You found ${number} coins.`);
        }else{
            health-= number;
            if(health > 0){
                console.log(`You slayed ${command}.`);
            }else{
                console.log(`You died! Killed by ${command}.`);
                isDead = true;
                break;
            }
        }
    }
    if(isDead){
        console.log(`Best room: ${room}`);
    }else{
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])