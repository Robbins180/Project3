const mongoose = require('mongoose')

const tacoSchema = new mongoose.Schema({

            name:{ type: String, required:true },
            onion:{type:Boolean, default:false},
            pepper: {type:Boolean, default:false},
            tomato: {type:Boolean, default:false},
            pork: {type:Boolean, default:false},
            carnita:{type:Boolean, default:false},
            shrimp:{type:Boolean, default:false},
            sourcream:{type:Boolean, default:false},
            guacamole:{type:Boolean, default:false},
            salsa:{type:Boolean, default:false},
            queso:{type:Boolean, default:false},
            image: String
})

const Taco = mongoose.model('Taco',tacoSchema)

module.exports =Taco
