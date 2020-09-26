const sendEmail = async (subject, email_address, email_text) => {
    try {
        // send email
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'yandex',
            auth: {
                user: "no-reply@eportfolio.tech",
                pass: "jxdwlguzlqakqpxx",
            }
        });

        var mailOptions = {
            from: 'no-reply@eportfolio.tech',
            to: email_address,
            subject: subject,
            text: email_text,
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    } catch (e) {
        // catch error then report
        console.log(e);
    }
};

export default sendEmail;