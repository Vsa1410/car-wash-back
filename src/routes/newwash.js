const express = require('express')

const Service = require('../models/newservice');

const router = express.Router();

//Retorna os livros

router.get('/',(req,res) => {
    Service.find({ }, (err,washes)=>{
        
        if(err) res.status(400).send(err)
        
        res.send(washes)
    })
})

router.post('/add',  function (req,res) {
    const { userName,date,clientName,servicePrice,paid} = {...req.body}
    

    const wash = new Service({
        userName,
        date,
        clientName,
        servicePrice,
        paid

    })


    wash.save()
    .catch(err => res.status(400).send(err))
    .then(() => res.send({wash}))
    
})
module.exports = router