const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send('this is auth')

})

module.exports = router;
// export default router