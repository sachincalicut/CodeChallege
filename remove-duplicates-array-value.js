// Remove duplicate array value in javascript?
 let arr = ["scale", "happy", "strength",
            "peace", "happy", "happy"];
// Example 1 - Using Filter
  
function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));
// Example 2 - Using  FoEach
 
    function removeDuplicates(arr) {
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    console.log(removeDuplicates(arr));
// Example 3 - Using Reduce

   function removeDuplicates(arr) {
        let unique = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        return unique;
    }
 
    console.log(removeDuplicates(arr));

// Example 4 - IndexOf
   function removeDuplicates(arr) {
        let unique = [];
        for(i=0; i < arr.length; i++){ 
            if(unique.indexOf(arr[i]) === -1) { 
                unique.push(arr[i]); 
            } 
        }
        return unique;
    }
 
    console.log(removeDuplicates(arr));
// Example 5 - setOf

function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
  console.log(removeDuplicates(arr));
