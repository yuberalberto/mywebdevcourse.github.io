// ES6 === ECMAScript 6 === JavaScript
//New ways of declaring variables: let + const

//When you declare a variable with var, you don't have block scope. with let+const this problem is solved.
//Use let intead of var and use const everytime you know something isn't going to change.

const player = "bobby";
let experience = 100;
var wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
    console.log("Inside block",wizardLevel);
}

console.log("Outside block", wizardLevel);

//template strings
const name = "Sally"
const age = 34;
const pet = "horse"

const greeting = `Hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have!`

//Arrow functions
function add(a, b){
    return a+b;
}

const add = (a, b) =>{ 
    return a+b
}