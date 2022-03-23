const ham = document.querySelector(".ham")
const navCelu = document.querySelector(".navegacion")

const barras = document.querySelectorAll('.ham span')

ham.addEventListener('click',()=>{
    navCelu.classList.toggle("navegacionActivada")
    barras.forEach(child => {child.classList.toggle('animado')})
})