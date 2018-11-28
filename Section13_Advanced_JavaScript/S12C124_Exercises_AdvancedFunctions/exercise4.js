//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a,b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10) //10 => y=> 10+y
addToTen(3) // 10 => 3 => 10+3
//this returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5) // (5) => (b) => 5+b
add5(12) // (12) => 5+12
//returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1; 
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// a = 10 , f = add1 and g = add5 then g(a)=g(10) =15 and f(g(10)) = f(15) = 16
//compose returns 16


//What are the two elements of a pure function?
//1st is determinism: for a given input always get the same output
//2nd is no side effects : It does not depend on any state, or data, change during a program’s execution. 
//                          It must only depend on its input elements.