const { Router } = require('express')
const router = Router()

const troChoiController = require('../controllers/TroChoi.controller')

router.get('/', troChoiController.get)
router.get('/id=:id', troChoiController.getById)
router.post('/name', troChoiController.getByName)

module.exports = router