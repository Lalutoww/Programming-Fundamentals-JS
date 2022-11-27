function gladiatorExpenses(lostFights, helmetP, swordP, shieldP, armorP){
    let sum = 0;
    let shieldCount = 0;
    for(let i = 1; i <= lostFights; i++){
        if(i % 2 === 0){
            sum+= helmetP;
        }if(i % 3 === 0){
            sum += swordP;
        } if(i % 2 === 0 && i % 3 === 0){
            sum += shieldP;
            shieldCount++
        }if(shieldCount % 2 === 0 && shieldCount !== 0){
            sum += armorP;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200    
    )