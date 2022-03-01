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
// endpoint for deleting a service by serviceID
router.delete('/:id', (req, res, next) => {
    ServiceModel.findOneAndRemove ({ serviceID: req.params.id}, (error,data) => {
        if (error){
            return next (error)
        } else {
            res.status(200).json ({
                msg: data
            })
        }
    })
})
//endpoint for creating a service document
router.post ('/', (req, res, next) => {
    ServiceModel.create(req.body, (error, data) => {
        if (error) {
            return next (error)
        } else {
            res.send('Service was added to the database')
        }
    })
})
//endpoint for updating (editing) a service 
router.put ('/:id', (req, res, next) => {
    ServiceModel.findOneAndUpdate({ serviceID: req.params.id }, {$set: req.body}, (error, data) => {
        if (error) {
            return next (error)
        } else {
            res.send('Service was edited via PUT')
            console.log('Service successfully updated', data)
        }
    })
})

module.exports = router 