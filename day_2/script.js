const menu = document.querySelector('.menu')

let lineTop = document.querySelector('.lineTop')
let lineCenter = document.querySelector('.lineCenter')
let lineLower = document.querySelector('.lineLower')

menu.addEventListener('click', () => {
    lineTop.classList.toggle('top')
    lineCenter.classList.toggle('center')
    lineLower.classList.toggle('lower')
})