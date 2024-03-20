const express =require('express');
const app=express();
const router = express.Router();
const userDetails = require('../models/user')
const bcryptjs = require('bcryptjs')

router.post('/register' , async (req,res)=>{
    console.log(req.body);
    const hashpassword = await bcryptjs.hash(req.body.password,10)
    const theUser = await userDetails.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hashpassword
    })
    console.log(theUser);
    res.json({Username:theUser.name})
    // console.log('Inside backend register part');
    // const message = "sending fro backend";
    // res.json({message})
})
 
module.exports = router;