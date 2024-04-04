const { Router } = require('express')
const { upload, uploadMultiple } = require('../middleware/multer.js')
const router = Router()

const imgController = require('../controllers/image.controller.js')

router.post('/upload-single', upload, imgController.uploadSingleImg)
router.post('/upload-multiple', uploadMultiple, imgController.uploadMultipleImgs)
router.get('/test', imgController.get)

module.exports = router 