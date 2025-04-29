emailjs.init('AC9OKzizIt2mpN0ZE'); 

function sendEmail() {
    const button = document.getElementById("submit-button");

    button.addEventListener("click", async function () {
        const eventId = parseInt(localStorage.getItem('id'));
        const valueEmail = document.getElementById("email-input-value").value;

        button.disabled = true;

        console.log("Clicked!");
        console.log("Waiting 10 seconds before sending email...");
        
        const res1 = await fetch('/events.json');
        const eventsData = await res1.json();

        const res2 = await fetch('/user.json');
        const userdata = await res2.json();

        const event = eventsData.events.find(e => e.id === eventId);
        const email = userdata.user[0].email;

        if (valueEmail === email) {
            setTimeout(() => {
                button.disabled = true
                emailjs.send('service_spebbad', 'template_hd7kmyr', {
                    "email": valueEmail,
                    "show-name": event.artist,
                    "time": event.time,
                    "date": event.date,
                    "city": event.city,
                    "venue": event.venue
                })
                .then(function (response) {
                    console.log('Success!', response);
                    button.disabled = false;
                })
                .catch(function (error) {
                    console.log('Failed...', error);
                    button.disabled = false;
                });
            }, 10000);
            
        } else {
            console.log("Email does not match stored email. Not sending.");
            button.disabled = false;
        }
    });
    
}

sendEmail();
