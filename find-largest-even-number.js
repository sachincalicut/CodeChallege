const maxEven = (arr) => {
    arr.sort((x, y) => y - x);

    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            return arr[i];
        }
    }
}
const a = [62, 10, 250, 22];
console.log(maxEven(a));