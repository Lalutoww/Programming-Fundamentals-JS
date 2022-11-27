function arrayManipulator(startArr, commands) {
  let command = [];
  for (const el of commands) {
    command = el.split(" ");
    switch (command[0]) {
      case "add":
        startArr.splice(command[1], 0, Number(command[2]));
        break;
      case "addMany":
        let currentEl = 0;
        for (let i = command.length - 1; i >= 2; i--) {
          currentEl = command[i];
          startArr.splice(command[1], 0, Number(currentEl));
        }
        break;
      case "contains":
        if (startArr.includes(Number(command[1]))) {
          console.log(startArr.indexOf(Number(command[1])));
        } else {
          console.log("-1");
        }
        break;
      case "remove":
        startArr.splice(command[1], 1);
        break;
      case "shift":
        let position = command[1];
        for (let i = 0; i < position; i++) {
          let firstEl = startArr.shift();
          startArr.push(firstEl);
        }
        break;
      case "sumPairs":
        let elSum = startArr.reduce(function (total, el, index) {
          if (index % 2 === 0) {
            total.push(
              Number(startArr[index]) + (Number(startArr[index + 1]) || 0)
            );
          }
          return total;
        }, []);
        startArr = elSum;
        break;
      case "print":
        console.log(`[ ${startArr.join(', ')} ]`);
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
