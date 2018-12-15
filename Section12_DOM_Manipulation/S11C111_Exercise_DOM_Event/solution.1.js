var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list1 = document.querySelector("ul");
var items_list1 = list1.querySelectorAll("li");

function createListItem(){
    if(input.value != ""){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list1.appendChild(li);
        items_list1 = list1.querySelectorAll("li");
        input.value = "";
        refresh();
    }
}

function keypressed(event){
    if(input.value != "" && event.keyCode === 13){
        createListItem();
    }
}

function refresh(){
    for(let i=0; i<items_list1.length; i++){
        items_list1[i].addEventListener("click", toggleDone);
        function toggleDone() { 
            items_list1[i].classList.toggle("done");
        }
    }
}

button.addEventListener("click", createListItem);
input.addEventListener("keypress", keypressed);
refresh();
