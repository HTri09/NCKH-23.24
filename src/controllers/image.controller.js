const { uploadImage } = require('../utils/uploadImage')

module.exports = {
    // [POST] api/upload-single
    uploadSingleImg: async (req, res) => {
        try {
            const file = req.file;
            const dateTime = Date.now();
            const fileName = `/${dateTime}`;

            await uploadImage(file, fileName);

            res.json({ status: 'SUCCESS', imageName: fileName });
        } catch (error) {
            console.error('Error uploading single image:', error);
            res.status(500).json({ status: 'ERROR', message: 'Failed to upload image' });
        }
    },


    // [POST] api/upload-multiple
    uploadMultipleImgs: async (req, res) => {
        try {
            const images = req.files.map(file => ({
                mimetype: file.mimetype,
                buffer: file.buffer
            }))

            const uploadedImages = await uploadImage(images, 'multiple')

            res.send({
                status: "SUCCESS",
                uploadedImages: uploadedImages
            })
        } catch (err) {
            console.log(err)
            res.status(500).send({
                status: "ERROR",
                message: "Failed to upload images"
            })
        }
    },

    get: (req, res) => {
        res.send('succes')
    }

}
