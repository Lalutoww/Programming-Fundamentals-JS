function employees(arr){

    let workerInfo = {};
    arr.forEach(worker => {
        workerInfo.number = worker.length;
        for (const key in workerInfo) {
            console.log(`Name: ${worker} -- Personal Number: ${workerInfo[key]}`);
        }
    });

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )