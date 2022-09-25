function spiceMustFlow(number) {
  let yield = number;
  let hasEnded = false;
  let dayCount = 0;
  let extract = 0;
  let sum = 0;
  while (!hasEnded) {
    if (yield >= 100) {
      extract = yield - 26;
      yield -= 10;
      sum += extract;
      dayCount++;
    } else if (yield < 100) {
      hasEnded = true;
      sum -= 26;
      break;
    }
  }
  if(sum < 0){
    sum = 0;
  }
  console.log(dayCount);
  console.log(sum);
}
spiceMustFlow(450);
