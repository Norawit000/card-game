let Animal = [
    "dog",
    "cat",
    "giraffe",
    "elephant",
    "crocodile",
    "arthropods",
    "molluscs",
    "ayeaye",
    "hippopotamus",
    "hummingbird",
    "duckling",
    "puggle",
    "joey"
   
  ];
  
  function randomWord() {
    return Animal[
      Math.floor(Math.random() * Animal.length)
    ];
  }
  
  export { randomWord };