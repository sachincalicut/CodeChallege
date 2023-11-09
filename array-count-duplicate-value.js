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
