const Flight = require("../models/flight");

async function create(req, res) {
    // find the flight
    const flight = await Flight.findById(req.params.id);

    const sorted = await Flight.find({}).sort( {arrival: "ascending"} );
    // create the destination infromtion
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