const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const route = require('./src/routes/index')
const { connect } = require('./src/config/index')
const { requestLogger, errorLogger } = require('./src/middleware/index.js')

const app = express()
const PORT = process.env.PORT


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger)
app.use(errorLogger)

// Connect to database
connect()


// HTTP Logger
app.use(morgan('dev'))


// Routes init
// route(app)


const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
const send = multer({
    
})

// Upload endpoint
app.post('/upload', upload.single('imageFile'), (req, res) => {
    try {
        const filePath = path.join(__dirname, req.file.originalname);
        console.log(filePath)
        // Process and store the image as needed
        console.log('Image uploaded:', filePath);
        res.json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
});

app.post('/send', )

app.listen(PORT, async () => {
    console.log(`Listening at http://localhost:${PORT}`)
})
