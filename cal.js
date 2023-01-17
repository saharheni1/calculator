
let x =document.querySelector("#x")
let y =document.querySelector("#y")
let res=document.querySelector("h3")
function add(){
   res.innerHTML= Number(x.value)+Number(y.value)

}
function mult(){
   res.innerHTML= Number(x.value)*Number(y.value)

}
function subs(){
   res.innerHTML= Number(x.value)-Number(y.value)

}
function div(){
   res.innerHTML= Number(x.value)/Number(y.value)

}