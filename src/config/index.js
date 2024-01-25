const { Sequelize } = require('sequelize')

module.exports = async function connect() {
    try {
        const db = await new Sequelize('postgres://postgres:Emhoclop12@3@localhost:5000/KhamPhaVanHoaVietNam', {
            logging: false
        })
        db.authenticate()
        console.log('Database connected !')
    } catch(error) {
        console.log(error)
    }
}

