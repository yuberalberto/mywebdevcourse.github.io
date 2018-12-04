const a = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function organize(arr=[]){
    const newArr = arr.sort(function(a, b){return a - b});
    let myArr = [];
    for(let i=0; i<newArr.length; i++){
        aux=[newArr[i]];
        while(newArr[i+1]===newArr[i]){
            aux.push(newArr[i]);
            i++;
        }
        
        if(aux.length===1){
            myArr.push(aux[0])
        }
        else{
            myArr.push(aux);
        }
    }

    return myArr;
}

console.log(organize(a));