// 2. Create an array which contains the object you have made above and name the array "database"
var database = [
	{
		username: "Beto",
		password: "supersecret",
		lastpost: "I wil do it!"
	},
	{
		username: "Sally",
		password: "123",
		lastpost: "JavaScript is sooooo cool!"
	},
	{
		username: "Ingrid",
		password: "777",
		lastpost: "Happy in France"
	},
	{
		username: "Bobby",
		password: "imbob",
		lastpost: "So tired from all that learning!"
	},
	{
		username: "Mitch",
		password: "abc",
		lastpost: "Javascript is preeetyy cool!"
	}
];

/*	3. Creates a function called "newsfeed" which contains an array called "timeLine" in which 
	we store the properties "username" and "timeline" for all users except the current signed-in user. */
function newsfeed(userTimeLine=""){
	timeLine = [];
	for(let i=0; i<database.length; i++){
		if(userTimeLine != database[i].username){
			timeLine[i] ={
				user: database[i].username, 
				comment: database[i].lastpost
			}
		}
	}
	return timeLine;
}

function signIn(username="", password=""){
	let signIn = false;

	for(let i=0; i<database.length; i++){
		// debugger;
		if(username === database[i].username && password === database[i].password){
			console.log(username+" has signed in!");
			console.log(newsfeed(username));
			signIn=true;
		}
	}
	if(signIn === false){
		alert("Sorry, wrong username or password");
	}
}

function facebook2(){

var userNamePromt = prompt("Enter your username!");
var passwordPromt = prompt("Enter you password!");

signIn(userNamePromt, passwordPromt);
}