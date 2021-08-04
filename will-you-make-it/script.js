const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (25 * fuelLeft == distanceToPump) {
      return true;
    } else {
      return false;
    }
  };

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(50, 25, 1));
