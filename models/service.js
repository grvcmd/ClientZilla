const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    serviceID: {
        type: Number,
        required: true,
        unique: true
    },
    // programID and clientID is a reference to another object based on the ID
    programID: mongoose.SchemaTypes.ObjectId,
    clientID: mongoose.SchemaTypes.ObjectId,
    serviceName: String,
    serviceDate: Date,
    ServiceAddress: {
        street: String,
        city: String,
        zip: String,
    },
    workerID: mongoose.SchemaTypes.ObjectId,
    numOfApplications: Number
}, {
    collection: 'services'
})
module.exports = mongoose.model ("Service", serviceSchema)