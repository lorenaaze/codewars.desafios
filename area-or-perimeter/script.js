const areaOrPerimeter = function(l, w) {
    if (l == w) {
        return l * w;
    } else {
        return (l * 2) + (w * 2); 
    }
  };

console.log(areaOrPerimeter(10,5));
console.log(areaOrPerimeter(20,20));