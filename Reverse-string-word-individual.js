var str = "Welcome to Kerala";
// emocleW ot alareK"
function reverseString(myStr){
    var strlen = myStr.length, result = "", reverseStr = "", reverseStrArr = [];
  for(var i = strlen-1; i >= 0; i--){
    reverseStr +=  myStr[i];
  }

    for(var j = 0; j < strlen; j++){
    if(reverseStr[j] == " "){
      reverseStrArr.push(result);
      result = "";
    }else{
      result += reverseStr[j];
      if(j + 1 == strlen){
        reverseStrArr.push(result);
        result = "";
      }
    }
  }

  for(var k=reverseStrArr.length - 1; k >= 0; k--){
    result += reverseStrArr[k] + " "
  }
  console.log(result);
}
reverseString(str);
