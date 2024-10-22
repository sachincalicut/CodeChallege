const reverse = (s) => {
  let result = ''
  for(let x = s.length-1; x >= 0; x--) {
    result += s[x]
  }
  return result
}

console.log(reverse('Have a Great Day'))
