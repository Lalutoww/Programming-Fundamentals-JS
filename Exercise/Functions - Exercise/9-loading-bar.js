function loadingBar(percent){
    let percentArr = [];
    for(let i = 1; i <= 10; i++){
        percentArr.push('.')
    }
    for(let i = 0; i < percent / 10; i++){
        percentArr[i] = '%';
    }
    if(percent < 100){
        console.log(`${percent}% [${percentArr.join('')}]`);
        console.log('Still loading...')
    }else{
        percent = 100;
        console.log(`${percent}% Complete!`)
    }
}
loadingBar(100)