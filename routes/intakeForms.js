// All routes related to intake forms

const express = require('express')

// Router gives lets us create views with the same
// functionality as app.get()
const router = express.Router()

// import intakeform model
const IntakeFormModel = require('./../models/intakeForm')

// endpoint to get all intake forms
router.get('/', (req, res, next) => {
    console.log('currently in /intakeforms')
    IntakeFormModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// endpoint to get an intake form by clientID
// ** It can't work with clientID bc the UUID property changes it every request
// So the ObjectId is being used temporarily
router.get('/:clientID', (req, res, next) => {
    console.log(`Getting intake form with clientID of ${req.params.clientID}`)
    IntakeFormModel.findOne({ clientID: req.params.clientID }, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Intake form not found')
        } else {
            res.json(data)
        }
    })
})

// endpoint to delete an intakeform by clientID
// ** It can't work with clientID bc the UUID property changes it every request
// So the ObjectId is being used temporarily
router.delete('/:id', (req, res, next) => {
    IntakeFormModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// endpoint for creating an intakeform
router.post('/', (req, res, next) => {
    IntakeFormModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('New intake form created')
        }
    })
})

// endpoint for updating an intakeform
// ** It can't work with clientID bc the UUID property changes it every request
// So the ObjectId is being used temporarily
router.put('/:clientID', (req, res, next) => {
    console.log(`Updating intake form with clientID of ${req.params.clientID}`)
    IntakeFormModel.findOneAndUpdate({ clientID: req.params.clientID }, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Intake form was updated')
        }
    })
})

module.exports = router