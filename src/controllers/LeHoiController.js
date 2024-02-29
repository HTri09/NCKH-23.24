const { LeHoi } = require('../models')

module.exports = {
    // [GET] /api/lehoi
    get: async (req, res) => {
        try {
            const data = await LeHoi.findAll()
            res.json(data)
        } catch (err) {
            res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [GET] /api/lehoi/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await LeHoi.findOne({
                where: { id: params.id }
            })
            res.json(data)
        } catch(err) {
            res.json(err)
        }
    }
}