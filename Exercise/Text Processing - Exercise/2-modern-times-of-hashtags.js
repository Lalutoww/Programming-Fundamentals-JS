function modernTimesOfHashTags(string) {
  let arr = string.split(" ");

  function containsNumbers(str) {
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            return true;
        }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.startsWith("#") && word.length > 1) {
        if (!containsNumbers(word)){
          console.log(word.toString().substring(1));
        }
    }
  }
}
modernTimesOfHashTags(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
