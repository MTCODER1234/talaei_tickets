function plusMinus(plus, negative, number, buyText) {
    let numberOfTimesClicked = 1;
    number.innerText = numberOfTimesClicked;
    let multiplier = parseInt(buyText.innerText.replace("$", ""));

    plus.addEventListener("click", function() {
        if (numberOfTimesClicked < 5) {
            numberOfTimesClicked += 1
            number.innerText = numberOfTimesClicked;
            buyText.innerText = "$"+multiplier*numberOfTimesClicked;
        }
    });

    negative.addEventListener("click", function() {
        if (numberOfTimesClicked > 1) {
            numberOfTimesClicked -= 1  
            number.innerText = numberOfTimesClicked; 
            buyText.innerText = "$"+multiplier*numberOfTimesClicked;
        }
    });
}

plusMinus(document.querySelector(".plus-button-1"), document.querySelector(".minus-button-1"), document.querySelector(".number-1"), document.querySelector(".buy-button-text-1"));
plusMinus(document.querySelector(".plus-button-2"), document.querySelector(".minus-button-2"), document.querySelector(".number-2"), document.querySelector(".buy-button-text-2"));
plusMinus(document.querySelector(".plus-button-3"), document.querySelector(".minus-button-3"), document.querySelector(".number-3"), document.querySelector(".buy-button-text-3"));
plusMinus(document.querySelector(".plus-button-4"), document.querySelector(".minus-button-4"), document.querySelector(".number-4"), document.querySelector(".buy-button-text-4"));