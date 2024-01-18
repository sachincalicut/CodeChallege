// Remove Duplicate Object
var arr = [{name: 'abc', age:21 }, {name: 'abc', age:21 },{name: 'abcd', age:20 }];
var check = {};
var res = [];
for(let i = 0; i<arr.length; i++){
	 //console.log(arr[i].name);	
	if(!check[arr[i].name]){
		check[arr[i].name] = true;
		res.push(arr[i]);
	}

}
console.log(res);
