// Q&A Interview Question in Javascript
let a1= [10, 20, 30];
let a2= a1;
let a3 = [...a1];
a1[0] = 50;
a2[2] = 80;
a3[4] = 100;
// print console
console.log(a1);
console.log(a2);
console.log(a3);
//output 
[50, 20, 80]
[50, 20, 80]
[10, 20, 30, undefined, 100]
// JavaScript SetTimeout
for(var i = 0; i <= 5; i++){
	setTimeout(() =>{
  	console.log(i);
    
  }, i * 1000);
}
// output 
6
6
6
6
6
console.log("1");
//lower priority set timeout function will pushed to macro que..
setTimeout(function(){
	console.log("2");
}, 0);
//separate function will be created for test...
function test(){
	console.log("3");
}
test();
//high priority Promise function will pushed to micro que...
Promise.resolve().then(function(){
	console.log("4");
});
console.log("5");
//output 
"1"
"3"
"5"
"4"
"2"


