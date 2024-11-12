const arr = [1,1,1,2,2,3,4,5,5,5,5];
const sortArr = HighestRept(arr);
console.log(sortArr);


function HighestRept(arr){
    const RepeatFrequency = {};
    // Count Arrays 
    arr.forEach((element) => {
        RepeatFrequency[element] = (RepeatFrequency[element] || 0) +1;
        
        })
        return arr.sort((a,b) => RepeatFrequency[b] - RepeatFrequency[a]);
}
