function litres(time) {
    const litresWater = time * 0.5;
    return Math.trunc(litresWater);
  }
  
console.log(litres(3)); //1
console.log(litres(6.7)); //3
console.log(litres(11.8));  //5