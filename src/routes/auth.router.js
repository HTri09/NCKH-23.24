const { Router } = require('express')
const router = Router()

const authController = require('../controllers/auth.controller')

router.get('/auth/google', authController.auth)
router.get('/google/callback', authController.callback)
router.get('/authenticated', authController.authenticated)
router.get('/auth/google/failure', authController.failure)

module.exports = router