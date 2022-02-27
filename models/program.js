const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
    programID:{
        type: Number,
        required: true,
        unique: true
    },
    programName: String,
    programDesc: String

},{
    collection: 'programs',
    versionKey: false






});
module.exports = mongoose.model("Program", programSchema)