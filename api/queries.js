const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'db.auumazdopwgqqfqdwouo.supabase.co',
    database: 'postgres',
    password: 'FULLST4ck!!',
    port: 5432,
})


/* *********************************** */
/* ********* truck functions ********* */
/* *********************************** */

/* =========currently working========= */
const getTrucks = (request, response) => {
    pool.query('SELECT * FROM trucks ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
/* ========currently working========== */
const createTruck = (request, response) => {
  const { driver, status } = request.body

  pool.query('INSERT INTO trucks (driver, status) VALUES ($1, $2)', [driver, status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Truck added`)
    //response.redirect('https://is27-font-end.vercel.app')
  })
}
/* ========= currently working ... but only as body JSON, not sure how to make that work in the application ========= */
const updateTruck = (request, response) => {
  const id = request.body.id
  const driver = request.body.driver
  const status = request.body.status
  pool.query(
    'UPDATE trucks SET driver = $1, status = $2 WHERE id = $3',
    [driver, status, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Truck modified with ID: ${id}`)
      //response.redirect('https://is27-font-end.vercel.app')
    }
  )
}
/* =========currently working========= */
const deleteTruck = (request, response) => {
    const id = request.body.id
    pool.query('DELETE FROM trucks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Truck deleted with ID: ${id}`)
        //response.redirect('https://is27-font-end.vercel.app')
    })
}
/* ================== */


/* *********************************** */
/* ********* driver functions ********* */
/* *********************************** */

/* =========currently working========= */
const getAllDrivers = (request, response) => {
    pool.query('SELECT * FROM drivers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
/* ========currently working========== */
const createDriver = (request, response) => {
  const display_name = request.body.display_name
  pool.query('INSERT INTO drivers (display_name) VALUES ($1)', [display_name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Driver added`)
    //response.redirect('https://is27-font-end.vercel.app')
  })
}
/* ========= currently working  ========= */
const updateDriver = (request, response) => {
  const id = request.body.id
  const driver = request.body.driver
  const status = request.body.status
  pool.query(
    'UPDATE drivers SET driver = $1, status = $2 WHERE id = $3',
    [driver, status, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Truck modified with ID: ${id}`)
      //response.redirect('https://is27-font-end.vercel.app')
    }
  )
}
/* =========currently working========= */
const deleteDriver = (request, response) => {
    const display_name = request.body.display_name
    pool.query('DELETE FROM drivers WHERE display_name = $1', [display_name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Driver deleted with display name: ${display_name}`)
    })
}
/* ================== */

/* ********************************** */
/* ********* lane functions ********* */
/* ********************************** */

/* =========currently working========= */
const getLanes = (request, response) => {
    pool.query('SELECT * FROM lanes ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
/* ========currently working========== */
const createLane = (request, response) => {
  const { driver, status } = request.body

  pool.query('INSERT INTO lanes (driver, status) VALUES ($1, $2)', [driver, status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Truck added`)
  })
}
/* ========= currently working  ========= */
const updateLane = (request, response) => {
  const id = request.body.id
  const driver = request.body.driver
  const status = request.body.status
  pool.query(
    'UPDATE lanes SET driver = $1, status = $2 WHERE id = $3',
    [driver, status, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Truck modified with ID: ${id}`)
      //response.redirect('https://is27-font-end.vercel.app')
    }
  )
}
/* =========currently working========= */
const deleteLane = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM lanes WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Driver deleted with ID: ${id}`)
    })
}
/* ================== */

module.exports = {
    // trucks
    getTrucks,
    createTruck,
    updateTruck,
    deleteTruck,
    // drivers
    getAllDrivers,
    createDriver,
    updateDriver,
    deleteDriver,
    // lanes
    getLanes,
    createLane,
    updateLane,
    deleteLane,
}