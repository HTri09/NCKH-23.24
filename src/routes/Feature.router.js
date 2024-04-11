const { Router } = require('express')
const router = Router()

const controller = require('../controllers/Feature.controller')

router.post('/chatbot', controller.chat)

module.exports = router