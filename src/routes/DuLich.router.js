const { Router } = require('express')
const router = Router()

const duLichController = require('../controllers/DuLich.controller.js')

router.get('/', duLichController.get)
router.get('/id=:id', duLichController.getById)
router.post('/name', duLichController.getByName)

module.exports = router