// Depdencies
const express= require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// MiddleWare
app.use(express.json())
app.use(express.static('public'))

//Controller Link
const tacoController = require('./controllers/taco_controller.js')
app.use('/taco', tacoController)


// Random Mongo Stuff
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
// Error/
mongoose.connection.on('error', (err) =>
  console.log(
    err.message,
    'is mongod not running/Problem with atlas connection?'
  )
)
// Connection/Disconnection
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))



// Listener
app.listen(PORT,() => {
  console.log(`listening on port${PORT}`);
})
