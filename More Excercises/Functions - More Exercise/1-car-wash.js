function carWash(arr){
    let value = 0
    for(let i = 0; i<arr.length; i++){
        let command = arr[i];
        switch(command){
            case 'soap': value+=10; break;
            case 'water': value *= 1.20; break;
            case 'vacuum cleaner': value *= 1.25; break;
            case 'mud': value = value - value * 0.10; break;
        }
    }
    return `The car is ${value.toFixed(2)}% clean.`
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))