const express = require('express')
const tacos = express.Router()
const tacoSeed =require('../models/taco_seed.js')

const Taco =  require('../models/taco.js')


// Read
tacos.get('/',(req,res) => {
  Taco.find({}, (err,foundTacos) => {
    res.json(foundTacos)
  })
})

// Create
  tacos.post('/', (req,res) => {
    Taco.create(req.body, (error, createdTacos) => {
      Taco.find({}, (error, foundTacos) => {
        res.json(foundTacos)
      })
    })
  })

//Update
tacos.put('/:id', (req, res) => {
  Taco.findByIdAndUpdate(
    req.params.id, req.body, { new: true },
    (err, updatedTacos) => {
      if (err) { res.send(err) } else {
        Taco.find({}, (err, foundTacos) => {
          res.json(foundTacos)
        })
      }
    }
  )
})
//Seed
tacos.get('/seed',(req,res) => {
  Taco.insertMany(tacoSeed,(err,manyTacos) => {
    res.redirect('/')
  })
})

// Drop
tacos.get('/drop',(req,res) => {
  Taco.collection.drop()
  res.redirect('/')

})
// Delete
  tacos.delete('/:id', (req, res) => {
    Taco.findByIdAndRemove(req.params.id, (err, deletedTacos) => {
      Taco.find({}, (err, foundTacos) => {
        res.json(foundTacos)
      })
    })
  })



module.exports = tacos
