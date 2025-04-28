document.getElementById("submit-button").addEventListener("click", function() {
    console.log("clicked")
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587,
    secure: false,
    auth: {
        user: '461b119734dd12',
        pass: 'b00052bbaab507',
    }
    });

    const mailOptions = {
    from: 'TalaeiTickets@gmail.com',
    to: 't385475@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
    });

});