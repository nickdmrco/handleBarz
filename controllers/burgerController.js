const router = require('express').Router()
const burger = require('../models/burger.js')


router.get('/burgers', (req, res) =>
 burger.selectAll(burgers =>
  res.render('index', { burgers })))

router.post('/burgers', (req, res) =>
 burger.insertOne(req.body, () =>
  res.sendStatus(200)))

router.put('/burgers/:id', (req, res) =>
 burger.updateOne(req.body, req.params.id, () =>
  res.sendStatus(200)))

router.delete('/burgers/:id', (req, res) =>
 burger.deleteOne(req.params.id, () =>
  res.sendStatus(200)))

module.exports = router