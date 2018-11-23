var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var li = document.createElement("li");
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function checkTask(i){
	li[i].classList.toggle("done");
}

function myFunction(event) { 
	// alert(event.target.id);
	this.classList.toggle("done");
}

function onMouseOver(){
	for(let i=0; i<li.length; i++){
		li[i].addEventListener("click", myFunction);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// ul.addEventListener("mouseover", onMouseOver);
