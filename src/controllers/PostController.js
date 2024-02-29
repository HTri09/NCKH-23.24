const { json } = require('sequelize')
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env' })


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

    // [POST] /api/chatbot
    chat: async (req, res) => {
        const prompt = req.body.content

        try {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });


            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            res.send(text)

        } catch (error) {
            res.send('Something went wrong')
            console.log(error)
        }
    }
}