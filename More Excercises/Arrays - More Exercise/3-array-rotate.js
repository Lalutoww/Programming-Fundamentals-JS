function arrayRotate(arr) {
  let newArr = arr;
  let rotation = Number(arr[arr.length - 1]);
  newArr.pop();
  for (let i = 0; i < rotation; i++) {
    let lastEl = newArr.pop();
    newArr.unshift(lastEl);
  }
  console.log(newArr.join(" "));
}
arrayRotate([1,2,3,4,2]);
