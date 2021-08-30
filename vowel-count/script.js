function getCount(str) {
    let vowelsCount = 0;
    
    for(let i of str) {
        if(i === "a") vowelsCount += 1;
        if(i === "e") vowelsCount += 1;
        if(i === "i") vowelsCount += 1;
        if(i === "o") vowelsCount += 1;
        if(i === "u") vowelsCount += 1;
    }
    return vowelsCount;
  }

console.log(getCount('casa'));
console.log(getCount('aeiou'));
