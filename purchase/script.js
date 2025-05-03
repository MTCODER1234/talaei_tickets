async function load() {
    try {
        const eventId = parseInt(localStorage.getItem('id'));
        console.log(eventId)

        const res = await fetch('/events.json');
        const data = await res.json();
        const event = data.events.find(e => e.id === eventId);

        document.querySelector('.label-tickets-purchase-container').innerText = event.artist;
    } catch (err) {
        console.error('Failed to load iartist name', err);
    }
}
  
load();