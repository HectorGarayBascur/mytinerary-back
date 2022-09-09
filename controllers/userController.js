const { query } = require('express')
const User = require('../models/User')
const crypto = require('crypto')//recurso propio de node.js para generar codigos aleatorios y unicos
const bcryptjs = require('bcryptjs')// recurso propio de nodejs para hashear constraseñas

const userController = {
    signUp: async (req, res) => {
        const { name, photo, mail, password, role, from } = req.body
        // el role tiene que venir desde el front para usar este metodo para ambos casos
        try {
            let user = await User.findOne({ mail })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex') // code: clave unica de usuario 
                if (from === 'form') {// si la data viene del formulario de registro
                    password = bcryptjs.hashSync(password, 10), // utilizamos el metodo hashsync que requiere dos params       
                        user = await new User({ name, photo, mail, password: [password], role, from: [from], logged, verified, code }).save()
                    //aca hay que incorporar la funcion para el envio de mail de verificacion
                    res.status(201).json({
                        message: 'User signed up from page',
                        success: true
                    })
                } else {//si viene desde redes sociales (cualquier red social)
                    password = bcryptjs.hashSync(password, 10), // utilizamos el metodo hashsync que requiere dos params       
                        verified = true
                    user = await new User({ name, photo, mail, password: [password], role, from: [from], logged, verified, code }).save()
                    //no hace falta enviar mail de verificacion
                    res.status(201).json({
                        message: 'User signed up from' + from,
                        success: true
                    })
                }
            } else {// si el usuario SI existe
                if (user.from.includes(from)) {//si la propiedad from del usuario (que es un array) incluye el valor from
                    res.status(200).json({//200 a confirma/estudiar
                        message: 'User already registered' + from,
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
    verifyMail: async () => { },
    signIn: async () => { },
    signOut: async () => { },

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