const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const route = require('./src/routes/index')
const connect = require('./src/config/index')

const app = express()
const PORT = process.env.PORT


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to database
connect()


// HTTP Logger
app.use(morgan('tiny'))


// Routes init
route(app)


app.listen(PORT, async () => {
    console.log(`Listening at port ${PORT}`)
})
