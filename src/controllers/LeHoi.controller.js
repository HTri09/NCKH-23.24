const { LeHoi } = require('../models')
const { removeVietnameseTones } = require('../util/helperFunction')

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

    // [POST] /api/lehoi/:id
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
    },

    // [POST] /api/lehoi/searchByName
    getByName: async (req, res) => {
        const content = removeVietnameseTones(req.body.content)

        try {
            const data = JSON.stringify(await LeHoi.findAll())
            const leHoi = JSON.parse(data).filter(item => {
                removedTonesItem = removeVietnameseTones(item.ten) // Remove vietnamese tones from item's name
                return removedTonesItem.includes(content)
            })

            res.send(leHoi)

        } catch (error) {
            res.send(error.status)
            console.log(error)
        }
    }
}