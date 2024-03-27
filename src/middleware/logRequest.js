const fs = require('fs')
const path = require('path')

const logFilePath = path.join('logs', 'server.log')

// TODO: rotate log file after 24h

module.exports = {
    logRequest: (req, res, next) => {
        const logEntry = `${new Date().toISOString()} - ${req.ip} ${req.method} ${req.url}\n`;
        
        // Append log entry to the log file
        fs.appendFile(logFilePath, logEntry, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        }); 

        next();
    },
}
