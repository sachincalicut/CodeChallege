   function reverse(string)
    {
    let arr = [];
    for(let char of string) {
      arr.unshift(char);
    }
    let rev = arr.join('')
    return rev
    }
    
    let result = reverse("hello")
    console.log(result)
