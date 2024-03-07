const { Router } = require('express')
const router = Router()

const leHoiController = require('../controllers/LeHoi.controller')

router.get('/', leHoiController.get)
router.get('/:id', leHoiController.getById)
router.post('/getByName', leHoiController.getByName)

module.exports = router