function perfectNumber(number){
    let buff = 0;
    for(let i = 1; i<=number/2;i++){
        if(number%i === 0){
            buff+=i;
        }
    }
    if(buff === number && buff !== 0){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)