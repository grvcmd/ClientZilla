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
//endpoint to get a service by serviceID
router.get ('/:id', (req, res, next) => {
    console.log('Getting service with serviceID of ${req.params.id}')

    ServiceModel.findOne ({ serviceID: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Service not found')
        } else {
            res.json(data)
        }
    })
})