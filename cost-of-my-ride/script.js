function insurance(age, size, numofdays){
  let cost = 0;
  cost = numofdays * 50;

  if (numofdays < 0) {
    return cost = 0
  }

  if (age < 25) {
    cost += numofdays * 10
  } 

  if (size === "medium") {
    cost += 10 * numofdays
  } else if (size === "full-size") {
    cost += 15 * numofdays
  } else if (size === "economy") {
    cost += 0 * numofdays
  } else {
    cost += 15 * numofdays
  }
  return cost; 
}

console.log(insurance(42,"my custom car",-7));  // 0
console.log(insurance(18, "medium", 7));        // 490
console.log(insurance(42,"my custom car",7));   // 455