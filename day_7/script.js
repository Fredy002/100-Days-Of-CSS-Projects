const search = document.querySelector('.search-icon');
const menu = document.querySelector('.menu-icon');

let searchActive = document.querySelector('.search');
let menuActive = document.querySelector('.note');
let list = document.querySelector('.list');

search.addEventListener('click', () => {
    searchActive.classList.toggle('input');
});

menu.addEventListener('click', () => {
    menuActive.classList.toggle('activeHamburger');
    list.classList.toggle('activeMenu');
});