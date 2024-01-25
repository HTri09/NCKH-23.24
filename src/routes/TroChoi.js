const express = require('express')
const router = express.Router()

const troChoiController = require('../controllers/TroChoiController')

router.get('/', troChoiController.get)
router.get('/:id', troChoiController.getById)

module.exports = router