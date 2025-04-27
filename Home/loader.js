document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".load-content");
    const content = document.querySelector(".content");

    window.addEventListener("load", function() {
        console.log("Page fully loaded!");

        loader.classList.add("invisible");

        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 2000);
    });
});
