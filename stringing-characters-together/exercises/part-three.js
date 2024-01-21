//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1).concat(language.slice(4,5)));

//2. Without using slice(), use method chaining to accomplish the same thing.
let initials = language.substring(0,1).concat(language.substring(4,5));
console.log("Initials::"+initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${initials}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.


//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

const words = notTitleCase.split(' ');
   for (let i = 0; i < words.length; i++) {
      const firstLetter = words[i].charAt(0).toUpperCase();
      words[i] = firstLetter + words[i].slice(1);
   }
   

console.log(words.join(' '));
