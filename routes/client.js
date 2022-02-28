//routes for the external api clients
const express = require('express')
const router = express.Router()

//don't need an import since it's an external api?

// api that will fetch data from the external api 
//using the await function 
router.get('/async', async (req, res, next) => {
    let apiURL= 'https://cis-4339.herokuapp.com/api/v1/data'
    try{
        const response = await axios.get(apiURL);
        res.status(200).json(response.data);

    } catch(err){
        res.status(500).json({message: err});
    }

});
//TODO:promise function