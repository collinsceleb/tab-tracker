const jwt = require('jsonwebtoken')
const {User} = require('../models')
const config = require('../config/configuration')


function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7 
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}


module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(400).send({
                error: "The email account is already in use"
            })
        }
        
        // res.send({
        //     message: `Hello ${req.body.email}! Your user was registered!Have some fun!`,
        // })
    },
    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            // console.log('user', user.body)
            if (!user) {
                return res.status(403).send({
                    error: 'The email was incorrect'
                })
            }

            const isPasswordValid = user.comparePassword(password);
            // console.log(isPasswordValid)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The password was incorrect'
                })
            }

            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(500).send({
                error: "An error has occured trying to log in"
            })
        }
        
        // res.send({
        //     message: `Hello ${req.body.email}! Your user was registered!Have some fun!`,
        // })
    }
}

