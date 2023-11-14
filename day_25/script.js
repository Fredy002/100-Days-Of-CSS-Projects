let locationElement = document.querySelector(".location");
let card = document.querySelector(".card");
let actions = document.querySelector(".actions");

locationElement.addEventListener("click", () => {
    locationElement.classList.toggle("inactive");
    card.classList.toggle("active");
});

actions.addEventListener("click", () => {
    locationElement.classList.toggle("inactive");
    card.classList.toggle("active");
});

