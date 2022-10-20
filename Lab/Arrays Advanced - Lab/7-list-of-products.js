function listOfProducts(arr){
    let filteredArr = arr.sort();

    let buff = '';
    for(let i = 0; i < filteredArr.length; i++){
        buff = `${i + 1}.${filteredArr[i]}`
        console.log(buff);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])