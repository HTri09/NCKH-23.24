const { LeHoi } = require('../models')
const { removeVietnameseTones } = require('../helper/helperFunction')

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
    },

    // [POST] /api/lehoi/searchByName
    getByName: async (req, res) => {
        const content = removeVietnameseTones(req.body.content)

        try {
            const data = JSON.stringify(await MonAn.findAll())
            const monAn = JSON.parse(data).filter(item => {
                removedTonesItem = removeVietnameseTones(item.ten) // Remove vietnamese tones from item's name
                return removedTonesItem.includes(content)
            })

            res.send(monAn)

        } catch (error) {
            res.send(error.status)
            console.log(error)
        }
    }
}