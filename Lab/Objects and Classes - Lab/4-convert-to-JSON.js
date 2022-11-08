function convertToJSON(name, lastName, hairColor){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }

    let jsonText = JSON.stringify(person);
    console.log(jsonText);

}
convertToJSON('George', 'Jones', 'Brown')