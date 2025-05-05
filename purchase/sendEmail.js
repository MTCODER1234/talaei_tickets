emailjs.init('AC9OKzizIt2mpN0ZE');

const googlePay = document.getElementById("google-pay-button");
const paypal = document.getElementById("paypal-button");
const applePay = document.getElementById("apple-button");

const textGoogle = document.querySelector(".google-payment-icon");
const textPaypal = document.querySelector(".paypal-payment-icon");
const textApple = document.querySelector(".apple-payment-icon");

function press(button1, text1, button2, text2, button3, text3) {
    let paymentType = null;
    let pressed1 = false;
    let pressed2 = false;
    let pressed3 = false;

    button1.addEventListener("click", function () {
        if (!pressed1) {
            paymentType = "Google Pay";
            localStorage.setItem("_payment", paymentType);

            button1.style.backgroundColor = "rgb(0, 128, 202)";
            text1.style.color = "white";
            button2.style.backgroundColor = "";
            text2.style.color = "";
            button3.style.backgroundColor = "";
            text3.style.color = "";

            pressed1 = true;
            pressed2 = false;
            pressed3 = false;
        } else {
            button1.style.backgroundColor = "";
            text1.style.color = "";
            localStorage.removeItem("_payment");
            pressed1 = false;
        }
    });

    button2.addEventListener("click", function () {
        if (!pressed2) {
            paymentType = "Apple Pay";
            localStorage.setItem("_payment", paymentType);

            button2.style.backgroundColor = "rgb(0, 128, 202)";
            text2.style.color = "white";
            button1.style.backgroundColor = "";
            text1.style.color = "";
            button3.style.backgroundColor = "";
            text3.style.color = "";

            pressed2 = true;
            pressed1 = false;
            pressed3 = false;
        } else {
            button2.style.backgroundColor = "";
            text2.style.color = "";
            localStorage.removeItem("_payment");
            pressed2 = false;
        }
    });

    button3.addEventListener("click", function () {
        if (!pressed3) {
            paymentType = "PayPal";
            localStorage.setItem("_payment", paymentType);

            button3.style.backgroundColor = "rgb(0, 128, 202)";
            text3.style.color = "white";
            button1.style.backgroundColor = "";
            text1.style.color = "";
            button2.style.backgroundColor = "";
            text2.style.color = "";

            pressed3 = true;
            pressed1 = false;
            pressed2 = false;
        } else {
            button3.style.backgroundColor = "";
            text3.style.color = "";
            localStorage.removeItem("_payment");
            pressed3 = false;
        }
    });
}

press(googlePay, textGoogle, applePay, textApple, paypal, textPaypal);

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendEmail() {
    const button = document.getElementById("submit-button");

    button.addEventListener("click", async function () {
        const eventId = parseInt(localStorage.getItem('id'));
        const valueEmail = document.getElementById("email-input-value").value.trim();
        const selectedPayment = localStorage.getItem("_payment");

        if (!isValidEmail(valueEmail)) {
            alert("Please enter a valid email address...");
            return;
        }

        if (!selectedPayment) {
            alert("No payment method selected...");
            return;
        }

        button.disabled = true;
        console.log("Clicked!");

        alert("Please wait for 10 seconds before we send the email...");

        try {
            const res1 = await fetch('/events.json');
            const eventsData = await res1.json();
            const event = eventsData.events.find(e => e.id === eventId);

            setTimeout(() => {
                emailjs.send('service_spebbad', 'template_hd7kmyr', {
                    "email": valueEmail,
                    "user": valueEmail,
                    "show-name": event.artist,
                    "time": event.time,
                    "date": event.date,
                    "city": event.city,
                    "venue": event.venue,
                    "payment-type": selectedPayment
                })
                .then(function (response) {
                    console.log('Success!', response);
                    alert("Email sent successfully!");
                    button.disabled = false;
                })
                .catch(function (error) {
                    console.log('Failed...', error);
                    alert("Failed to send email...");
                    button.disabled = false;
                });
            }, 10000);
        } catch (err) {
            console.error("Error fetching event data:", err);
            alert("An issue occurred while preparing the email...");
            button.disabled = false;
        }
    });
}

sendEmail();
