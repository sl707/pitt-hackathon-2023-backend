const mongoose = require('mongoose');
const express = require('express')
const { createServer } = require('http')
const path = require('path')
const cors = require('cors')

const RouteRouter = require('./routes')

const app = express()
app.use(cors())

const uri = "mongodb+srv://asdf:asdf@cluster0.yvejd44.mongodb.net/Cluster0?retryWrites=true&w=majority";


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.static('dist'))

app.use(express.json())

app.use('/server', RouteRouter)

app.use((err, req, res, next) => {
  res.status(200).send(err.msg)
})


app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + "/public/" + "index.html" )
// })

const httpserver = createServer(app)

httpserver.listen(3000, () => {
  console.log('Listening on port 3000...')
})