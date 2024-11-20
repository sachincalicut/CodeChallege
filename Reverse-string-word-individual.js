function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Reverse each word in the array
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a string
  return reversedWords.join(' ');
}

const originalString = "Hello World";
const reversedString = reverseWords(originalString);

console.log(reversedString); // Output: "olleH dlroW"
