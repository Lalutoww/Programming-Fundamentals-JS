function vacation(peopleCount, groupType, day){
    let price = 0;
    switch(day){
        case "Friday":
            if(groupType === "Students"){
                price = 8.45;
            } else if(groupType === "Business"){
                price = 10.90;
            } else if(groupType === "Regular"){
                price = 15;
            }
            break;
        case "Saturday":
            if(groupType === "Students"){
                price = 9.80;
            } else if(groupType === "Business"){
                price = 15.60;
            } else if(groupType === "Regular"){
                price = 20;
            }
            break;
        case "Sunday":
            if(groupType === "Students"){
                price = 10.46;
            } else if(groupType === "Business"){
                price = 16;
            } else if(groupType === "Regular"){
                price = 22.50;
            }
            break;
    }
    let totalPrice = price * peopleCount;
    if(peopleCount >= 30 && groupType === "Students"){
        totalPrice = totalPrice-(totalPrice * 0.15);
    }else if(peopleCount >= 100){
        peopleCount-=10;
        totalPrice = price * peopleCount;
    }else if(peopleCount >= 10 && peopleCount <= 20 && groupType === "Regular"){
        totalPrice = totalPrice-(totalPrice * 0.05);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(110, "Business", "Saturday")