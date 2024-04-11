const { auth } = require('../config/index')
const path = require('path')

const { getStorage, ref, uploadBytesResumable } = require('firebase/storage')
const { signInWithEmailAndPassword } = require("firebase/auth");
require('dotenv').config()

const uploadSingleImg = async (file) => {
    const storage = getStorage()
    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    const fileName = `images/${path.parse(file.originalName).name}`
    const storageRef = ref(storage, fileName)
    const metadata = {
        contentType: file.type,
    }
    await uploadBytesResumable(storageRef, file.buffer, metadata);
    return fileName
}

const uploadMultipleImgs = async (files) => {
    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    for (let i = 0; i < files.length; i++) {
        // const dateTime = Date.now();
        const fileName = `images/${path.parse(files[i].originalname).name}`
        const storageRef = ref(storage, fileName)
        const metadata = {
            contentType: files[i].mimetype,
        }

        // const saveImage = await new Image({ imageUrl: fileName });
        // files.item.imageId.push({ _id: saveImage._id });
        // await files.item.save();

        console.log(`Upload images[${i}] completed !`)
        await uploadBytesResumable(storageRef, files[i].buffer, metadata);
    }
    return
}

module.exports = {
    uploadSingleImg,
    uploadMultipleImgs
}