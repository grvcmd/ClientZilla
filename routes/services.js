//All routes related to services
const express = require ('express')
//Router gives lets us create views with the same
//functionaliry as app.get()
const router = express.Router()

//import service model
const ServiceModel = require('./../models/service')

//endpoint to get all services from the API
router.get ('/', (req, res, next) => {
    console.log('Currently in /services')
    // Get all collection data using the mongoose schema
    ServiceModel.find((error, date) => {
        if (error) {
            return next (error)
         } else {
             res.json(data)
         }
    })
})