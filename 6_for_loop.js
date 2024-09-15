// Loop  Statements can be executed through for loop , for in loop , for of , for each loop

for(let a=5; a<10; a++){
    console.log(a);                   // basic for loop known by all programmers
}






let arr = [10, 20, 30];
for (let value of arr) {              // for of loop to get all values from a collection ( Arrays, String , LinkedList)  
  console.log(value);
}
for (let value of "Happy") {          
    console.log(value); 
  }





  let student = {
    "Name" : "Sayan" ,
    "ID" : 61 ,
    "Department" : "CSE" ,                   
    "Year" : 1 ,
    "Semester" : 1 ,
    "SGPA" : 8.71 ,
    "Previous SGPA" : 8.71

}
  for (let key in student) {
    console.log(key, student[key]);         // for in loop to get all values from a Object 
  }





  let array = [10, 20, 30];
arr.forEach(function(value, index) {         //Convenient for executing a function on each element in an array without worrying about managing the loop's control flow.
  console.log(index, value);
});


