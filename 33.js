// console.log("This is it");

// let name0 = "Maddy";
// let name1 = "Maddy1";
// let name2 = "Maddy2";
// let name3 = "Maddy3"; 
// console.log(name0 + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

// As we can see in the above example, we are writing a particular set of codes every time. To avoid this JavaScript functions come into action. We can write the above code with the help of JavaScript functions

// function greet(name){
//     console.log(name +" is a good boy");
// }
// let name0="Maddy"
// let name1="Maddy1"
// let name2="Maddy2"
// let name3="Maddy3"
// greet(name0);
// greet(name1);
// greet(name2);
// greet(name3);



function greet(name, greetText){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
let name0 = "Maddy";
let name1 = "Maddy1";
let name2 = "Maddy2";
let name3 = "Maddy3";
let greetText = "Good Morning";
greet(name0, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);


// We also use some functions to make it return a particular value. Return value means it gives you some output in return
let returnVal=greet(name3,greetText);
console.log(returnVal);


function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This will never execute (unreachable code)
    // console.log("Function is returned");
}
let returnVal1 = sum(1,2,3);
console.log(returnVal1);

