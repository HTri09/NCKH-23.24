const { Router } = require('express')
const { upload, uploadMultiple } = require('../middleware/multer.js')
const router = Router()

const imgController = require('../controllers/image.controller.js')

router.post('/upload-single', upload, imgController.uploadSingleImage)
router.post('/upload-multiple', uploadMultiple, imgController.uploadMultipleImages)
router.post('/upload-to-predict', upload, imgController.uploadToPredict)
    
module.exports = router 