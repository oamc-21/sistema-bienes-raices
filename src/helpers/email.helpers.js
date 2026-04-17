import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });


const {email, nombre, token} = datos;

await transport.sendMail({
    from: "home-finder.ni.com",
    to: email,
    subject: "Confirma tu cuenta - Home Finder",
    text: "Confirma tu cuenta en home-finder.ni.com",
    html: `
        <p>Hola ${nombre} bienvenido a Home Finder, por favor verifica tu cuenta para empezar a descubrir tu nuevo hogar!</p>
        <p>Para activar tu cuenta solo debes acceder al enlace de confirmación: 
        <a href="${process.env.BACKEND_URL}:${process.env.BACKEND_PORT ?? 3000}/auth/confirmar-registro/${token}">Verificar Cuenta </a></p>
        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje.</p>
    `
})

}

export {
    emailRegistro,
}