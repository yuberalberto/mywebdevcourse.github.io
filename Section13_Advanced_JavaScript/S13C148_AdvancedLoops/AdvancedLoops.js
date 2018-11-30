/*Advanced Loops

In Javascript we got normal loops: 
for
while
do-while
forEach (New in ECMAScript 5)

There is also two others ways that we can loop in Javascript.:

1st: for-of => This is used for looping over iterable elements (Arrays and Strings)

2nd: for-in => This is used for looping over enumerable elements (Objects)*/

const basket = ["Oranges", "Apples", "Grapes"];

const basketDetail = {
    Orange: 5,
    Apple: 10,
    Grapes: 1000
}

for(let items of basket){
    console.log('for-of:',items);
}


for(let item in basketDetail){
    console.log('for-in =>', item);
}