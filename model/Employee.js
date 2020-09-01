
const mongoose = require('mongoose')
const Shema = mongoose.Schema


const employerShema = new Shema({
    name: {
        type: String
    },
    destignation:{
        type:String
    },
    email: {
        type:String
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    avatar: {
        type:String
    }
}, { timestamps: true })

const Employer = mongoose.model('Employer', employerShema)
module.exports = Employer