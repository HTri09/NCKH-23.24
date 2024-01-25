const express = require('express')
const router = express.Router()

const monAnController = require('../controllers/MonAnController')

router.get('/', monAnController.get)
router.get('/:id', monAnController.getById)

module.exports = router