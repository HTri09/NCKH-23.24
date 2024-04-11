const axios = require('axios')
const FormData = require('form-data')
require('dotenv').config()

const { uploadSingleImg, uploadMultipleImgs} = require('../utils/uploadIamge')
const logger = require('../utils/errorLogger')

const protocol = process.env.FAST_API_SERVER_PROTOCOL
const domain = process.env.FAST_API_SERVER_DOMAIN
const port = process.env.FAST_API_SERVER_PORT


module.exports = {
    // [POST] api/upload-single
    uploadSingleImage: async (req, res) => {
        try {
            const file = {
                type: req.file.mimetype,
                buffer: req.file.buffer,
                originalName: req.file.originalname,
                directory: req.body.dst
            }

            const buildImage = await uploadSingleImg(file);
            
            console.log('Upload completed')
            res.json({
                status: "SUCCESS",
                imageName: buildImage
            })
        } catch (err) {
            console.log(err);
            res.send(err)
            logger.error(`Upload image error: ${err}`)
        }
    },

    // [POST] api/upload-multiple
    uploadMultipleImages: async (req, res) => {
        try {
            const buildImage = await uploadMultipleImgs(req.files)
            console.log('Upload completed')
            res.json({
                status: "SUCCESS",
                imageName: buildImage
            })
        } catch (err) {
            console.log(err)
            res.send(err)
            logger.error(`Upload images error: ${err}`)
        }
    },

    // [POST] api/upload-to-predict
    uploadToPredict: async (req, res) => {
        try {
            // Get image buffer from client request
            const imageBuffer = req.file.buffer

            // Define form data to fetch fastAPI server
            const url = `${protocol}://${domain}:${port}/image`
            const formData = new FormData();
            formData.append('buffer', imageBuffer, {
                filename: req.file.originalname,
                contentType: 'image/jpeg'
            })
            const config = {
                headers: {
                    ...formData.getHeaders()
                }
            }

            // Fetch fastAPI server
            const response = await axios.post(url, formData, config)
            res.json({ "response": response.data })
        } catch (error) {
            logger.error(`Upload to predict error: ${error}`)
            res.json(error.message)
        }
    },
}
