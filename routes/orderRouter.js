const router = require('express').Router()
const orderCtrl = require('../controllers/orderCtrl')

router.route('/order')
    .get(orderCtrl.getOrders)
    .post(orderCtrl.orderPlace)

router.route('/order/:id')
    .delete(orderCtrl.removeOrder)
    .put(orderCtrl.updateOrder)

module.exports = router