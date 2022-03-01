//routes for the external api clients
const express = require('express')
const router = express.Router()

const axios = require('axios')

//don't need an import since it's an external api?

// api that will fetch data from the external api 
//using the await function 
router.get('/async', async (req, res, next) => {
    let apiURL= 'https://cis-4339.herokuapp.com/api/v1/data';
    try{
        const response = await axios.get(apiURL);
        res.status(200).json(response.data);

    } catch(err){
        res.status(500).json({message: err});
    }

});

//I also tried doing a different way of doing it below 

// router.get('/data', (req, res, next) => {
//     axios.get('https://cis-4339.herokuapp.com/api/v1/data')
//     .then((response) =>{

//         console.log(response);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
//     try{
//     const response = await axios.get(apiURL);
//     res.status(200).json(response.data);

//     } catch(err){
//         res.status(500).json({message: err});
//     }

// });

//https://cis-4339.herokuapp.com/api/v1/data/Fiona/Smith/987-3595-89
// api to get name,lastname, phone as params 
router.get('/get/allparams/:first_name/:last_name/:phone_number', (req, res, next) => {
    let apiURL= `https://cis-4339.herokuapp.com/api/v1/data/${first_name}/${last_name}/${phone_number}`;
    try{
        const response = await axios.get(apiURL);
        res.status(200).json(response.data);

    } catch(err){
        res.status(500).json({message: err});
    }

});
module.exports = router;