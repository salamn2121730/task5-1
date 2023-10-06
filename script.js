
function addNumber(val){
   
    const res= document.querySelector('.result').value +=val;
console.log(val)
}
let x = 0;
let y = 0;

function equal(){
   
 x = document.querySelector('.result').value;
 y =eval(x);
console.log(y);
const resu= document.querySelector('.result').value ="";
const res= document.querySelector('.result').value +=y;


}

function clr(){
 const resu= document.querySelector('.result').value ="";
}

function cancel(){
    let resu = document.querySelector('.result').value;
    resu = resu.substring(0, resu.length - 1);
    document.querySelector('.result').value = resu;
}