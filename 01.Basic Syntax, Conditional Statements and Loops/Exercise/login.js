function login(input) {
  let username = input.shift();
  let password = username.split("").reverse().join("");

  let failsCounter = 0;
  let currentPassword = input.shift();
  while (currentPassword !== password && failsCounter < 3) {
    console.log(`Incorrect password. Try again.`);
    currentPassword = input.shift();
    failsCounter++
  }

  if (currentPassword === password) {
    console.log(`User ${username} logged in.`);
  } else {
    console.log(`User ${username} blocked!`);
  }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);
