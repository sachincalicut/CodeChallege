// find missing number or numbers in a array in javascript?
function miss(arr){
    let missArray = [];
    // convert array through the arguments
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    // index of return its position not there in
    for (let i = minNum; i < maxNum; i++){
        if (arr.indexOf(i) < 0){
            missArray.push(i);
        }
    }
    return missArray;
}
    console.log(miss([1, 2, 5, 6]));
    console.log(miss([-3, -2, 2, 3, 6]));
    console.log(miss([1,2]));
    console.log(miss([]));


