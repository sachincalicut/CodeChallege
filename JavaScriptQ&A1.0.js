// Paltech Interview Question in Javascript
let a1= [10, 20, 30];
let a2= a1;
let a3 = [...a1];
a1[0] = 50;
a2[2] = 80;
a3[4] = 100;
// print console
console.log(a1);
console.log(a2);
console.log(a3);
