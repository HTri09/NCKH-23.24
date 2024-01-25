const { TroChoi } = require('../models')

module.exports = {
    get: async (req, res) => {
        try {
            const data = await TroChoi.findAll()
            return res.json(data)
        } catch (err) {
            return res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await TroChoi.findOne({
                where: { id: params.id }
            })
            return res.json(data)
        } catch(err) {
            return res.json(err)
        }
    }
}