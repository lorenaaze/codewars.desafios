function getDivisorsCnt(n){
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i == 0) arr.push(i);
    }
    return arr.length;
}

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
