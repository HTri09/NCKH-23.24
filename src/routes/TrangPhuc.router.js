const { Router } = require('express')
const router = Router()

const trangPhucController = require('../controllers/TrangPhuc.controller')

router.get('/', trangPhucController.get)
router.get('/id=:id', trangPhucController.getById)
router.post('/name', trangPhucController.getByName)


module.exports = router