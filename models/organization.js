const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    orgID: {
        type: Number,
        required: true,
        unique: true
    },
    orgName: String,
    orgDesc: String
}, {
    collection: 'organizations',
    versionKey: false

});

module.exports = mongoose.model('Organization', organizationSchema)