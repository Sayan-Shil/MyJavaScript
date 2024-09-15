// Similar to All programming Language -- but use the keyword "function"

function factorial(a){
    if(a==0 || a==1){
       return 1;                             // we can create any function
    }
   return a*factorial(a-1);
}

console.log(factorial(5))



let b= function factorial(a){
    if(a==0 || a==1){
       return 1;                             // we can create any function and change name like this
    }
   return a*factorial(a-1);
}

//let b = factorial;

console.log(b)



