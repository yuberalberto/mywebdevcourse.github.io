const a = [1,2,4,591,"2",392,391,"a","3",2,"a","a",5,10,2,1,1,1,20,20,1,1,391];

function organize(arr=[]){
    const newArr=[];
    newArr[0] = arr.sort(function(a, b){return a - b}).filter(value=> typeof value==="number");
    newArr[1] = arr.sort(function(a, b){return a - b}).filter(value=> typeof value==="string");
    console.log('newArr', newArr);

    let myArr = [];

    for(let j=0; j<newArr.length; j++){
        // debugger;
        for(let i=0; i<newArr[j].length; i++){
            let aux=[];
            aux = [newArr[j][i]];
            while(newArr[j][i+1]===newArr[j][i]){
                aux.push(newArr[j][i]);
                i++;
            }
            if(aux.length===1){
                myArr.push(aux[0])
            }
            else{
                myArr.push(aux);
            }
        }

    }

    return myArr;
}

console.log(organize(a));