const fs = require('fs')
const path = require('path')
const winston = require('winston')

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: path.join('logs', 'server.log') })
    ]
});

// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//         format: winston.format.simple(),
//     }));
// }


// TODO: rotate log file after 24h

module.exports = (req, res, next) => {
    logger.info(`${req.ip} ${req.method} ${req.url}`);
    next();
}
