async function load() {
    try {
        const eventId = parseInt(localStorage.getItem('id'));
        console.log(eventId)

        const res = await fetch('/events.json');
        const data = await res.json();
        const event = data.events.find(e => e.id === eventId);

        const savedTotal = parseInt(localStorage.getItem(eventId + "_total"), 10);
        const TicketTotal = parseInt(localStorage.getItem(eventId + "_tickets"), 10);

        console.log(savedTotal)

        document.querySelector('.label-tickets-purchase-container').innerText = event.artist;
        document.querySelector(".price-of-tickets-purchase-container").innerText = `$${savedTotal}`;
        document.querySelector(".number-of-tickets-purchase-container").innerText = TicketTotal;
        document.querySelector(".text-buy-div-amount").innerText = `$${savedTotal}`

    } catch (err) {
        console.error('Failed to load iartist name', err);
    }
}
  
load();