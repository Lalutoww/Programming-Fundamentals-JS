function schoolGrades(input){

    let schoolGrades = {};

    for (const line of input) {
        let splitLine = line.split(' ');
        let name = splitLine.shift();

        if(!schoolGrades[name]){
            schoolGrades[name] = [];
            for(let i = 0; i < splitLine.length; i++){
                schoolGrades[name].push(splitLine[i]);
            }
        }else{
            for(let i = 0; i < splitLine.length; i++){
                schoolGrades[name].push(splitLine[i]);
            }
        }
    }


    for (const grade in schoolGrades) {
       arr = schoolGrades[grade].map(x => Number(x));
       let sum = 0;
       for(let i = 0; i< arr.length; i++){
            sum+=arr[i];
       }
       let avg = (sum / arr.length).toFixed(2);
       schoolGrades[grade] = avg;
    }

    let nameSort = Object.entries(schoolGrades);
    nameSort.sort((a,b) => a[0].localeCompare(b[0]));

    for (const entry of nameSort) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)