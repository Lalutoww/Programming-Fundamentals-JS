function addressBook(input){
    let addressBook = {};

    for (const entry of input) {
        let [name,street] = entry.split(":");
        addressBook[name] = street;
    }

    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((a,b)=> a[0].localeCompare(b[0]))
    
    for (const entry of addressBookEntries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])