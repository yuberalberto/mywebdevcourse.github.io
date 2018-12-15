// Advanced Arrays
const array = [1,2,10,16];
//Arrays forEach method. 

const newArray = [];
const arrayOfIndex = [];
let arr = [];

const arrayFunc = array.forEach((currentValue,index,arg) => {
    newArray.push((currentValue*2));
    arrayOfIndex.push(index);
    arr = arg;
});

console.log("forEach",newArray);
console.log(arrayOfIndex);
console.log(arr);

// with forEach we have side effects and we have to put more lines of code to return values


//Array : map method
const mapArray = array.map(currentValue => currentValue*2);
const indexofmapArray = array.map(currentValue => array.indexOf(currentValue));
console.log("map",mapArray);
console.log("index",indexofmapArray);
// with map method we avoid side effects.

//Array : filter method
const filterArray = array.filter(currentValue => currentValue>5);
console.log("filter",filterArray);

//Array :reduce method.
const totalScore = array.reduce((total, currentValue) => currentValue+total, 0);
console.log("reduce",totalScore);
