const mongoose = require('../Config/config')
const Schema = mongoose.Schema

const SchemaPost = new Schema({
    macaddress:{
        type: String,
        required: true
    }, 
    image:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    create:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('GamerPost', SchemaPost)