const { Router } = require('express')
const router = Router()

const duLichController = require('../controllers/DuLich.controller.js')

router.get('/', duLichController.get)
router.get('/:id', duLichController.getById)
router.post('/getByName', duLichController.getByName)

module.exports = router