const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
    console.log("s")
    toggle.addEventListener('click',()=>{
        toggle.parentElement.classList.toggle('active')
    })
})