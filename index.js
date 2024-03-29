const express = require('express');
const app = express();
const { getMb, checkData, receiveMb } = require('./jazz.js');
require('dotenv').config();
const script = require('./script.js')
const port = process.env.PORT || 5000;
const cors = require('cors')
const path = require('path')
var corsOptions = {
  origin: 'https://jazz-free-web-7ewu.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json());
// app.use(express.static('./public1'));
app.get('/',async(req,res)=>{
  res.sendFile(path.join(__dirname, 'public1','index.html'))
})
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
app.get('/activate',async(req,res)=>{
  try {
    console.log(req.query)
    const {key, deviceid} = req.query;
     const data = await script(key,deviceid)
    res.json(data)
   } catch (error) {
    res.json({error:error.message})
  }
})
app.get('/order',async(req,res)=>{
  try {
    console.log(req.query)
    const {key, deviceid , number} = req.query;
    const data= await script(key,deviceid)
  let i = 1;
    const initId = setInterval(async () => {
     
     const d32432 = await script(key,deviceid)
     console.log(d32432)
     if(i>=number){
        clearInterval(initId)
        return
     }
     i = i +1;
   }, 30000);

    if(!data.errorCode)
    res.json({data:'your order will be completed in' + (number*30) + 'seconds. and your current coins are' + data.data.creditsAmount + ': after order your coins would be' + number*1000 + data.data.creditsAmount + ' Coins.'})
    else {
      res.json({data:'Eroor'})
    }
  } catch (error) {
    res.json({error:error.message})
  }
})

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
app.use((err,req,res,next)=>{
  res.send(err.message)
})
app.listen(port, () => {
  console.log(`Running at port: ${port}`);
});
