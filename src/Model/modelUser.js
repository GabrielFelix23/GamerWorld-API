const mongoose = require('../Config/config')
const Schema = mongoose.Schema

const SchemaUser = new Schema({
    macaddress:{
        type: String,
        required: true
    },
    avatar:{
        type: Number,
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
    imagePost:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    like:{
        type: Boolean
    },
    comment:{
        type: String
    },
    create:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('GamerUser', SchemaUser)