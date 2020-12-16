const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 *4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top //https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}