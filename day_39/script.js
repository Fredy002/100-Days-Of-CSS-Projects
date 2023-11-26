const menu_icon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const spans = document.querySelectorAll('.span')

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('active')
    menu_icon.classList.toggle('paused')
    menu.classList.toggle('active')
}
)

spans.forEach((span) => {
    span.addEventListener('click', () => {
        menu_icon.classList.toggle('active')
        menu_icon.classList.toggle('paused')
        menu.classList.toggle('active')
    })
})