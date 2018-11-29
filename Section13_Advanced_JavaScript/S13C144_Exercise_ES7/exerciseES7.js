// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('Jhon'); // output: false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah', 'johnny'];
const result = dragons.filter(element => element.includes('John'));


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = x => x**100;

// #4) Using your function from #3, put in the paramter 10000. What is the result? 
console.log(pow100(10000)); //output: infinity

// Research for yourself why you get this result
//Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.