function search(numbers, settings) {
  let numTake = numbers.slice(0, settings[0]);
  numTake.splice(0, settings[1]);

  let count = 0;
  for (const el of numTake) {
    if (el === settings[2]) {
      count++;
    }
  }
  console.log(`Number ${settings[2]} occurs ${count} times.`);
}
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);
