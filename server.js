
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose  = require('mongoose')

const EmployerRouter = require('./routers/router')

//Database connect
mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Establist')
})

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) 
app.use(cors())
app.use(morgan('dev'))

app.use('/uploads',express.static('uploads'))

app.get('/', (req, res) => {
    res.json({
        massage:"Welcome jahangir"
    })
})




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
})

app.use('/api', EmployerRouter)