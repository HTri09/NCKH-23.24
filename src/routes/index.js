const monAnRouter = require('./MonAn.js')
const trangPhucRouter = require('./TrangPhuc.js')
const troChoiRouter = require('./TroChoi.js')
const leHoiRouter = require('./LeHoi.js')
const duLichRouter = require('./DuLich.js')

module.exports = (app) => {
    app.use('/api/monan', monAnRouter)
    app.use('/api/trangphuc', trangPhucRouter)
    app.use('/api/trochoi', troChoiRouter)
    app.use('/api/lehoi', leHoiRouter)
    app.use('/api/dulich', duLichRouter)


    app.use('/', (req, res) => {
        res.send('HELLO WORLD')
    })
}
