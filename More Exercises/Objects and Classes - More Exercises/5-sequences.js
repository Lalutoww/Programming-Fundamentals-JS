function sequences(input) {
    input = input.map(el => JSON.parse(el));
    input.forEach(el => el.sort((a, b) => b - a));
    let outputArr = [];
    
    for (const index of input) {
        let currentArray = index;
        let isUnique = true;
        for (const iterator of outputArr) {
            let nextArray = iterator
            if (nextArray.toString() === currentArray.toString()) {
                isUnique = false;
                break;
            }  
        }
        if (isUnique) {
            outputArr.push(currentArray);
        }
    }

    outputArr.sort((a, b) => a.length - b.length);
    outputArr.forEach(el => console.log(`[${el.join(', ')}]`));
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)