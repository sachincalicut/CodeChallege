//A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. 
//Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.



// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value
