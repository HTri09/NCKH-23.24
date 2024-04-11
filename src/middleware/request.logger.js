const fs = require('fs')
const path = require('path')
const winston = require('winston')
const DailyRoatateFile = require('winston-daily-rotate-file')

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
        winston.format.colorize(),
    ),
    transports: [
        new DailyRoatateFile({
            filename: 'logs/%DATE%.server.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '1d'
        })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }))
}


// TODO: rotate log file after 24h

module.exports = (req, res, next) => {
    logger.info(`${req.ip} ${req.method} ${req.url}`);
    next();
}
