const mongoose= require('../database')

const WasherSchema= new mogoose.Schema({
    name: {
        type: String,
        require: true,

    },
    cash:{
        type: Number,
        default: 0,


    },
    washsquantity:{
        type: Number
    }
})

const Washer = mongoose.model('Washer', WasherSchema)
module.exports = Washer