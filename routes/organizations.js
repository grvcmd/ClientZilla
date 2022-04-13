const express = require('express');
const router = express.Router();

// Import Organization model
const OrgModel = require('./../models/organization')

// Endpoint to get all organizations
router.get('/', (req, res, next) => {
    console.log('currently in /organizations')
    OrgModel.find((error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})


// Endpoint to GET org by orgID
router.get('/:orgID', (req, res, next) => {
    console.log(`GETTING org with orgID: ${req.params.orgID}`)
    OrgModel.findOne({orgID: req.params.orgID}, (error ,data) => {
        if (error) {
            return next(error)
        }
        else if (data === null) {
            res.status(404).send('Program not found')
        }
        else {
            res.json(data)
        }
    })
});

// Endpoint to DELETE org by orgID
router.delete('/:orgID', (req, res, next) => {
    console.log(`DELETING org with orgID: ${req.params.orgID}`)
    OrgModel.findOneAndRemove({orgID: req.params.orgID}, (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.status(200).json({msg:data})
        }
    })
});


// Endpoint to POST an org
router.post('/', (req, res, next) => {
    OrgModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(`POSTING organization to the database`)
            res.send('Organization was added to the database')
            console.log(data)
        }
    })
});

// Endpoint to PUT an existing org
router.put('/:orgID', (req, res, next) => {
    OrgModel.findOneAndUpdate({ orgID: req.params.orgID }, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } 
        else {
            console.log(`PUTTING (editing) org with orgID: ${req.params.orgID}`)
            res.send('Organization was edited')
        }
    })
});

// AGGREGATION endpoint to GET all programs that an organization has
router.get('/organization-program/:orgID', (req, res, next) => {
    OrgModel.aggregate([
        // Cast req.param.orgID to a Number type
        // bc req.params.orgID default datatype is String
        { $match: {orgID: Number(req.params.orgID)} },
        { $project: { _id: 0, orgID: 1, orgName: 1, orgDesc: 1} },
        { $lookup: {
            from: 'programs',
            localField: 'orgID',
            foreignField: 'orgID',
            as: 'Current programs'
        } }
    ], (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});


module.exports = router