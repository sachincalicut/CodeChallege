function longest(str){
	var arrayOne = str.match(/\w[a-z]{0,}/gi);
  var result = arrayOne[0];
  	for(var x = 1; x < arrayOne.length; x++){
    		if(result.length < arrayOne[x].length){
        		result = arrayOne[x];
        }
    }
    return result;
}
console.log(longest("Hi Goodmorning"));
