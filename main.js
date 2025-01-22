let openBtn = document.querySelector('.bi-x-square-fill')
let closeBtn = document.querySelector('.bi-list')
let menu = document.querySelector('.navber-contant-center')


openBtn.addEventListener('click', ()=>{
    openBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    menu.classList.toggle('hidden')
})
closeBtn.addEventListener('click', ()=>{
    openBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    menu.classList.toggle('hidden')
})