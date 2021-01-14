const mongoose = require('mongoose')


const tacoSchema = new mongoose.Schema({
  name:{type:String, required:true},
  vegtables:String,
  meat:String,

})

const Taco = mongoose.model('Taco',tacoSchema)

module.exports =Taco
