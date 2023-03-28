// For loop with timevent 1 to 10 number counter?
for (var i=0;i<=10;i++) {
    (function(ind) {
        setTimeout(function(){console.log(ind);}, 1000 * ind);
    })(i);
 }