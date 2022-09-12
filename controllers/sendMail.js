const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REFRESH, GOOGLE_URL, GOOGLE_USER } = process.env

const sendMail = async (mail, code) => {
    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
    client.setCredentials({
        refresh_token: GOOGLE_REFRESH
    })
    const accessToken = client.getAccessToken()
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'Please verify your Mytinerary account',
        html: `
            <div>

            </div>
        ` //codigo HTML puro para que se renderice el cuerpo del mail
        //en el cuerpo del html tengo que enviar un link hacia una direccion que verifique la clave unica de verificacion
        //ese link o endpoint es la que se conectara con el metodo correspondiente para la verificacion de la cuenta
    }
    await transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log('ok');
        }
    })
}

module.exports = sendMail