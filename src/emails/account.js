const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{

sgMail.send({
    to: email,
    from: 'anand.khekale@gmail.com',
    subject:'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Hope you enjoy it.`
})

}

const sendCancellationEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'anand.khekale@gmail.com',
        subject:'Sorry to see you go.',
        text: `Good bye, ${name}. Please let us know how we could improve the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}