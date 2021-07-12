var humanYearsCatYearsDogYears = function(years) {
    let catYears = 0;
    let dogYears = 0;
    
    for(let i = 1; i <= years; i++) {
      if (i === 1) {
        catYears = 15;
        dogYears = 15;
      }  else if (i === 2) {
        catYears = 24;
        dogYears = 24;
      } else {
        catYears = (4 * (years - 2)) + 24;
        dogYears = (5 * (years - 2)) + 24;
      }
    }
    return [years,catYears,dogYears];
  }
  
  console.log(humanYearsCatYearsDogYears(1))
  console.log(humanYearsCatYearsDogYears(2))
  console.log(humanYearsCatYearsDogYears(10))