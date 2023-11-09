// How to count duplicate value in an array in javascript?

// output
// prints {"apple": 2, "grape": 1, "orange": 3, "pinapple": 1}

var arr = ['apple', 'apple', 'orange', 'orange', 'orange', 'grape', 'pinapple'];
var map = arr.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

// map is an associative array mapping the elements to their frequency:
console.log(map);

// Output
// prints {1:2, 2:3, 3:1, 4:1, 5:1}

const arr = [1,2,2,2,4,3,5,1];

const res = arr.reduce((x, y) => {
	if(x[y]){
  		x[y] += 1;
  }
  else{
  	x[y] = 1;
  }
  return x;
}, {})

console.log(res);
