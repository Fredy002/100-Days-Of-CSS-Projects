const number = document.querySelector('.fade-in')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
let count = 0

plus.addEventListener('click', () => {
    count++
    number.textContent = count
}
)

minus.addEventListener('click', () => {
    if (count > 0) {
        count--
        number.textContent = count
    }
}
)
