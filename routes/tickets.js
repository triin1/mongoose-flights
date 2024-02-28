var express = require('express');
var router = express.Router();

const ticketsController = require("../controllers/tickets");

// GET /flights/:id/tickets/new
router.get("/flights/:id/tickets/new", ticketsController.new);

// POST /flights/:id/tickets
router.post("/flights/:id/tickets", ticketsController.create);

module.exports = router;

