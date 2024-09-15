// There is also Object datatype             

let student = {
    "Name" : "Sayan" ,
    "ID" : 61 ,
    "Department" : "CSE" ,                   //Data Entry like hashmaps in JavaScript Objects , there is a key and a value
    "Year" : 1 ,
    "Semester" : 1 ,
    "SGPA" : 8.71 ,
    "Previous SGPA" : 8.71

}

console.log(student)                         //Print All Key-Pair Values     Pair = obj[key]

console.log(student.Name) 
console.log(student.ID)                      // Accessing Separately
console.log(student.Department) 
console.log(student.Year) 
console.log(student.Semester) 
console.log(student.SGPA) 
console.log(student["Previous SGPA"]) 

console.log("After Upgradation.....")

student.Semester = 3;                        // Direct Updatation of Object 
student.SGPA = 8.85;
student.Year = 2;
student.CGPA = (8.85+8.71)/2;               // Direct Addition of Key-Value Pair

console.log(student)  



