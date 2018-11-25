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

function pairs(a=[],b=0){
    
    for(let i=0; i<a.length; i++){
        for(let j=i+1; j<a.length; j++){
            if(a[i]+a[j]===b){
                return true;
            }
        }
    }
    return false;
}