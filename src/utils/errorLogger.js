// const winston = require('winston')
// const path = require('path')

// const logger = winston.createLogger({
//     format: winston.format.simple(),
//     transports: [
//         new winston.transports.File({ filename: path.join('logs', 'error.log'), level: 'error' }),
//         new winston.transports.File({ filename: path.join('logs', 'combined.log') })
//     ]
// })

// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//         format: winston.format.simple()
//     }))
// }

// module.exports = logger
