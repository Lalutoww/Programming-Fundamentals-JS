function gladiatorInventory(inputArr){

    let inventory = inputArr.shift().split(' ');

    for(let i = 0; i < inputArr.length; i++){
        let command = inputArr.slice()[i].split(' ');
        let action = command[0];
        let item = command[1];

        switch(action){
            case 'Buy': if(!inventory.includes(item)){
                inventory.push(item); 
            }
            break;
            case 'Trash': if(inventory.includes(item)){
                let getIndex = inventory.indexOf(item);
                inventory.splice(getIndex, 1);
            }
            break;
            case 'Repair': if(inventory.includes(item)){
                let getIndex = inventory.indexOf(item);
                let repairedItem = inventory.splice(getIndex,1);
                inventory.push(repairedItem.toString());
            }
            break;
            case 'Upgrade': 
            let upgradeCommand = item.split('-');
            if(inventory.includes(upgradeCommand[0])){
                let getIndex = inventory.indexOf(upgradeCommand[0]);
                inventory.splice(getIndex+1,0,`${upgradeCommand[0]}:${upgradeCommand[1]}`)
            }
            break;
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

)