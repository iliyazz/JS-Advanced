function wordsToUppercase(input){
let array = input.match(/\w+/g);
let result = array.join(", ").toUpperCase();
console.log(result);
}

wordsToUppercase('Hi, how are you?');
wordsToUppercase('hello');