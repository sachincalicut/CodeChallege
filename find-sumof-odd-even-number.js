var numb = 20, EvenCount = 0, OddCount = 0;
    for (var i=1; i<=numb; i++){
        if(i % 2 === 0){
            EvenCount=EvenCount+i;
        }
        else{
            OddCount=OddCount+i;
        }
    }

    console.log("Sum of Even number is:" + EvenCount);
    console.log("Sum of Odd number is:" + OddCount);