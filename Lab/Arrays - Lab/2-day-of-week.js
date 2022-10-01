function dayOfWeek(day){
    let daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    let chosenDay = daysOfWeek[day - 1];
    
    if(day < 1 || day > 7){
        console.log("Invalid day!");
    } else{
        console.log(chosenDay);
    }
}
dayOfWeek(3)