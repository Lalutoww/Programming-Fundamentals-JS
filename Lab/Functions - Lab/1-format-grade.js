function formatGrade(grade){
    let output = 'Fail';

    if(grade > 3 && grade < 3.50){
        output = 'Poor';
    }else if(grade >= 3.50 && grade < 4.50){
        output = 'Good';
    }else if(grade >= 4.50 && grade < 5.50){
        output = 'Very good';
    }else if(grade >= 5.50){
        output = 'Excellent';
    }else{
        output = 'Fail';
        grade = 2;
    }

    if(output !== "Fail"){
        return `${output} (${grade.toFixed(2)})`;
    }else{
        return `${output} (${(grade)})`;
    }
}
console.log(formatGrade(4.50));