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
app.get('/api/trucks', db.getTrucks)
app.post('/api/truck/new', db.createTruck)
app.post('/api/truck/update', db.updateTruck)
app.delete('/api/truck/delete', db.deleteTruck)

/* driver routes */
app.get('/api/drivers', db.getAllDrivers)
app.post('/api/driver/new', db.createDriver)
app.post('/api/driver/update', db.updateDriver)
app.delete('/api/driver/delete', db.deleteDriver)

/* lane routes */
app.get('/api/lanes', db.getLanes)
app.post('/api/lane/new', db.createLane)
app.post('/api/lane/update', db.updateLane)
app.delete('/api/lane/:id', db.deleteLane)


app.get('/', (request, response) => {
    response.json({
        message: 'nothing to see here'
    })
})



