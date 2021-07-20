function reverseWords(str){
    let reversed = str.split(" ").reverse().join(" ");
    console.log(reversed); 
  }
  
  reverseWords("hello world!");
  reverseWords("I have been learning JavaScript");