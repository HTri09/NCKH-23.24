const monAnRouter = require('./MonAn.router.js')
const trangPhucRouter = require('./TrangPhuc.router.js')
const troChoiRouter = require('./TroChoi.router.js')
const leHoiRouter = require('./LeHoi.router.js')
const duLichRouter = require('./DuLich.router.js')
const featureRouter = require('./Feature.router.js')
const imgRouter = require('./image.router.js')

module.exports = (app) => {
    app.use('/api/monan', monAnRouter)
    app.use('/api/trangphuc', trangPhucRouter)
    app.use('/api/trochoi', troChoiRouter)
    app.use('/api/lehoi', leHoiRouter)
    app.use('/api/dulich', duLichRouter)
    app.use('/api', featureRouter)
    app.use('/api/image', imgRouter)

    app.use('/', (req, res) => {
        res.send('HELLO WORLD')
    })
}
