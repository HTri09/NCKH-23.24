const { Router } = require('express')
const router = Router()

const monAnController = require('../controllers/MonAn.controller')

router.get('/', monAnController.get)
router.get('/:id', monAnController.getById)
router.post('/getByName', monAnController.getByName)


module.exports = router