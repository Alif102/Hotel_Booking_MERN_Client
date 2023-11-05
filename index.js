const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express(); 
const authRouter = require('./Routes/Auth.js');
const usersRouter = require('./Routes/Users.js');
const roomsRouter = require('./Routes/Rooms.js');
const hotelsRouter = require('./Routes/Hotels.js');

const port = process.env.PORT || 5000; 


// middleware

app.use(cors());
app.use(express.json());


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('mongo connect')
    } catch (error) {
        throw error
        
    }
}

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });






app.use('/auth', authRouter);

app.use('/users', usersRouter);

app.use('/hotels', hotelsRouter);

app.use('/rooms', roomsRouter);


app.get('/', (req,res)=> {
    res.send('Hotel Booking server is running')

})

app.listen(port, ()=> {
    connect();
    console.log(`Hotel Booking server running on port : ${port}`)
})