const express = require('express')
const tacos = express.Router()

const Taco =  require('../models/taco.js')

tacos.get('/',(req,res) => {
  Taco.get({}, (err,foundTacos) => {
    res.json(foundTacos)

  })

})
module.exports = tacos
