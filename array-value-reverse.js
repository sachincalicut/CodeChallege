// Reverse without Predefined method: Output 43225
var arr = [5, 2, 2, 3, 4];
var size = arr.length;
for(var i = size-1; i>=0; i--){
    console.log(`Element$(i+1) is ${arr[i]}`);
}
// Reverse String without Predefined method: Output !zimargorP ot emocleW
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('Welcome to Programiz!');