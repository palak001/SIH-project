const mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type:String,
        required: true
    },
    locality: {
        type:String,
        required: true
    },
    crime_type: {
        type:String,
        required: true
    },    
    crime_spot: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    contact: {
        type:Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Victim = mongoose.model('Victim', victimSchema);
module.exports = Victim;