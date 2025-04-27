const likeButton = document.getElementById("likes-button");
const notLikedIcon = document.querySelector(".not-liked-icon");

likeButton.addEventListener("click", function() {
    notLikedIcon.classList.toggle("fa-solid");
})
