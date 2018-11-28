var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

//This function generates random hex colors
function colorRandom(){
    var color="#";
    for(let i=0; i<3; i++){
        let num = Math.floor((Math.random()*255)+1).toString(16);
        if(num.length<2){
            num = "0"+num;
        }
        color = color+num;
    }
    return color;
}

//This function assigns the pair of hex colors to the background
function setRandomBackground(){
    color1.value = colorRandom();
    color2.value = colorRandom();
    setGradient();
    // console.log(colorRandom());
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomBackground);