const { MonAn } = require('../models')

module.exports = {
    // [GET] /api/monan
    get: async (req, res) => {
        try {
            const data = await MonAn.findAll()
            res.json(data)
        } catch (err) {
            res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [GET] /api/monan/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await MonAn.findOne({
                where: { id: params.id }
            })
            res.json(data)
        } catch(err) {
            res.json(err)
        }
    }
}