function rightPlace(firstString, character, secondString) {
  let res = firstString.replace("_", character);
  let output = res === secondString 
  ? "Matched" 
  : "Not Matched";
  console.log(output);
}
rightPlace("Str_ng", "i", "String");
