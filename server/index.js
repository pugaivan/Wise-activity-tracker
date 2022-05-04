const express = require("express");
const cors = require("cors")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/create', (req, res) => {
  console.log(req.body)
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


