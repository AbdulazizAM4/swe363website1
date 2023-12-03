let alert=document.querySelector(".alert")
let x=document.querySelector(".close")
console.log(x.innerText)
x.addEventListener("click",e=>{
    console.log(x.innerText)
    alert.setAttribute("style","display:none")
})