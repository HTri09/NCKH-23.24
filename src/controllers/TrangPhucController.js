const { TrangPhuc } = require('../models')

module.exports = {
    // [GET] /api/trangphuc
    get: async (req, res) => {
        try {
            const data = await TrangPhuc.findAll()
            res.json(data)
        } catch (err) {
            res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [GET] /api/trangphuc/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await TrangPhuc.findOne({
                where: { id: params.id }
            })
            res.json(data)
        } catch(err) {
            res.json(err)
        }
    }
}