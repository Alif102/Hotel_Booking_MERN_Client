const express = require('express');
const RoomModel = require('../models/Room');
const router = express.Router();


router.get('/getallrooms', async (req,res)=>{
    try {
        const rooms = await RoomModel.find({});
        // return res.json({rooms})
        res.send(rooms)

    } catch (error) {
        return res.status(400).json({message : error})
    }

})

module.exports = router;
// export default router