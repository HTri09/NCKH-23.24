const { Router } = require('express')
const router = Router()

const leHoiController = require('../controllers/LeHoi.controller')

router.get('/', leHoiController.get)
router.get('/id=:id', leHoiController.getById)
router.post('/name', leHoiController.getByName)

module.exports = router