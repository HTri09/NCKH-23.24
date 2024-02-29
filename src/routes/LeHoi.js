const { Router } = require('express')
const router = Router()

const leHoiController = require('../controllers/LeHoiController')

router.get('/', leHoiController.get)
router.get('/:id', leHoiController.getById)

module.exports = router