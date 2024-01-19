const express = require('express')
const app = express()
const PORT = 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(morgan('tiny'))
app.use(bodyParser.json())

const { sequelize, MonAn } = require('./models');

const monAnRoute = require('./routes/MonAn.js')
const trangPhucRoute = require('./routes/TrangPhuc.js')

app.use('/api/monan', monAnRoute)
app.use('/api/trangphuc', trangPhucRoute)

app.listen(PORT, async () => {
    console.log('Listening at port 3000')
    sequelize.authenticate({ logging: false })
        .then(() => {
            console.log("Database Connected!")
        })
        .catch(err => {
            console.log("Something went wrong\n", err)
        })
})


