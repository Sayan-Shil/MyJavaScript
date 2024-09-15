// Array of Javascript actually Hashset of Java , C++ or other programming language.... Or, Hashmap with index number and variable[index]

let bag = ["potato", "banana", "spinach", 1000, 500, 20, 5];       // Arrays can be collection of anything
console.log(bag)



//Array methods

//1  .Length
console.log(bag.length)               //return the number of elemants of the array 


//2  .toString
console.log(bag.toString())           // Converts array to string with connecting with ","

//3.  .join  
console.log(bag.join("-->"))          // Converts array to string with connecting with "-->"


///4.  .pop            
console.log(bag.pop())                // Remove last elemant like stack

//5.   .push
bag.push("tomato")                      // add elemants in the last
console.log(bag)


//6.  shift
bag.shift();                            // remove first elemant like queue
console.log(bag)


//7.  unshift
bag.unshift("chilli");                 // add elemants in the last
console.log(bag)


//8.  delete
delete bag[5]                          // delete from any index
console.log(bag)


//9.  spilce
bag.splice(2,3,"Orange","Apple")        // delete starts from 2 index , delete 3 items, add "orange" "apple" from 2 index
console.log(bag)


//10.  slice
//same like String as an Array also collection


// 11.  reverse
console.log(bag.reverse());





//More Array Operations - such as loop

//1.  for-each
bag.forEach(function(value, index) {         //Convenient for executing a function on each element in an array without worrying about managing the loop's control flow.
    console.log(index, value);
  })


//2.  Mapping
bag.map(function(value, index) {         //Convenient for executing a function on each element in an array without worrying about managing the loop's control flow.
    console.log(index, value);
  });


//3. filter
let money= [1,5,6,7,4,10]
console.log(money.filter(num => num >5));              //what to print and condition and filter


//4.  reduce
let nestedArrays = [[1, 2], [3, 4], [5]];

// Flatten the array
let flattenedArray = nestedArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []); // Initial value is an empty array

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]


//5. array.from

console.log(Array.from(bag))                     //create new array with all emenants in collection




