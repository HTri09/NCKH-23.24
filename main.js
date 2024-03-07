const express = require('express')
const passport = require('passport')
const session = require('express-session')
const morgan = require('morgan')
require('dotenv').config()

const route = require('./src/routes/index')
const connect = require('./src/config/index')

const app = express()
const PORT = 3000

require('./src/util/auth.js')


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'cats',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false       
    }
}))
app.use(passport.initialize())
app.use(passport.session())

// Connect to database
connect()


// HTTP Logger
app.use(morgan('tiny'))


// Routes init
const { isLoggedIn } = require('./src/middleware/auth.middleware.js')

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ))

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
)

app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`)
})

app.get('/logout', async (req, res) => {
    req.session.destroy()
    res.send('Goodbye!') 
})

app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..')
})

route(app)


app.listen(PORT, async () => {
    console.log(`Listening at port ${PORT}`)
})
