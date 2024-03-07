const { Router } = require('express')
const router = Router()

const troChoiController = require('../controllers/TroChoi.controller')

router.get('/', troChoiController.get)
router.get('/:id', troChoiController.getById)
router.post('/getByName', troChoiController.getByName)

module.exports = router