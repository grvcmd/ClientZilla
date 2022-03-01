const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const axios = require('axios')
app.use(express.json()); // allows us to access req body as req.body



// Set up the mongoose DB connection
// .connect('mongodb://localhost/test')
mongoose
    .connect(process.env.MONGODB_CONNECTION_URL)
    .then(() => {
        console.log('Database connection success!')
    })
    .catch((err) => {
        console.error("MongoDB connection error", err)
    });
const port = process.env.PORT

// Routes for each model
const serviceRouter = require('./routes/services')
const programRouter = require('./routes/programs')
const intakeFormRouter = require('./routes/intakeForms')
const clientRouter = require('./routes/client')

// Every router created with serviceRouter will
// be added to the end of '/services'
app.use('/services', serviceRouter)

// Every router created with programRouter will
// be added to the end of '/programs'
app.use('/programs', programRouter)

// Every router created with intakeFormRouter will
// be added to the end of '/intakeforms'
app.use('/intakeforms', intakeFormRouter)

// This endpoint is for the homepage
app.get('/', (req, res) => {
    res.send('This is the homepage')
})

// Endpoint to GET data from external API
app.get('/clients', async(req, res) => {
    let apiURL = 'https://cis-4339.herokuapp.com/api/v1/data';
    try {
        const response = await axios.get(apiURL);
        res.status(200).json(response.data)
    }
    catch {
        res.status(500).json({ message: err });
    };
});

// Endpoint to GET a single client from external API
app.get('/clients/:first_name/:last_name/:phone_number', async(req, res) => {
    let apiURL = 'https://cis-4339.herokuapp.com/api/v1/data';
    const firstName = req.params.first_name
    const lastName = req.params.last_name
    const phoneNumber = req.params.phone_number
    // Log api with params to test if desired results are received
    console.log(`${apiURL}/${firstName}/${lastName}/${phoneNumber}`)
    try {
        const APIresponse = await axios.get(`${apiURL}/${firstName}/${lastName}/${phoneNumber}`);
        res.status(200).json(APIresponse.data)
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

// Server will start listening and log a message if OK
app.listen(port, () => {
  console.log("Server started listening on port.");
});


// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});