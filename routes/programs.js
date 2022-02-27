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

// created api to get a program by programID
router.get('/:id',(req, res, next) => {
    console.log('Getting program with ProgramID: ${req.params.id}')

    //error handling 
    ProgramModel.findOne({programID: req.params.id}, (error, data) => {
        if (error){
            return next (error)
        } else if (data === null) {
            res.status(404).send('Program not found')
        } else {
            res.json(data)
        }
        
    })
});