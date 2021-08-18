function halvingSum(n) {
    if (n === 1) {
      return n
    } else {
      return n + halvingSum(Math.floor(n/2))
    }
}