function fancyBarcodes(input){
    let barcodeNumber = Number(input.shift());
    let validPattern = /@[#]+(?<name>[A-Z]{1}[A-Za-z|\d]{4,}[A-Z]{1})@[#]+/g;

    for(let i = 0; i<barcodeNumber; i++){
        let text = input[i];
        let exec = validPattern.exec(text);

        if(!exec){
            console.log('Invalid barcode');
        }
        while(exec){
            let digitPattern = /[\d]/g;
            let digits = text.match(digitPattern);
            if(digits){
                console.log(`Product group: ${digits.join('')}`);
            }else{
                console.log(`Product group: 00`);
            }
            
            exec = validPattern.exec(text);
        }
    }
}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

