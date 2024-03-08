const { DuLich } = require('../models')
const { removeVietnameseTones } = require('../helper/helperFunction')


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
    },

    // [POST] /api/dulich/searchByName
    getByName: async (req, res) => {
        const content = removeVietnameseTones(req.body.content)

        try {
            const data = JSON.stringify(await DuLich.findAll())
            const duLich = JSON.parse(data).filter(item => {
                removedTonesItem = removeVietnameseTones(item.ten) // Remove vietnamese tones from item's name
                return removedTonesItem.includes(content)
            })

            res.send(duLich)

        } catch (error) {
            res.send(error.status)
            console.log(error)
        }
    }
}