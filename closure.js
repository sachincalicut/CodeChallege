//A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. 
//Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.



// javascript closure example
const makeCounter = () => {

let count = 0; 
    return () => {
       return count++;
    }

}
const  counter = makeCounter();
const counter2 = makeCounter();

console.log(counter()); 
console.log(counter2()); 

