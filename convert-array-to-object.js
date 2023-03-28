// convert array value list to object using javascript?

// const arrLists = ['Apple', 'Banana', 'Mango', 'Grapes'];

// const Objt = {};

//  for (i=0; i<arrLists.length; i++){
//     Objt[i] = arrLists[i];
// }

//  console.log(Objt);

// // Example 2 using target and source

// const arrLists = ['Apple', 'Banana', 'Mango', 'Grapes'];

// const Objt = Object.assign({}, arrLists);

// console.log(Objt);

// Example 3 using spread operator
const arrLists = ['Apple', 'Banana', 'Mango', 'Grapes'];

const Objt = {...arrLists}

console.log(Objt)
