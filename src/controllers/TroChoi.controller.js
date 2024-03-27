const { TroChoi } = require('../models')
const { removeVietnameseTones } = require('../util/helperFunction')

module.exports = {
    // [GET] api/trochoi
    get: async (req, res) => {
        try {
            const data = await TroChoi.findAll()
            res.json(data)
        } catch (err) {
            res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [POST] api/trochoi/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await TroChoi.findOne({
                where: { id: params.id }
            })
            res.json(data)
        } catch(err) {
            res.json(err)
        }
    },

    // [POST] api/trochoi/getByName
    getByName: async (req, res) => {
        const content = removeVietnameseTones(req.body.content)

        try {
            const data = JSON.stringify(await TroChoi.findAll())
            const troChoi = JSON.parse(data).filter(item => {
                removedTonesItem = removeVietnameseTones(item.ten) // Remove vietnamese tones from item's name
                return removedTonesItem.includes(content)
            })

            res.send(troChoi)

        } catch (error) {
            res.send(error.status)
            console.log(error)
        }
    }
}