const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');

const Client = require('../Model/Client');


router.post('/',
[
    check('name',"Enter Your Full Name")
    .not()
    .isEmpty(),
    check('email','Enter a Valid Email')
    .isEmail(),
    check('phone','Enter Your Phone Number')
    .not()
    .isEmpty(),
    check('city','Enter Your City')
    .not()
    .isEmpty(),
    check('memborship','Enter Your Memborship')
    .not()
    .isEmpty(),
    check('age','Enter Your Age')
    .not()
    .isEmpty()
],
async(req,res)=>{
    //Checking Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors:errors.array()
        });
    }

    const {name,email,phone,city,memborship,age} = req.body;

    client = new Client({
        name,
        email,
        phone,
        city,
        memborship,
        age
    });

    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({message:error.message});
    }

});


router.get('/',async(req,res)=>{
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('server Error');
    }
});


module.exports = router;
