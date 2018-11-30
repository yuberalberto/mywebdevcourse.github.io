//////////////////MEASURING EXECUTION TIME OF A FUNCTION IN JAVASCRIPT///////////////////////////////
// #3)  Get the below object to go from:
const perforMean = (result) =>{
    const runs=1000000;
    let totalTime=0, mean;
    for(let i=0; i<runs; i++){
      var t0 = performance.now();
      result();
      var t1 = performance.now();
      totalTime += (t1-t0);
    }
    mean = totalTime/runs;
    console.log(`It took ${ (mean*1000).toFixed(3)} microseconds to generate "${timeProbe1.name}"`);
  }
  


const timeProbe1 = () =>{
    let obj = {
      my: 'name',
      is: 'Rudolf',
      the: 'raindeer'
    }
    // to this: 'my name is Rudolf the raindeer'
    let text = Object.entries(obj).reduce((total, currentVal) => total+=`${currentVal[0]} ${currentVal[1]} `,"");
    return text.trim();//Output: "my name is Rudolf the raindeer"
    }
    
    const timeProbe2 = () =>{
      let obj = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
      }
    let textOptimal = Object.entries(obj).map(currentVal => currentVal.join(" ")).join(" ");
    return textOptimal;
    }
    
