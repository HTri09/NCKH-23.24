const express = require('express')
const morgan = require('morgan');

const { sequelize } = require('./src/models')
const route = require('./src/routes/index')
const connect = require('./src/config/index')

const app = express()
const PORT = 3000;

app.use(express.json())

// Connect to database
connect()

// HTTP Logger
app.use(morgan('tiny'))

// Routes init
route(app)


app.listen(PORT, async () => {
    console.log('Listening at port 3000')
})


