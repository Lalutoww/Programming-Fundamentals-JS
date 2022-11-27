function schoolRegister(input){
    
    let schoolRegister = {};

    for (const student of input) {
        let tokens = student.split(', ');
        let name = tokens[0].split(': ')[1];
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let score = Number(tokens[2].split(': ')[1])
        if(score > 3){
            let student = {name, score};
            if(!schoolRegister[grade]){
                schoolRegister[grade] = [];
            }
            schoolRegister[grade].push(student); // Every grade contains students with their name and score
        }
    } 

    // Sort by grade
    let sortedGrades = Object.keys(schoolRegister).sort((a,b) => a - b);
    
    for (let grade of sortedGrades) {
        let students = schoolRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`); // Gets all the names and joins them by ','

    console.log(`Average annual score from last year: ${average(students.map(s => s.score)).toFixed(2)}`); // Gets the score
        console.log();
    }

    // creates function average which is used in line 27
    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )