const mongoose = require('../Config/config')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    macaddress:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    create:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('GamerUser', TaskSchema)