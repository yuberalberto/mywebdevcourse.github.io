// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const listForEach = [];
const users = array.forEach(currentValue => {
  listForEach.push(currentValue.username+"!");
});
console.log("forEach",listForEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const listMap = array.map(currentValue => currentValue.username+"?");
console.log("map", listMap);

//Filter the array to only include users who are on team: red
const listFilter = array.filter(currentValue => currentValue.team=="red").map(currentValue => currentValue.username);
console.log("filter", listFilter);

//Find out the total score of all users using reduce
const totalScore = array.reduce((total, currentValue) => currentValue.score+total, 0);
console.log("reduce", totalScore);

// (1), what is the value of i?
//i = [0, 1, 2, 3, 4, 5]


//IN DEBT : BELOW

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newList = array.map(user => {
  user.map(data => data+"!");
})