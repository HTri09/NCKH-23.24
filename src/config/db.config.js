const { Sequelize } = require('sequelize')
const logger = require('../utils/errorLogger')
const config = require('./config.json')[process.env.NODE_ENV || 'development']


async function connect() {
    try {
        const db = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            port: config.port,
            logging: false,
            timezone: config.timezone
        })
        db.authenticate()
        console.log('Database connected !\n=== === === === === === === \n')
    } catch(error) {
        logger.error(`Database connection failure: ${error.message}`)
    }
}

module.exports = connect

