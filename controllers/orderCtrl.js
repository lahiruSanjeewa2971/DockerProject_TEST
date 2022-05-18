const Order = require('../models/order')
const orderCtrl = {
    getOrders: async(req, res) => {
        try {
            const orders = await Order.find()
            res.json(orders)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    orderPlace: async(req, res) => {
        try {
            const {
                customer_id,
                product_id,
                qty,
                totalPrice,
                deliveryAddress
            } = req.body;

            const newOrder = new Order({
                customer_id,
                product_id,
                qty,
                totalPrice,
                deliveryAddress
            })
            await newOrder.save()

            res.json({msg: "Order Placed."})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    removeOrder: async(req, res) => {
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.json({msg: "Order Removed."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateOrder: async (req, res) => {
        try {
            const {
                qty,
                totalPrice,
                deliveryAddress
            } = req.body;

            await Order.findOneAndUpdate({_id: req.params.id}, {
                qty,
                totalPrice,
                deliveryAddress
            })

            res.json({msg: "Order Updated."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
module.exports = orderCtrl