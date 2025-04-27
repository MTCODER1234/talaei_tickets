async function load() {
    try {
        const eventId = parseInt(localStorage.getItem('id'));
        console.log(eventId)

        const res = await fetch('/events.json');
        const data = await res.json();
        const event = data.events.find(e => e.id === eventId);

        document.getElementById('background-img').src = event.backgroundImage;
        document.getElementById('title-of-show').innerText = event.artist;
        document.getElementById('likes-text').innerText = event.likes;
        document.getElementById('spots-left').innerText = `hurry only ${event.spotsLeft} spots left!`;
        document.getElementById('info-event-text-category').innerText = event.category;
        document.getElementById('info-event-text-date').innerText = event.date;
        document.getElementById('info-event-text-city').innerText = event.city;
        document.getElementById('info-event-text-venue').innerText = event.venue;
        document.getElementById('info-event-text-time').innerText = event.time;
        document.getElementById('artist-logo').src = event.titleImage; 

        if (event.category == "Music") {
            document.getElementById('live-in-concert').innerText = `${event.artist} live in concert!`;
        } else if (event.category == "Comedy") {
            document.getElementById('live-in-concert').innerText = `${event.artist} live stand up!`;
        } else if (event.category == "Sport") {
            document.getElementById('live-in-concert').innerText = `${event.artist} live match!`;
        }

    } catch (err) {

        console.error('Failed to load image:', err);

    }
}
  
load();