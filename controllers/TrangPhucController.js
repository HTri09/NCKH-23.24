const { TrangPhuc } = require('../models')

module.exports = {
    get: async (req, res) => {
        const data = await TrangPhuc.findAll()
        res.send(data)
    },

    getById: async (req, res) => {
        const params = req.params
        console.log(params)
        const data = await TrangPhuc.findAll({
            where: { id: params.id }
        })
        res.send(data)
    }
}