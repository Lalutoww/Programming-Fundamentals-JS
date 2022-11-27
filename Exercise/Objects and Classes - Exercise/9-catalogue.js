function orderedCatalogue(array){
    let catalogue = [];

    array.forEach(line => {
        let [name,price] = line.split(' : ');
        let product = {
            name,
            price: Number(price),
        };
        catalogue.push(product);
    });
    
    catalogue.sort((a,b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter){
            console.log(`  ${product.name}: ${product.price}`)
        }else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)
 
        }
    }
}
orderedCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )