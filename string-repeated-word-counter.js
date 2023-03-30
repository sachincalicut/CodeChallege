const str = 'hello world there is new world hello earth there is new world';
const chars = {};
const arr = str.split (' ');

//console.log(arr);

for (let word of arr){
    if(!chars [word]){
        chars[word] = 1;
    }
    else{
        chars [word] ++;
    }
}
console.log(chars);