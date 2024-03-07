const { Router } = require('express')
const router = Router()

const trangPhucController = require('../controllers/TrangPhuc.controller')

router.get('/', trangPhucController.get)
router.get('/:id', trangPhucController.getById)
router.post('/getByName', trangPhucController.getByName)


module.exports = router