function sortByTwo(arr) {
  let sortedArr = arr.sort(sort);
  
  function sort(a,b){
    if(a.length-b.length === 0){
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }else{
        return a.length-b.length
    }
}
  console.log(sortedArr.join("\n"));
}
sortByTwo(["test", "Deny", "omen", "Default"]);
