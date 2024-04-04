const { getStorage, ref, uploadBytesResumable } = require('firebase/storage')
const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require('../config/index')
const path = require('path')

async function uploadImage(file, quantity) {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    if (quantity === 'single') {
        // const dateTime = Date.now();
        const fileName = `images/${path.parse(file.originalName).name}`
        const storageRef = ref(storageFB, fileName)
        const metadata = {
            contentType: file.type,
        }
        await uploadBytesResumable(storageRef, file.buffer, metadata);
        return fileName
    }

    if (quantity === 'multiple') {
        for (let i = 0; i < file.length; i++) {
            // const dateTime = Date.now();
            const fileName = `images/${path.parse(file[i].originalname).name}`
            const storageRef = ref(storageFB, fileName)
            const metadata = {
                contentType: file[i].mimetype,
            }

            // const saveImage = await new Image({ imageUrl: fileName });
            // file.item.imageId.push({ _id: saveImage._id });
            // await file.item.save();

            console.log(`Upload images[${i}] completed !`)
            await uploadBytesResumable(storageRef, file[i].buffer, metadata);
        }
        return
    }

}

module.exports = {
    // [POST] api/upload-single
    uploadSingleImg: async (req, res) => {
        const file = {
            type: req.file.mimetype,
            buffer: req.file.buffer,
            originalName: req.file.originalname,
            directory: req.body.dst
        }

        try {
            const buildImage = await uploadImage(file, 'single');
            console.log('Upload completed')
            res.send({
                status: "SUCCESS",
                imageName: buildImage
            })
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    },


    // [POST] api/upload-multiple
    uploadMultipleImgs: async (req, res) => {
        try {
            const buildImage = await uploadImage(req.files, 'multiple');
            console.log('Upload completed')
            res.send({
                status: "SUCCESS",
                imageName: buildImage
            })
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    },

    get: (req, res) => {
        res.send('succes')
    }

}
