function cardGame(input) {
   let players = {};

   for (const person of input) {
      let [name, cards] = person.split(': ');
      cards = cards.split(', ');

      if (!players[name]) {
         players[name] = [];
         for (el of cards) {
            if (!players[name].includes(el)) {
               players[name].push(el);
            }
         }
      } else {
         for (el of cards) {
            if (!players[name].includes(el)) {
               players[name].push(el);
            }
         }
      }
   }

   function calcPlayersPower(pl) {
      let points = 0;

      pl.forEach((card) => {
         points += calcCard(card);
      });
      return points;
   }

   function calcCard(somecard) {
      let card = somecard.split('');
      let power = 0;
      let powerType = {
         P: {
            J: 11,
            Q: 12,
            K: 13,
            A: 14,
         },

         T: {
            S: 4,
            H: 3,
            D: 2,
            C: 1,
         },
      };
      if (card.length > 2) {
         let boq = card.pop();
         let twoToTuz = Number(card.join(''));
         power += twoToTuz * powerType.T[boq];
      } else if (Number(card[0]) === Number(card[0])) {
         let boq = card.pop();
         let twoToTuz = Number(card);
         power += twoToTuz * powerType.T[boq];
      } else {
         let boq = card.pop();
         let twoToTuz = card;
         power += powerType.P[twoToTuz] * powerType.T[boq];
      }

      return power;
   }

   for (player in players) {
      console.log(`${player}: ${calcPlayersPower(players[player])}`);
   }
}
cardGame([
   'Peter: 2C, 4H, 9H, AS, QS',
   'Tomas: 3H, 10S, JC, KD, 5S, 10S',
   'Andrea: QH, QC, QS, QD',
   'Tomas: 6H, 7S, KC, KD, 5S, 10C',
   'Andrea: QH, QC, JS, JD, JC',
   'Peter: JD, JD, JD, JD, JD, JD',
]);
