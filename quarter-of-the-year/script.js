const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 'first quarter'
    } else if (month >= 4 && month <=6) {
      return 'second quarter'
    } else if (month >= 7 && month <= 9) {
      return 'third quarter' 
    } else if (month >= 10 && month <= 12) {
      return 'fourth quarter'
    } else {
      return ''
    }
  }
  
  console.log(quarterOf(1)); //first quarter
  console.log(quarterOf(5)); //second quarter 
  console.log(quarterOf(7)); //third quarter
  console.log(quarterOf(10)); //fourth quarter
  console.log(quarterOf(15)); //''