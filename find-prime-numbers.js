
// Example 1
// find Prime Number 2 to 20 
for (var limit = 2; limit <= 20; limit++){
    var PN = true;
    for (var i = 2; i <= limit; i++){
      //  4%2 == 0 true
      //  2 != 4 true
        if(limit%i == 0 && i != limit){
            PN = false;
        }
    }
    if (PN == true ){
        console.log("Prime Number is:"+ limit );
    }
}
// Example 2
// Finding prime numbers in the given range 1 to 100
 
function chkPrime(n)
{
    if(n == 1 || n == 0) return false;
    

    for(var i = 2; i < n; i++)
    {
    
    if(n % i == 0) return false;
    }
    
    return true;
}

// Driver code
// Prime Numbers between 1 and 100 
var num = 100;
// check for every number from 1 to num
for(var i = 1; i <= num; i++)
{
   // check if current number is prime
   if(chkPrime(i)) {
    console.log( i );
   }
}
