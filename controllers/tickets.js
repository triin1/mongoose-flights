const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
const flights = require("./flights");

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({});
    res.render("tickets/new", { flight, tickets, errorMsg: "" });
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    try { 
        const ticket = await Ticket.create(req.body);
        ticket.flight = flight;
        await ticket.save();
        res.redirect(`/flights/${flight._id}`)
    } catch(err) {
        console.log(err);
        res.render(`tickets/new`, { flight, errorMsg: err.message } )
    };
    
};

module.exports = {
    new: newTicket,
    create
};