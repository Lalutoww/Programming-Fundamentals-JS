function partyTime(input) {
   let command = input.shift();
   let vipList = [];
   let regularList = [];

   while (command !== 'PARTY') {
      let isVip = isNaN(command[0]);
      if (!isVip) {
         vipList.push(command);
      } else {
         regularList.push(command);
      }
      command = input.shift();
   }
   let guestList = vipList.concat(regularList);

   for (const guest of input) {
      guestList.splice(guestList.indexOf(guest), 1);
   }
   let unattendedGuests = guestList.length;

   console.log(unattendedGuests);
   for (const unattendedGuest of guestList) {
      console.log(unattendedGuest);
   }
}
partyTime([
   'm8rfQBvl',
   'fc1oZCE0',
   'UgffRkOn',
   '7ugX7bm0',
   '9CQBGUeJ',
   '2FQZT3uC',
   'dziNz78I',
   'mdSGyQCJ',
   'LjcVpmDL',
   'fPXNHpm1',
   'HTTbwRmM',
   'B5yTkMQi',
   '8N0FThqG',
   'xys2FYzn',
   'MDzcM9ZK',
   'PARTY',
   '2FQZT3uC',
   'dziNz78I',
   'mdSGyQCJ',
   'LjcVpmDL',
   'fPXNHpm1',
   'HTTbwRmM',
   'B5yTkMQi',
   '8N0FThqG',
   'm8rfQBvl',
   'fc1oZCE0',
   'UgffRkOn',
   '7ugX7bm0',
   '9CQBGUeJ',
]);
