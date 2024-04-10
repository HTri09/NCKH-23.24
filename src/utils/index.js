const express = require('express')
const morgan = require('morgan');

const { sequelize } = require('./models')
const route = require('./routes/index')

const app = express()
const PORT = 3000;

app.use(morgan('tiny'))
app.use(express.json())

route(app)


app.listen(PORT, async () => {
    sequelize.authenticate({ logging: false })
        .then(() => {
            console.log("Database Connected!")
        })
        .catch(err => {
            console.log("Something went wrong\n", err)
        })
})


