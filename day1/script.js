const panels = document.querySelectorAll('.panel') //Selecciona todos los objetos con class .panel y los almacena en como array

panels.forEach(panel=>{
    //Se agrega un EventListener a cada div para escuchar el click
    panel.addEventListener('click',()=>{
       removeActiveClasses()
       panel.classList.add('active') //Agrega una clase
    })
})

function removeActiveClasses(){
   panels.forEach(panel =>{
       panel.classList.remove('active') //Elimina una clase
   })
}