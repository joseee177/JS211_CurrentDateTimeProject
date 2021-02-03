// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let myNumber = 17;

console.log(`this is my number turned into a string: ${myNumber.toString()}`);

// Write a JavaScript program to convert a string to the number.
 let myString = "25";
 console.log(`this is my string converted to a number: ${parseInt(myString)}`);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const famousCharacter = "yoda"
  const famousNumber = 3.14
  const famousJSThing = NaN
  const famousBoolean = false
  const famousArray = [2,3,4,5,]
  const famousPersonObject = {name:"john", age:34 }
  const famousJSValue = null
  const famousFunction = () =>{
    return false
  }
  console.log("famousCharacter is a type of: "+ typeof famousCharacter)
  console.log("famousNumber is a type of : " + typeof famousNumber)
  console.log("famousBoolean is a type of : "+ typeof famousBoolean)
  console.log("famousJSValue is a type of : "+ typeof famousJSValue)
  console.log("famousJSThing is a type of : "+ typeof famousJSThing)
  console.log("famousArray is a type of : "+ typeof famousArray)
  console.log("famousPersoneObject is a type of : "+ typeof famousPersonObject)
  console.log("famousFunction is atype of : " + typeof famousFunction)

  
// Write a JavaScript program that adds 2 numbers together.
let addTwoNumbers = (a,b)=>{
  return a+b 
};

console.log(addTwoNumbers(5,5));
// Write a JavaScript program that runs only when 2 things are true.

let bothTrue = (arg1, arg2)=>{
  if(arg1 && arg2){
    return "both are true"
  };
};
console.log(bothTrue(5,5));
// Write a JavaScript program that runs when 1 of 2 things are true.
let oneTrue = (arg1, arg2)=>{
  if(arg1 || arg2){
    return "one is true";
  }; 
  };

  console.log(oneTrue(5,NaN));

// Write a JavaScript program that runs when both things are not true.  
let noneTrue = (arg1, arg2)=>{
  if(!arg1 && !arg2){
    return "neither are true"
  } 
}
console.log(noneTrue(false, false));
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
