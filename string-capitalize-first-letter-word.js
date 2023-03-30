const capitalized = function (sentance){
    let str = sentance.split(" ");
    for(let i = 0; i < str.length; i++){
        console.log(str[i][0].toUpperCase() + str[i].substring(1));
    }

    return str.join(" ");
}


console.log(capitalized("i love india"));
console.log(capitalized("hardwork is not easy"));
