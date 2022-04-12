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
const formulario = document.querySelector("#form")

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

formulario.addEventListener('submit',enviarManual)

async function enviarManual(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        alert("Gracias por contactarte conmigo, te responderé pronto")
    }
}