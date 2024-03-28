// const { bucket } = require('../config/firebase.config')

// module.exports = {
//     uploadImage: async (file, fileName) => {
//         try {
//             const fileUpload = bucket.file(fileName)
    
//             await fileUpload.save(file.buffer, {
//                 metadata: {
//                     contentType: file.mimetype,
//                 },
//             })
    
//             console.log(`Image uploaded to storage with filename: ${fileName}`)
//             return fileName
//         } catch (error) {
//             console.error('Error uploading image to storage:', error)
//             throw error // Rethrow the error to handle it in the caller function
//         }
//     }
// }
