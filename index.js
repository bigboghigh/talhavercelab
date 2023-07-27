const express = require('express');
const app = express();
const { getMb, checkData, receiveMb } = require('./jazz.js');
require('dotenv').config();

const port = process.env.PORT || 2000;


app.use(express.json());
app.use(express.static('./public'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/getmb/:msisdn', async (req, res, next) => {
  try {
    const { msisdn } = req.params;
    const response = await getMb(msisdn);
    res.json({ res: response }).status(200);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

app.get('/receivemb/:msisdn', async (req, res, next) => {
  try {
    const { msisdn } = req.params;
    const response = await receiveMb(msisdn);
    res.json({ res: response }).status(200);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

app.get('/checkmb/:msisdn', async (req, res, next) => {
  try {
    const { msisdn } = req.params;
    const response = await checkData(msisdn);
    res.json({ res: response }).status(200);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

app.listen(port, () => {
  console.log(`Running at port: ${port}`);
});
