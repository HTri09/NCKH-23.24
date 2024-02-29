const { Sequelize } = require('sequelize')

async function connect() {
    try {
        const db = await new Sequelize('postgres://postgres:Emhoclop12@3@localhost:5000/KhamPhaVanHoaVietNam', {
            logging: false
        })
        db.authenticate()
        console.log('Database connected !\n=== === === === === === === \n')
    } catch(error) {
        console.log(error)
    }
}

module.exports = connect

