const session = require('express-session')
const passport = require('passport')
const { isLoggedIn } = require('../middleware/auth.middleware.js')

module.exports = {
    // [GET] /api/auth/google
    auth: async (req, res) => {
        passport.authenticate('google', {
            scope: ['email', 'profile']
        })
    },

    //
    callback: async () => {
        passport.authenticate('google', {
            successRedirect: '/authenticated',
            failureRedirect: '/auth/google/failure'
        })
    },

    authenticated: (isLoggedIn, async (req, res) => {
        res.send(`Hello ${req,user.displayName}`)
    }),

    logout: async (req, res) => {
        req.logout()
        req.session.destroy()
        res.send('Logged out')
    },

    failure: async (req, res) => {
        res.send('Failed to authenticate !!!')
    }

    
}