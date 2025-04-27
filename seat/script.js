async function load() {
    try {
        const eventId = parseInt(localStorage.getItem('id'));
        console.log(eventId)

        const res = await fetch('/events.json');
        const data = await res.json();
        const event = data.events.find(e => e.id === eventId);

        document.getElementById('background-img').src = event.backgroundImage;
        document.getElementById('title-of-show').innerText = event.artist;
        document.getElementById('artist-logo').src = event.titleImage; 
    } catch (err) {

        console.error('Failed to load image:', err);

    }
}
  
load();