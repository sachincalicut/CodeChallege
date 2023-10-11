//Example 1: Reverse without Predefined method: Output 123456
let array = [6,5,4,3,2,1]
let reverseArray = []
for(let i = array.length -1; i>=0; i--){
	reverseArray.push(array[i])
}
console.log(reverseArray);
//Example 2: Using map() and unshift Method: Output 123456
let array = [6,5,4,3,2,1]
 let reverseArray = []
    arry.map((value) =>
	reverseArray.unshift(value)
 )
console.log(reverseArray);
//Example 3: Reverse without Predefined method: Output 43225
var arr = [5, 2, 2, 3, 4];
var size = arr.length;
for(var i = size-1; i>=0; i--){
    console.log(`Element$(i+1) is ${arr[i]}`);
}
//Example 4: Reverse String without Predefined method: Output 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('Welcome to Programiz!');
