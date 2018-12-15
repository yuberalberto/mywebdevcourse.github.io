let button = document.getElementById("run");

//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
function findPairs(listNum=[], k){
    for(let i=0; i<listNum.length; i++){
        for(let j=i+1; j<listNum.length; j++){
            var prob = listNum[i]+listNum[j];
            if(prob === k) return true;
        }

    }
    return false;
}

//Get the data from the user
function run(){
    let myStr = prompt("Please enter the array\'s numbers separated by comma");;
    let myArray = myStr.split(",").map(Number);//Given an string, this is split into chars and the is mapped as an array of numbers. 
    let myK = Number(prompt('Please enter the number \"k"'));

    alert(findPairs(myArray, myK));
}

button.addEventListener("click", run);