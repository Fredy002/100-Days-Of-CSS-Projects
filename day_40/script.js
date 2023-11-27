const pics = document.querySelectorAll('.pic')

pics.forEach(pic => {
    pic.addEventListener('click', () => {
        pic.classList.toggle('active')
    })
})