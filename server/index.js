const express = require("express");
const cors = require("cors")
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'activity_tracker'
});

connection.connect();

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/create', (req, res) => {
  const { msDifference, startMonthAndDay, distance, type } = req.body
  const query = `INSERT INTO activity(ms_difference,start_month_and_day,distance,activity_type) VALUES (${msDifference},'${startMonthAndDay}',${distance},'${type}');`
  connection.query(query);
  res.sendStatus(200)
})

app.get('/activities', (req, res) => {
  const query = 'SELECT * FROM activity_tracker.activity;'
  connection.query(query, (err, rows, fields) => {
    res.send(rows.map((row) => getFormatedRow(row)))
  });
})

app.get('/total', (req, res) => {
  const runQuery = 'SELECT sum(distance) as run_sum FROM activity_tracker.activity where activity_type = "Run";'
  const rideQuery = 'SELECT sum(distance) as ride_sum FROM activity_tracker.activity where activity_type = "Ride";'
  connection.query(runQuery, (err, runRows, fields) => {
    connection.query(rideQuery, (err, rideRows, fields) => {
      res.send({
        totalRideDistance: rideRows[0].ride_sum ? rideRows[0].ride_sum.toFixed(1) : 0,
        totalRunDistance: runRows[0].run_sum ? runRows[0].run_sum.toFixed(1) : 0
      })
    })
  })
})

app.get('/longest', (req, res) => {
  const runQuery = 'SELECT * FROM activity_tracker.activity where  activity_type = "Run" order by distance desc limit 0,1'
  const rideQuery = 'SELECT * FROM activity_tracker.activity where  activity_type = "Ride" order by distance desc limit 0,1'
  connection.query(runQuery, (err, runRows, fields) => {
    connection.query(rideQuery, (err, rideRows, fields) => {
      res.send({
        longestRide: rideRows[0] ? getFormatedRow(rideRows[0]) : null,
        longestRun: runRows[0] ? getFormatedRow(runRows[0]) : null
      })
    })
  })
})

const getFormatedRow = (row) => {
  return {
    startMonthAndDay: row.start_month_and_day,
    type: row.activity_type,
    msDifference: row.ms_difference,
    distance: row.distance
  }
}