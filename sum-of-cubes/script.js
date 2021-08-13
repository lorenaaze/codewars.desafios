function sumCubes(n){
  let soma = 0;
  for(i = 1; i<=n; i++) {
    soma += (i*i*i);
  }
  return soma
}

console.log(sumCubes(2));
console.log(sumCubes(3));