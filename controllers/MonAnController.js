const { MonAn } = require('../models')

module.exports = {
    get: async (req, res) => {
        const data = await MonAn.findAll()
        res.send(data)
    },

    getById: async (req, res) => {
        const params = req.params
        console.log(params)
        const data = await MonAn.findAll({
            where: { id: params.id }
        })
        res.send(data)
    }
}