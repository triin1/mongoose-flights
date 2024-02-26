const mongoose = require("mongoose");

// optional shortcut
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    arrivalAirport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "PHX", "LHR"]
    },
    arrival: Date
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ["American", "Southwest", "United", "Delta"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "PHX"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now() + 365*24*60*60000,
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model("Flight", flightSchema);