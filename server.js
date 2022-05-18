require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api', require('./routes/orderRouter'))


const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected MongoDB")
})


const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT)
})