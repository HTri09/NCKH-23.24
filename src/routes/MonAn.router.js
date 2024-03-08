const { Router } = require('express')
const router = Router()

const monAnController = require('../controllers/MonAn.controller')

router.get('/', monAnController.get)
router.get('/id=:id', monAnController.getById)
router.post('/name', monAnController.getByName)


module.exports = router