// Conditional Statements can be executed through if-else statements

let student = {
    "Name" : "Sayan" ,
    "ID" : 61 ,
    "Department" : "CSE" ,                   //Making an object
    "Year" : 1 ,
    "Semester" : 1 ,
    "SGPA" : 8.71 ,
    "Previous SGPA" : 8.71

}

if(student.SGPA>8.5){
    student["ScholarShip Availability"] = "Eligible";
}
else{                                                                      //Changing Object by if-else
    student["ScholarShip Availability"] = " Not Eligible";
}

console.log(student)

student["If Senior"] = student.Year >1 ? "true" : "false"    ;            //Turnory conditional operation to execute similar

console.log(student)
