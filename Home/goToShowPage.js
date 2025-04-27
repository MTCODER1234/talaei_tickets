button = document.querySelectorAll(".show-button")

button.forEach(div => {
    div.addEventListener("click", function() {
        const eventId = div.dataset.id;
        localStorage.setItem('id', eventId);
        window.location.href = "/show-page/show.html";
    })
})