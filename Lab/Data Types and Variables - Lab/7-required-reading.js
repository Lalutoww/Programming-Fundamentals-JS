function requiredReading(pageNum, hourlyPages, days){
    let totalTime = pageNum / hourlyPages;
    let hoursPerDay = totalTime / days;
    console.log(hoursPerDay);
}
requiredReading(212,20,2)