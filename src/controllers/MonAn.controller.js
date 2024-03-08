const { MonAn } = require('../models')
const { removeVietnameseTones } = require('../helper/helperFunction')
const { response } = require('express')

module.exports = {
    // [GET] /api/monan
    get: async (req, res) => {
        try {
            const data = await MonAn.findAll()
            console.log('success')
            res.json(data)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [POST] /api/monan/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await MonAn.findOne({
                where: { id: params.id }
            })
            res.json(data)
        } catch (err) {
            res.json(err)
        }
    },

    // [POST] /api/monan/searchByName
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