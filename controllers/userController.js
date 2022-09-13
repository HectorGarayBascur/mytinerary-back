const { query } = require('express')
const User = require('../models/User')
const crypto = require('crypto')//recurso propio de node.js para generar codigos aleatorios y unicos
const bcryptjs = require('bcryptjs')// recurso propio de nodejs para hashear constraseñas
const sendMail = require('./sendMail')
const { findOne } = require('../models/User')

const userController = {
    signUp: async (req, res) => {
        let { name, photo, mail, password, role, from, lastName, country } = req.body
        // el role tiene que venir desde el front para usar este metodo para ambos casos
        try {
            let user = await User.findOne({ mail })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex') // code: clave unica de usuario 
                if (from === 'form') {// si la data viene del formulario de registro
                    password = bcryptjs.hashSync(password, 10), // utilizamos el metodo hashsync que requiere dos params       
                        user = await new User({ name, photo, mail, password: [password], role, from: [from], logged, verified, code, lastName, country }).save()
                    sendMail(mail, code)
                    res.status(201).json({
                        message: 'User signed up from page',
                        response: user,
                        success: true
                    })
                } else {//si viene desde redes sociales (cualquier red social)
                    password = bcryptjs.hashSync(password, 10), // utilizamos el metodo hashsync que requiere dos params       
                        verified = true
                    user = await new User({ name, photo, mail, password: [password], role, from: [from], logged, verified, code, lastName, country }).save()
                    //no hace falta enviar mail de verificacion
                    res.status(201).json({
                        message: 'User signed up from' + from,
                        response: user,
                        success: true
                    })
                }
            } else {// si el usuario SI existe
                if (user.from.includes(from)) {//si la propiedad from del usuario (que es un array) incluye el valor from
                    res.status(200).json({//200 a confirma/estudiar
                        message: 'User already registered' + from,
                        response: user,
                        success: false
                    })
                } else {
                    user.from.push(from) // vinculo la nueva forma de registro al usuario encontrado pusheando el from dentro del array
                    user.verified = true
                    password = bcryptjs.hashSync(password, 10)
                    user.password.push(password)
                    await user.save()
                    res.status(201).json({
                        message: 'User signed up from' + from,
                        response: user,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't signed up",
                success: false
            })
        }
    },
    //el codigo unico y aleatorio generado en el meodo de signup
    //se pasa por params a este otro metodo para poder verificar la cuenta
    // luego de requerirlo lo comparo con los perfiles ya creados(buscar en la base de datos)
    //si encuentra el usuario cambio el verified a true
    //si no lo encuentra avisar que el mail no tiene cuenta
    verifyMail: async (req, res) => {
        const { code } = req.params
        try {
            let user = await User.findOne({ code })
            if (user) {
                user.verified = true
                await user.save()
                res.status(200).redirect('https://www.google.com')//aqui se coloca link de redireccion
                //redireccionar hacia index o pagina de bienvenida
                //no olvidar hostear el front para que funcione el redireccionamiento
            } else {
                res.status(404).json({
                    message: "Email hasn't account yet",
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "Couldn't verify account",
                success: false
            })
        }
    },
    signIn: async (req, res) => {
        const { mail, password, from } = req.body
        try {
            const user = await User.findOne({ mail })
            if (!user) {
                res.status(404).json({
                    message: "User doesn't exist, please sign up",
                    success: false
                })
            } else if (user.verified) {
                const checkPass = user.password.filter(passwordUser => bcryptjs.compareSync(password, passwordUser))
                if (from == "form") {
                    if (checkPass.length > 0) {
                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            response: { user: loginUser },
                            message: 'Welcome to Mytinerary ' + user.name,
                            success: true
                        })
                    } else {
                        res.status(400).json({
                            message: 'Sorry, Username or password incorrect',
                            success: false
                        })
                    }
                } else {
                    if (checkPass.length > 0) {
                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            response: { user: loginUser },
                            message: 'Welcome to Mytinerary ' + user.name,
                            success: true
                        })
                    } else {
                        res.status(400).json({
                            message: 'Invalid credentials',
                            success: false
                        })
                    }
                }
            } else {
                res.status(401).json({
                    message: 'Please, verify your email account and try again',
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(401).json({
                message: 'Sign in ERROR, try again later',
                success: false
            })
        }
    },
    signOut: async () => { },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let itinerary = await Itinerary.findOne({ _id: id })
            //city = {} // si no lo encuentra
            //si city no existe => city = {} retorno un json con 404
            if (itinerary) {
                res.status(200).json({
                    message: "You get one itinerary",
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find itinerary",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },


    all: async (req, res) => {
        let users
        let query = {}

        if (req.query.users) {
            query.users = req.query.users
        }

        try {
            users = await User.find(query)

            res.status(200).json({
                message: "you get all users",
                response: users,
                succes: true
            })
        }

        catch (error) {
            res.status(500).json
        }

    },



    create: async (req, res) => {
        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'User created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "Couldn't create user",
                success: false
            })
        }
    },
}
module.exports = userController;