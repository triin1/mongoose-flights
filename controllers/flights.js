const Flight = require("../models/flight");

async function index (req, res) {
    const flights = await Flight.find({}).sort({ departs: "ascending"});
    res.render("flights/index", {flights: flights});
};

function newFlight (req, res) {
    res.render("flights/new", {errorMsg: ""});
};

async function create (req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    try {
        const result = await Flight.create(req.body)
        res.redirect("/flights");
    } catch (err) {
        console.log(err);
        res.render("flights/new", { errorMsg: err.message })
    };
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id); 
    res.render("flights/show", { flight: flight });
};

module.exports = {
    index,
    new: newFlight,
    create,
    show
};