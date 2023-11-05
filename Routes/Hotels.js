const express = require('express');
const HotelModel = require('../models/Hotel');
// const { default: Hotel } = require('../models/Hotel');
const router = express.Router();


router.post('/', async (req,res)=>{
    // res.send('this is hotels')
    const newHotel = new HotelModel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        
    } catch (error) {
        res.status(500).json(error)
    }

})


// Update

router.put('/:id', async (req,res)=>{
    try {
        const UpdateHotel = await HotelModel.findByIdAndUpdate
        (req.params.id , 
            {$set : req.body},
            {new: true}
        );
        res.status(200).json(UpdateHotel);
        
    } catch (error) {
        res.status(500).json(error)
    }

})


// Delete 
router.delete('/:id', async (req,res)=>{
    try {
         await HotelModel.findByIdAndDelete
        (req.params.id);
        res.status(200).json('hotel deleted');
        
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router;
// export default router