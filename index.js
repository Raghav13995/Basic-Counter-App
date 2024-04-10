let counterVal=document.getElementById('counter');
const increament=()=>{
    let val=parseInt(counterVal.innerText);
    val=val+1;
    counterVal.innerText=val;
}

const decreament=()=>{
    let val=parseInt(counterVal.innerText);
    val=val-1;
    counterVal.innerText=val;
}