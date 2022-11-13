function meetings(input){
    let appointments = {};
    for (const appointment of input) {
        let [day,name] = appointment.split(' ');
        if(!appointments[day]){
            appointments[day] = name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const appointment in appointments) {
        console.log(`${appointment} -> ${appointments[appointment]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)