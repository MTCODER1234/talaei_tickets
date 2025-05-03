const likeButton = document.getElementById("likes-button");
const notLikedIcon = document.querySelector(".not-liked-icon");

function updateIconState() {
    const eventId = parseInt(localStorage.getItem("id"));
    const likedEvents = JSON.parse(localStorage.getItem("likedEvents") || "{}");

    if (likedEvents[eventId]) {
        notLikedIcon.classList.add("fa-solid");
    } else {
        notLikedIcon.classList.remove("fa-solid");
    }
}

likeButton.addEventListener("click", async function () {
    const eventId = parseInt(localStorage.getItem("id"));

    const res = await fetch("/events.json");
    const data = await res.json();
    const event = data.events.find((e) => e.id === eventId);

    if (!event) {
        console.error("Event not found.");
        return;
    }

    let likedEvents = JSON.parse(localStorage.getItem("likedEvents") || "{}");

    const isCurrentlyLiked = likedEvents[eventId] === true;

    if (isCurrentlyLiked) {
        likedEvents[eventId] = false;
        console.log(`Event ${eventId} unliked`);
    } else {
        likedEvents[eventId] = true;
        console.log(`Event ${eventId} liked`);
    }

    localStorage.setItem("likedEvents", JSON.stringify(likedEvents));
    updateIconState();
});

window.addEventListener("DOMContentLoaded", updateIconState);
