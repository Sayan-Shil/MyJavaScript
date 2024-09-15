// Strings are collection of characters and have many operations useful for programming

let name = "Sayan Shil";
console.log(name);
console.log(typeof name)

// Strings can be wriiten under " or `` 

let greet = `Sayan said,"I will not play" `;      //   `` easily handle "" inside sentence
console.log(greet)

//Some string operation ---

//1
console.log(name.length)               //Output- 10  { S,a,y,a,n, , S,h,i,l}     // .length method


//2
for ( let character of name){
    console.log(character)            // String is a collection of characters , so for-of loop available for string
}


//3
console.log(name.toUpperCase());       // Case change
console.log(name.toLowerCase());


//4
console.log(name.slice(2));            // .slice(n)  helps to print from n index to last of the String
console.log(name.slice(2,9));          // .slice(m,n)  helps to print from m index to n index


//5
console.log(name.replace("Sayan", "Cyan"));   //.replace to replace word


//6
let b= "               Sayan          "
console.log(b.trim());                          // .trim helps to trim all extraspace after or before a sentence but not in the mid

