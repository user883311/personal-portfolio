function sendEmail() {
    var email = require("emailjs");
    var server = email.server.connect({
        user: "user883311-personal-portfolio",
        password: "France1234",
        host: "smtp-mail.outlook.com",
        // tls: {
        //     ciphers: "SSLv3"
        // },
        tls: true
    });

    var message = {
        text: "i hope this works",
        from: "newsender <user883311-personal-portfolio@outlook.com>",
        to: "user883311 <user883311@gmail.com>",
        subject: "testing emailjs",
    };

    // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function (err, message) {
        console.log(err || message);
    });
}