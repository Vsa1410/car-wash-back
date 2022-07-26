const express = require('express')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/car-wash',err => {
   if (err) return console.log(err)

   console.log('DB Conncted')
});
mongoose.Promise = global.Promise;

 const app = express();

const serviceRoute = require('./routes/newwash')

//Define os middlewares

app.use('/wash', serviceRoute)
 





 app.use(express.json());

 app.listen(3000, () => {
    console.log('Server Runing at port 3000')
 })


