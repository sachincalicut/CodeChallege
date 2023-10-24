// Remove duplicate array value in javascript?
 let arr = ["scale", "happy", "strength",
            "peace", "happy", "happy"];
 
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));
