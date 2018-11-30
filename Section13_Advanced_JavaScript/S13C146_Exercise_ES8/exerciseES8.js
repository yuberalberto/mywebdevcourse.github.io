// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9);
let rabbit = '🐇'.padStart(9);


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


/* #2)  What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
        Read about what the second parameter does in padEnd and padStart
        Ans: 
        The trim method remove whitespace from both sides of a string.
        The second argument in padEnd/padStart fills up  the white space with the value of the argument.
*/
turtle = turtle.trim().padEnd(9, '=');


// #3)  Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// to this: 'my name is Rudolf the raindeer'
let text = Object.entries(obj).reduce((total, currentVal) => total+`${currentVal[0]} ${currentVal[1]} `,"");
text = text.trim();//Output: "my name is Rudolf the raindeer"

//The above was my solution but there is a shorter solution:
let textOptimal = Object.entries(obj).map(currentVal => currentVal.join(" ")).join(" ");



