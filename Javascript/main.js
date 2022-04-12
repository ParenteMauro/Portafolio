const ham = document.querySelector(".ham")
const navCelu = document.querySelector(".navegacion")
const barras = document.querySelectorAll('.ham span')
const landing = document.querySelector("#landingPage")
const modalLanding = document.querySelector("#modal_landing")
const cerrarLanding = document.querySelector("#cerrar_landing")
const modalContenedor = document.querySelector(".modal_contenedor")
const tresEnR = document.querySelector("#TicTacToe")
const modalTresEnR = document.querySelector("#modal_tresEnR")
const cerrarTresEnR = document.querySelector("#cerrar_tresEnR")
const pokeApi = document.querySelector("#PokeApi")
const modalPokemon = document.querySelector("#modal_pokeapi")
const cerrarPokeApi = document.querySelector("#cerrar_pokeapi")

ham.addEventListener('click',()=>{
    navCelu.classList.toggle("navegacionActivada")
    barras.forEach(child => {child.classList.toggle('animado')})
})

landing.addEventListener('click',()=>{
    modalLanding.style.visibility = "visible"
})

cerrarLanding.addEventListener('click',()=>{
    modalLanding.style.visibility = "hidden"
})


tresEnR.addEventListener('click',()=>{
    modalTresEnR.style.visibility = "visible"
})

cerrarTresEnR.addEventListener('click',()=>{
    modalTresEnR.style.visibility = "hidden"
})

pokeApi.addEventListener('click',()=>{
    modalPokemon.style.visibility = "visible"
})

cerrarPokeApi.addEventListener('click',()=>{
    modalPokemon.style.visibility = "hidden"
})