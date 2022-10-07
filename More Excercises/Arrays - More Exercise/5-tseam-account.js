function tseamAccount(arr) {
  let startAccount = arr[0].split(" ");

  for (let i = 1; i < arr.length-1; i++) {
    let commandSplit = arr[i].split(" ");
    let command = commandSplit[0];
    let game = commandSplit[1];

    switch (command) {
      case "Install": if(startAccount.includes(game) === false){
        startAccount.push(game); break;
      }
      case "Uninstall":
        if (startAccount.includes(game)) {
          let index = startAccount.indexOf(game);
          startAccount.splice(index, 1);
          break;
        }
      case "Update":
        if (startAccount.includes(game)) {
          let index = startAccount.indexOf(game);
          startAccount.splice(index,1);
          startAccount.push(game);
          break;
        }
      case "Expansion":
        let gameExpansion = game.split("-");
        let gameAddon = gameExpansion[0];

        if (startAccount.includes(gameAddon)) {
          let expandedGame = gameExpansion.join(":");
          let index = startAccount.indexOf(gameAddon);
          startAccount.splice(index + 1, 0, expandedGame);
        }
        break;
    }
  }
  console.log(startAccount.join(" "));
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);
