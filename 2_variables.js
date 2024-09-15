// Introduction to 3 Variables --> Let,Const & Var;

//Let- Let is a block level variable will not change the actual value of variable

let a= 23;
{
   let a=24;
}
console.log(a); //23


//Var- Let is a global level variable , also a Global type variable , will change the actual value of variable

var b= 23;
{
   var b=24;
}
console.log(b); //24


//Const- Const is a constant that will not change its value

const c= 3;
c=c+1;          //TypeError: Assignment to constant variable.at Object.<anonymous> 