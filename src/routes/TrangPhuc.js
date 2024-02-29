const { Router } = require('express')
const router = Router()

const trangPhucController = require('../controllers/TrangPhucController')

router.get('/', trangPhucController.get)
router.get('/:id', trangPhucController.getById)

module.exports = router