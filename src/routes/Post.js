const { Router } = require('express')
const router = Router()

const postController = require('../controllers/PostController')

router.post('/', postController.post)
router.post('/id=:id', postController.postThroughParam)
router.post('/chatbot', postController.chat)

module.exports = router