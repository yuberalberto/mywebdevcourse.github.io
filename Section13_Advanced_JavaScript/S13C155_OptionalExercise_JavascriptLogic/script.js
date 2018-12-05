/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. For example 
answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
should return [[1,2], ["2", "3"]] */

//Test data
const a = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const b = [1,"2","3",2];

//This function takes an array and order it and then organizes the array depending on if it contains numbers or strings
const orderAndFilter = inputArr =>{
    const outputArr=[];
    outputArr.push(inputArr.sort((a, b)=> (a-b)).filter(element=> typeof element==="number"));
    outputArr.push(inputArr.sort((a, b)=>(a-b)).filter(element=> typeof element==="string"));
    // console.log(outputArr);
    return outputArr;
}

//This function takes an array as parameter and returns the asked solution (including the bonus question).
const organized = inputArr =>{
    let  orderedArr = orderAndFilter(inputArr);
    let outputArr=[];
    let auxArray=[];
    for(let element of orderedArr){
        let aux1=[];
        for(let i=0; i<element.length; i++){
            let aux2=[];
            aux2 = [element[i]];
            // debugger;
            while(element[i+1]===element[i]){
                aux2.push(element[i]);
                i++;
            }
            if(aux2.length===1){
                aux1.push(aux2[0]);
            }
            else{
                aux1.push(aux2);
            }
        } 
        auxArray.push(aux1)
    }
    outputArr = auxArray.filter(element => element.length>0);
    
    if(outputArr.length===1){
        return outputArr[0];
    }
    else return outputArr;
}

console.log('Array a', organized(a));
console.log('Array b',organized(b));