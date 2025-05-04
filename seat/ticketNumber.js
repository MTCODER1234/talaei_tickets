const overallButton = document.querySelector(".buy-button-total-text");

let totals = [0, 0, 0, 0];
let ticketTotals = [0, 0, 0, 0];

overallButton.innerText = `$0 Buy`;

async function updateOverallTotal() {
    const eventId = parseInt(localStorage.getItem("id"));
    const res = await fetch("/events.json");
    const data = await res.json();
    const event = data.events.find((e) => e.id === eventId);

    const total = totals.reduce((sum, val) => sum + val, 0);
    overallButton.innerText = `$${total} Buy`;

    localStorage.setItem(eventId + "_total", total);

    const TicketTotal = ticketTotals.reduce((sum, val) => sum + val, 0);
    localStorage.setItem(eventId + "_tickets", TicketTotal);
}

function plusMinus(index, plus, minus, number, buyText) {
    let numberOfTimesClicked = 0;
    number.innerText = numberOfTimesClicked;

    const multiplier = parseInt(buyText.innerText.replace("$", ""));

    function updateDisplay() {
        number.innerText = numberOfTimesClicked;
        const itemTotal = multiplier * numberOfTimesClicked;
        buyText.innerText = `$${itemTotal}`;

        totals[index] = itemTotal;
        ticketTotals[index] = numberOfTimesClicked;

        updateOverallTotal();
    }

    plus.addEventListener("click", function() {
        if (numberOfTimesClicked < 5) {
            numberOfTimesClicked += 1;
            updateDisplay();
        }
    });

    minus.addEventListener("click", function() {
        if (numberOfTimesClicked > 0) {
            numberOfTimesClicked -= 1;
            updateDisplay();
        }
    });
}

plusMinus(0, document.querySelector(".plus-button-1"), document.querySelector(".minus-button-1"), document.querySelector(".number-1"), document.querySelector(".buy-button-text-1"));
plusMinus(1, document.querySelector(".plus-button-2"), document.querySelector(".minus-button-2"), document.querySelector(".number-2"), document.querySelector(".buy-button-text-2"));
plusMinus(2, document.querySelector(".plus-button-3"), document.querySelector(".minus-button-3"), document.querySelector(".number-3"), document.querySelector(".buy-button-text-3"));
plusMinus(3, document.querySelector(".plus-button-4"), document.querySelector(".minus-button-4"), document.querySelector(".number-4"), document.querySelector(".buy-button-text-4"));

const buyButton = document.querySelector(".buy-button-total");

buyButton.addEventListener("click", function () {
    if (buyButton.innerText !== "$0 Buy") {
        window.location.href = "/purchase/purchase.html";
    }
});
