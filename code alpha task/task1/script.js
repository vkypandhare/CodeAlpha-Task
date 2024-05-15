const btn = document.getElementById("btn");
const bd = document.getElementById("bd");
const cd = document.getElementById("cd");
const th = document.getElementById("texthere");


let bdt;
let cdt;

bd.addEventListener("change",function(e){
    console.log(e.target.value+ " birthdate")
    bdt=e.target.value
})
cd.addEventListener("change",function(e){
    console.log(e.target.value+" current date")
    cdt = e.target.value
})

function convert(m){
 return m<0? 12+m:m;
}
btn.addEventListener('click',function(){
    console.log(cdt+bdt )

    let num1 =cdt[0] + cdt[1]+cdt[2] +cdt[3];
    let num2 = bdt[0]+bdt[1]+bdt[2]+bdt[3];
    
// month
let mcdt = cdt[5]+cdt[6];
let mbdt = bdt[5]+bdt[6];
  console.log(mcdt-mbdt ,  "for month");
  console.log(num1-num2);
    const setvalue = convert(mcdt-mbdt)
  th.innerHTML =`Age: Year ${(num1-num2)} and Month ${setvalue}`
})


