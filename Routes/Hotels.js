const express = require('express');
const HotelModel = require('../models/Hotel.js');
const { createHotel, updateHotel, deleteHotel, getHotel } = require('../controllers/hotels.js');
// const { default: Hotel } = require('../models/Hotel');
const router = express.Router();


router.post('/', createHotel )


// Update

router.put('/:id', updateHotel)


// Delete 
router.delete('/:id', deleteHotel)

// Get
router.get('/:id', getHotel)

// Get All
router.get('/', async (req,res)=>{
    try {
        const hotels = await HotelModel.find()
        res.status(200).json(hotels);
        
    } catch (error) {
        res.status(500).json(error)
    }

})


module.exports = router;
// export default router