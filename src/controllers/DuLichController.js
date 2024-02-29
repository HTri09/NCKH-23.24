const { DuLich } = require('../models')

module.exports = {
    // [GET] /api/dulich
    get: async (req, res) => {
        try {
            const data = await DuLich.findAll()
            res.json(data)
        } catch (err) {
            res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [GET] /api/dulich/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await DuLich.findOne({
                where: { id: params.id }
            })
            res.json(data)
        } catch(err) {
            res.json(err)
        }
    }
}