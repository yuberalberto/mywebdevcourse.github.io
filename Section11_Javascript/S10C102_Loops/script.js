var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//"For" loop in JavaScript
var clean = todos.length;
for(var i=0; i<=clean; i++){
    // todos.pop();
    //console.log(todos);
}

//"While" loop in JavaScript
var counterOne = 0;
while(counterOne < 10) {
    // console.log(counterOne);
    counterOne++;
}

//"Do" loop in JavaScript
var counterTwo = 10;
do{
    // console.log(counterTwo);
    counterTwo--;
}while(counterTwo>20);

//"ForEach" loop in JavaScript: this method takes as a parameter a function and returns the elements of the array
todos.forEach(function(cualquiercosa, i){
    console.log(i+": "+cualquiercosa);
});