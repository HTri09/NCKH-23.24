const express = require('express')
const router = express.Router()

const trangPhucController = require('../controllers/TrangPhucController')

router.get('/', trangPhucController.get)
router.get('/:id', trangPhucController.getById)

module.exports = router