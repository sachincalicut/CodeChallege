function factorial(n) {
    if (n === 0 || n === 1) {
        return BigInt(1);
    }
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

// Calculate factorial of 100
const factorial100 = factorial(100);
console.log(Factorial of 100 is ${factorial100});

// Calculate factorial of 50
const factorial50 = factorial(50);
console.log(Factorial of 50 is ${factorial50});
