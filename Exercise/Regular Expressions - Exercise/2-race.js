function race(input) {
  let names = input.shift();
  let namesPattern = /[A-Za-z]+/g;
  let distancePattern = /[\d]/g
  let racers = {};

  for (const el of input) {
    let name = el.match(namesPattern).join('');
    if(names.includes(name)){
      let distance =  el.match(distancePattern)
      .map(x=> Number(x))
      .reduce((a,b) => a + b,0);
        if (!racers[name]) {
            racers[name] = distance;
        }else{
            racers[name] += distance;
        }
    }
  }

  let sorted = Object.entries(racers).sort((a,b) => b[1] - a[1]);
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
