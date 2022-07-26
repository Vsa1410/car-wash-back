const express = require('express')

const mongoose = require('mongoose')


const app = express();
 app.use(express.json());

 mongoose.connect('mongodb://localhost:27017/car-wash' , err => {
    if(err) return console.log(err)

    console.log("DB Connected")
 })

 const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true 
    },
    clientName: {
        type:String,
        required: true
    },
    servicePrice:{
        type: Number
    },
    servicePaid:{
        type: Boolean
    }
 })
 const Model = mongoose.model('service', serviceSchema)

 app.get("/washes", (req,res) =>{

    Model.find({ }, (err, books) =>{
        if(err) return res.status(400).send(err)

        res.send(books)
    })
 })

 app.post('/add', async (req,res) =>{
    const {name, date, clientName, servicePrice, servicePaid} = req.body;

    const newWash = new Model({
        name, 
        date, 
        clientName, 
        servicePrice, 
        servicePaid
    })
    newWash.save()
    .then(console.log("sucess"))

 })

app.listen(3000, ()=>{
    console.log('Server running!!')
})
