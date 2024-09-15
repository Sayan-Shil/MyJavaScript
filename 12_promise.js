/* Theory:

Concept Of Asyc - Async work is non-blocking , simulteneously excete while performing others code Example: fetching data, reading data , DB calls, cryptography , networking

The Promise object  represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. 


if pending   ---> wait for excecution
if fulfilled ---> use .then on return value and execute async action or return another value ---> use .then on return value and execute async action or return another value.....
if rejected ---> use .then on return value and execute async action or return another value / use error handling



*/

// Object Creation : 
const getState = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let data = false;
        if (data) {
            console.log('Fetching Student data.........');
            /* Getting an object from 4_object.js */
            let student = {
                "Name": "Sayan",
                "ID": 61,
                "Department": "CSE", // Suppose This is our data from server
                "Year": 1,
                "Semester": 1,
                "SGPA": 8.71,
                "Previous SGPA": 8.71
            };
            resolve(student); // Resolving the promise if data is true.
        } else {
            reject("There is an error while fetching data..."); // Rejecting the promise if data is false.
        }
    }, 2000);
});

//Catching Data

getState.then(function(obj){
    if(obj.SGPA > 8){
        console.log('Eligible for Scholarship'); 
    }                                                         // Interestingly, this will only execute only if resolving done
    else{
        console.log('Sorry, Study Hard !!');  
    }
    return obj.Semester;
})
.then(function(obj){
          console.log("You have pass Year-->" +obj);                                                       // again we can work with return value
})
.catch(function(obj){
    console.log(obj);
    
})



