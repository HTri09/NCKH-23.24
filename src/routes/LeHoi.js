const express = require('express')
const router = express.Router()

const leHoiController = require('../controllers/LeHoiController')

router.get('/', leHoiController.get)
router.get('/:id', leHoiController.getById)

module.exports = router