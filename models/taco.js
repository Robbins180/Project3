const mongoose = require('mongoose')


const tacoSchema = new mongoose.Schema({

  name:{ type: String, required:true },

  vegtables: Boolean /*{ onion: Boolean,
               peppers:Boolean,
               tomatoe:Boolean

     }*/,
  meat: Boolean/*{ steak:Boolean,
          pork:Boolean,
          carnitas:Boolean,
          shrimp:Boolean
  }*/,
  topping:Boolean/*{ sourcream:Boolean,
          guacamole:Boolean,
          picodegajo:Boolean,
          salsa:Boolean,
          queso:Boolean
  }*/,
  image: String
})

const Taco = mongoose.model('Taco',tacoSchema)

module.exports =Taco
