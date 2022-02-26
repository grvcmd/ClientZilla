const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json()) // allows us to access req body as req.body

// Set up the mongoose DB connection
// .connect('mongodb://localhost/test')
mongoose
    .connect('mongodb+srv://userKen:ken123@cluster0.azb0e.mongodb.net/CIS4339DB?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database connection success!')
    })
    .catch((err) => {
        console.error("MongoDB connection error", err)
    });
const port = 3000

// Routes for each model
// const serviceRouter = require('./routes/services')
// const programRouter = require('./routes/programs')
const intakeFormRouter = require('./routes/intakeForms')

// Every router created with serviceRouter will
// be added to the end of '/services'
// app.use('/services', serviceRouter)

// Every router created with programRouter will
// be added to the end of '/programs'
// app.use('/programs', programRouter)

// Every router created with intakeFormRouter will
// be added to the end of '/intakeforms'
app.use('/intakeforms', intakeFormRouter)

// This endpoint is for the homepage
app.get('/', (req, res) => {
    res.send('This is the homepage')
})

// Server will start listening and log a message if OK
app.listen(port, () => {
  console.log("Server started listening on port : ", port);
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});