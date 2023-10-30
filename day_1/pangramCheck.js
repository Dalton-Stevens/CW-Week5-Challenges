const isPangram = (str) => {
  return (str.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
