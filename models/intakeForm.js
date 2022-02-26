// Intake Form Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid')


// Schema for new clients to fill out
// Might change it into a 'Client' schema in the future
const intakeFormSchema = new Schema({
    clientID: {
        type: String,
        default: uuid.v1,
        required: true
    },
    orgsWorkedWith: {
        type: [String],
        required: true
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    age: {
        type: Number,
        min: 18,
    },
    gender: String,
    ssn: String,
    isVaccinated: Boolean,
    isVeteran: Boolean,
    numOfDependants: Number,
    createdAt: {
        type: Date,
        immutable: true, // can't change createdAt date
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
}, {
    collection: 'intakeforms'
});

module.exports = mongoose.model("intakeForm", intakeFormSchema)