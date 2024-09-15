// DOM _ Document Object Model

// ID, Class

let boxes = document.getElementsByClassName("box");          // we can assign anything in Javascript
console.log(boxes);  //HTML COLLECTIONS                     // we can get HTML Collection based on a particular class name by .getElementsByClasssName("<className>")
boxes[0].style.backgroundColor = "green";                   // A collection cannot be styledinstead of the elemants traversed can be styled



let a = document.getElementById("special");                  // we can get HTML Collection based on a particular class name by .getElementById("#ID")
a.style.backgroundColor = "red" 


document.querySelector(".box").style.backgroundColor= "cyan"    // select first matched box class


let arr= document.querySelectorAll(".box")                      // return a collection with all box class
console.log(arr)

for(let a=0 ; a<arr.length;  a++){
  if(a%3==2)  {
    arr[a].style.backgroundColor="yellow"
  }
}

console.log(document.getElementsByTagName("div"))                // return a collection with all div type elemants


for(let a=0 ; a<arr.length;  a++){
    if(arr[a].matches("#special")){
        arr[a].style.backgroundColor= "blue;"
    }
  }








// .innerText                          --> return the inside Text of am element
// .innerHTMl                          ---> return the inside HTML Code of an element
// .innerText.includes("<text>")       ---> To check if <text> include or not
// .innerText.style.(style)            ---> To style a text
// .innerHTML.contains("<Node>")       ---> To check if <noide> contains

// .tagName                            ---> return which HTML Tag it is
// .nodeName                           ---> return which node it is

// .setAttribute('tag', <name>)         ---> create/update 'tag' with <name>

//append or  .preprend           before ()    .after()     .replaceWith

// const div = document.getElementById('myDiv');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph';
// div.replaceWith(newParagraph);

//div.insertAdjacentHTML('beforebegin', '<p>Inserted before the div</p>');


// Suppose - <div id="myDiv">This is a div</div> and const div = document.querySelect("#myDiv");

// div.remove()                   --->remove the div
// div.classList                  ---> return all className 
// div.className                   ---> return classname can be changed by assign
//div.classList.add(<class name>)  ---> add class names 
//div.classList.remove(<class name>)  ---> remove class names 
//div.classList.toggle(<class name>)  ---> add class names if not present , remove if present
