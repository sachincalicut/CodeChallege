const nums = [1, 2, 3, 4, 5, 6, 7];
const a = 3;
// unshift Method
 function arrayRotate(arr, numberOfShifts){
     for(let b=0; b<numberOfShifts; b++){
         arr.unshift(arr.pop());
        console.log(`stop $(b + 1);`, arr );
     }
 }
// splice Method
function arrayRotate(arr, numberOfShifts){
    let deletedArray = arr.splice(arr.length-numberOfShifts);
    for(let b=0; b < deletedArray.length; b++){
        arr.splice(b, 0, deletedArray[b]);// splice 0 to 5 
        console.log(`stop $(b + 1);`, arr );
    }
}
console.log("Final Results:", arrayRotate(nums, a));