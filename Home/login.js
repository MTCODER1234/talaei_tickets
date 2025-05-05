const userButton = document.querySelector(".user-login-button");
const options = document.querySelector(".user-info");
const loginButton = document.querySelector(".text-icon-1");

userButton.addEventListener("click", function() {
    options.style.display = "flex";
});

loginButton.addEventListener("click", function() {
    window.location.href = "";
});