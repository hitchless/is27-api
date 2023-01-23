const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const db = require('./queries')
const app = express()

const port = 3003

app.use(bodyParser.urlencoded({ extended: true }));           
app.use(bodyParser.json())

app.use(methodOverride("_method"))
app.use(cors())

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


/* truck routes */
app.get('/api/trucks', db.getTrucks) // WORKS
app.post('/api/truck/new', db.createTruck) // post is create WORKS
app.post('/api/truck/update', db.updateTruck) // put is update WORKS
app.delete('/api/truck/delete', db.deleteTruck) // WORKS

/* driver routes */
app.get('/api/drivers', db.getAllDrivers) // WORKS
app.post('/api/driver/new', db.createDriver) // post is create WORKS
app.post('/api/driver/update', db.updateDriver) // put is update WORKS
app.delete('/api/driver/delete', db.deleteDriver) // WORKS

/* lane routes */
app.get('/api/lanes', db.getLanes) // WORKS
app.post('/api/lane/new', db.createLane) // post is create WORKS
app.post('/api/lane/update', db.updateLane) // put is update WORKS
app.delete('/api/lane/:id', db.deleteLane) // WORKS


app.get('/', (request, response) => {
    response.json({
        message: 'nothing to see here'
    })
})



