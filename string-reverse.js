function reverse(y){
    if(y.length==1 || y.length == 0 ){
        return y;
    }
    return y.split('')[y.length - 1]+ reverse(y.slice(0, y.length-1));
}
console.log(reverse("Hello"));
