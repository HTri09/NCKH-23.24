require('dotenv').config()
const { json } = require('sequelize')
const { OpenAI } = require('openai')

const openai = new OpenAI();

module.exports = {

    // [POST] /api/post/
    post: async (req, res) => {
        try {
            const data = req.body

            console.log(data)
            res.send(json(data))
        } catch (error) {
            console.log(error)
        }
    },

    // [POST] /api/post/:id
    postThroughParam: async (req, res) => {
        try {
            const data = req.params
            console.log(data)
            res.send('Post succesfully !')
        } catch (error) {
            console.log(error)
        }
    },

    // [POST] /api/chat-bot
    chat: async (req, res) => {
        const content = req.body.content

        try {
            const stream = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                max_tokens: 50,
                temperature: 0.7,
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
    }
}