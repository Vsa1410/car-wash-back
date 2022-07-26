const mongoose = require('../database');

const ServiceSchema = mongoose.Schema({
    userName:{
        type: String,
        require: true,

    },
    date: {
        type:Date,
        
    },
    clientName:{
        type: String,

    },
    servicePrice:{
        type: Number
    },
    paid:{
        type:Boolean
    }
})

const Service = mongoose.model('Service', ServiceSchema)

module.exports = Service