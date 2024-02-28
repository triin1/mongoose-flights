const Flight = require("../models/flight");

async function create(req, res) {
    // find the flight
    const flight = await Flight.findById(req.params.id);
    // create the destination information
    flight.destinations.push(req.body);
    //save the changes
    try {
        await flight.save();
    } catch (err) {
        console.log(err)
    };
    // redirect back to the same flight page
    res.redirect("/flights/" + req.params.id);
};

module.exports = {
    create
};