var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListItem(){
    if(input.value != ""){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
}

function keypressed(event){
    if(input.value != "" && event.keyCode === 13){
        createListItem();
    }
}

button.addEventListener("click", createListItem);
input.addEventListener("keypress", keypressed);