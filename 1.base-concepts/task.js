"use strict";

// base-concepts__1

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  let i1,
      i2;

  if (d > 0){
    i1 = (-b + Math.sqrt(d) ) / (2 * a);
    i2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(i1, i2);
  } else if (d === 0) {
    i1 = -b / (2 * a);
    arr = [i1];
  
  return arr;
}
}


console.log(solveEquation());

// base-concepts__2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 let p, s, n, mp, SUM;

 n = countMonths;
 p = +(percent / 100 / 12);

 s = +(amount - contribution);
 mp = +(s * (p + (p / (((1 + p) ** n) - 1))));

 SUM = +((mp * n).toFixed(2));
 return SUM;
}
  