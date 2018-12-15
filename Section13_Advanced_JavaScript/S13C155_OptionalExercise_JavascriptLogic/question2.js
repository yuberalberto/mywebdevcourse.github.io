function findNumber(arr=[], num=0){
    let ans="";
    // debugger;
    for(let currentVal of arr){
        let complement = num-currentVal;
        for(let value of arr){
            if(value === complement){
                ans = `(${currentVal},${value})`
                return ans;
            }
        }
    }
    return "There is no numbers that match your request!"
}
findNumber([2,4,2,1,2,3],4);