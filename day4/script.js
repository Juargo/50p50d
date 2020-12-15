const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')

btn.addEventListener('click',()=>{
    search.classList.toggle('active') //Lo agrega si no existe y lo elimina si existe
    input.focus()
})