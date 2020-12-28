// const router = require('express').Router()
// const burger = require('../models/burger.js')


// router.get('/burgers', (req, res) =>
//  burger.all(burgers =>
//   res.render('index', { burgers })))

// router.post('/burgers', (req, res) =>
//  burger.create(req.body, () =>
//   res.sendStatus(200)))

// router.put('/burgers/:id', (req, res) =>
//  burger.update(req.body, req.params.id, () =>
//   res.sendStatus(200)))

// router.delete('/burgers/:id', (req, res) =>
//  burger.delete(req.params.id, () =>
//   res.sendStatus(200)))

// module.exports = router

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function (req, res) {
  burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
