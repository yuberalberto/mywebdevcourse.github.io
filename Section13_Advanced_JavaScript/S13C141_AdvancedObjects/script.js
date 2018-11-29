//Reference type.
var object1 = {value: 10}
var object2 = object1
var object3 = {value: 10}

object1 === object2;//true
object1 === object3;//false

//This type is defined because objects are created by the programmer, 
//unlike the primitive types that are defined by the javascript's developers (ECMAScript TEAM). 


//context
// context is commonly confused with scope
//context tell you where we are within the object

//instantiation
class Player{

    constructor(name, type){
        this.name = name;
        this.type = type; 
    }
    intruduce(){
        return `Hi my name is ${this.name} and I am a ${this.type}`;
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

