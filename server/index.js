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
  console.log(req.body)
  const {msDifference,startMonthAndDay,distance,type} = req.body
  const query = `INSERT INTO activity(ms_difference,start_month_and_day,distance,activity_type) VALUES (${msDifference},'${startMonthAndDay}',${distance},'${type}');`
  connection.query(query, function (err, rows, fields) {
    console.log(rows,fields,err)
  });
  res.sendStatus(200)
})

app.get('/activities', (req, res) => {
  const data = [
    {
      startMonthAndDay: 'December 1',
      type: 'Run',
      msDifference: 1620000,
      distance: 6
    },
    {
      startMonthAndDay: 'May 1',
      type: 'Ride',
      msDifference: 6300000,
      distance: 25
    }
  ]
  res.send(data)
})


app.get('/total', (req, res) => {
  const data = {
    totalRideDistance: 15,
    totalRunDistance: 5
  }
  res.send(data)
})


app.get('/longest', (req, res) => {
  const data = {
    longestRide: { date: 'December 11', distance: 25, time: 6300000 },
    longestRun: { date: 'May 12', distance: 5, time: 1620000 }
  }
  res.send(data)
})
