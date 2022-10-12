function numberModification(number){
    let numArr = number.toString().split('');
    function average(){
        let sum = 0;
        for(let i = 0; i < numArr.length;i++){
            sum+=Number(numArr[i]);
        }
        return sum / numArr.length;
    }
        for(let i = 0; i <= 6; i++){
            if(average() <= 5){
                numArr.push(9);
                average();
            }else{
                break;
            }
        }
    return numArr.join('');
}
console.log(numberModification(101))