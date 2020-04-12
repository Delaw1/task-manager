let nodemailer = require('nodemailer')

const from = process.env.EMAIL_FROM
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: from,
        pass:  process.env.EMAIL_PASS
    }
})

const sendWelcomeEmail = (email, name) => {
    let mailOptions = {
        from: from,
        to: email,
        subject: "Hello " + name + ", Welcome to taskmanager",
        html: "<h1>We hope you enjoy the app</h1>"
    }
    return transporter.sendMail(mailOptions)
}

const cancellationEmail = async (email, name) => {
    let mailOptions = {
        from: from,
        to: email,
        subject: "Hello " + name,
        html: "<h2>Account Cancelled</h2><br/><em>Will you like to give a feedback on why you deleted your account?<em/>"
    }
    return transporter.sendMail(mailOptions)
     
}

module.exports = {
    sendWelcomeEmail,
    cancellationEmail
}