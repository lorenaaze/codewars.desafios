function find_average(array) {
    let soma = 0;
    array.forEach((n) => soma+=n);
    return soma/array.length;
}

console.log(find_average([5, 5, 10, 10, 30]));
console.log(find_average([8, 13, 20, 15]));
