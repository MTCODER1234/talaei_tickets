const navBar = document.querySelector(".navigation-bar-child");
const topSection = document.querySelector(".top-section");

window.addEventListener('scroll', function() {
    if (window.scrollY > topSection.offsetHeight) {
        navBar.classList.add('visible');
    } else {
        navBar.classList.remove('visible');
    }
});