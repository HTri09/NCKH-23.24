const express = require('express')
const morgan = require('morgan');

const route = require('./src/routes/index')
const connect = require('./src/config/index');

const app = express()
const PORT = 3000;



require('dotenv').config()
const { OpenAI } = require('openai')

const openai = new OpenAI();


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/post', (req, res) => {
//     try {
//         const data = req.body
//         console.log(data)
//         res.send(json(data))
//     } catch (error) {
//         console.log(error)
//     }
// })

// Connect to database
connect()

// HTTP Logger
app.use(morgan('tiny'))

app.post('/testOpenAI', async (req, res) => {
    const content = req.body.content

    try {
        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            max_tokens: 50,
            temperature: 0.7,
            // stream: true,
            messages: [
                {
                    role: 'user',
                    content: content
                }
            ]
        })


        res.send(stream)

    } catch (error) {
        res.send(error)
        console.log(error)
    }

})


// Routes init
route(app)


app.listen(PORT, async () => {
    console.log('Listening at port 3000')
})

