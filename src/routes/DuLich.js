const express = require('express')
const router = express.Router()

const duLichController = require('../controllers/DuLichController')

router.get('/', duLichController.get)
router.get('/:id', duLichController.getById)

module.exports = router