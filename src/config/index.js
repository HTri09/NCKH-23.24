const { Sequelize } = require('sequelize')

async function connect() {
    try {
        const db = new Sequelize('postgres://postgres:Emhoclop12@3@localhost:5000/KhamPhaVanHoaVietNam', {
            logging: false
        })
        await db.authenticate()
        console.log('Database connected !\n=== === === === === === === \n')
    } catch(error) {
        console.log(error)
    }
}

module.exports = connect

