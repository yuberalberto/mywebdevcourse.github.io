//Advanced Functions


/* function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc(); */

//The below script is converted to the way how we should write JS in 2018.
const first = (sayhi) =>{
    let greet = sayhi;
    const second = () =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();
//Study about Closures, Currying, Compose

//As a web developer we need to Avoid Side effects and aim for functional purity