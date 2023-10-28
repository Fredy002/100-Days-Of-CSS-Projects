const profiles = document.querySelectorAll('.profile')
const detail = document.querySelector('.detail')
const close = document.querySelector('.close')

profiles.forEach(profile => {
    profile.addEventListener('click', () => {
        detail.classList.toggle('active')
    })
})

close.addEventListener('click', () => {
    detail.classList.toggle('active')
})
