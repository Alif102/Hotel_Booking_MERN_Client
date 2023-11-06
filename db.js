const mongoose = require('mongoose');
var mongoURL = 'mongodb+srv://alifahmed102:VSzix877BjOwXUQy@cluster0.30z9ip6.mongodb.net/Booking'
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})
var connection = mongoose.connection
connection.on('error', ()=>{
    console.log('mongo error')
})
connection.on('connected', ()=>{
    console.log('mongo success')
})
module.exports = mongoose