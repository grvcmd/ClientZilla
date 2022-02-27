const express = require ('express');
const router = express.Router()

// importing program model from the models dir
const ProgramModel = require ('./../models/program')

// created API to get all programs 
router.get('/', (req,res,next )=>{
    console.log('currently in/programs')
    // error handling 
    ProgramModel.find((error, data) => {
        if (error,data){
            return next (error)
        } else {
            res.json(data)
        }
    })
});