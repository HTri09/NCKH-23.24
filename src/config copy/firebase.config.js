const admin = require("firebase-admin")

const serviceAccount = require('')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://kham-pha-van-hoa-viet-nam.appspot.com'
})


const bucket = admin.storage().bucket() 

module.exports = {
    bucket
}