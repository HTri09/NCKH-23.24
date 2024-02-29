const { Router } = require('express')
const router = Router()

const troChoiController = require('../controllers/TroChoiController')

router.get('/', troChoiController.get)
router.get('/:id', troChoiController.getById)

module.exports = router