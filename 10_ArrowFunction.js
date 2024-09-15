// Arrow Function is nothing just new version of parameter instantiation than tradition objectfor

let numbers = [1, 2, 3, 4, 5];

// Using forEach with an arrow function
numbers.forEach(number => {
    console.log(number * 2);
});

//Equivalent Normal Function
numbers.forEach(function(number) {
    console.log(number * 2);
  });
  

  // function(number)              <---->     number=>
    //function greet()  {}         <---->      const greet = () => {} 