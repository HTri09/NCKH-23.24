const { Router } = require('express')
const router = Router()

const duLichController = require('../controllers/DuLichController')

router.get('/', duLichController.get)
router.get('/:id', duLichController.getById)

module.exports = router