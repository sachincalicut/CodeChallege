var source = [{ "a": 3 }, { "b": 2 }, { "c": 1 },{"k":12}];
var target = ["a", "b", "c", "d"];

var tempSet = new Set(target);
var result = source.filter(o => tempSet.has(Object.keys(o)[0]));

console.log(result);
