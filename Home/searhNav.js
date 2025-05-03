const input = document.querySelector(".nav-bar-search");
const inputDiv = document.querySelector(".search-box-button");

inputDiv.addEventListener("click", function() {
    event.stopPropagation();
    inputDiv.style.width = "15vw";
    input.style.width = "12vw";
});

document.addEventListener("click", function() {
    inputDiv.style.width = "8vw";
    input.style.width = "7vw";
})