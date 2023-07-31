function houseParty(arr) {
  let guestList = [];

  for (const el of arr) {
    let command = el.split(" ");
    let name = command[0];

    if (command.length === 3) {
      if (!guestList.includes(name)) {
        guestList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (guestList.includes(name)) {
        let indexOfName = guestList.indexOf(name);
        guestList.splice(indexOfName, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(guestList.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);
