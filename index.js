const express = require('express');
const app = express();
const { getMb, checkData, receiveMb } = require('./jazz.js');
require('dotenv').config();
const script = require('./script.js')
const port = process.env.PORT || 5000;
const cors = require('cors')
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static('./public'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
app.get('/activate',async(req,res)=>{
  try {
    console.log(req.query)
    const {token, deviceid, number, seconds} = req.query;
    let i= 1;
    let dataArray = []
    const initId = setInterval(async () => {
      let data;
      try {
        
        data = await script(token,deviceid)
         dataArray.push(data)
  
      } catch (error) {
         dataArray.push({error:True})
      }
        
      
      if(i >= number) {
        clearInterval(initId)
        return res.json({message:'request completed', token, deviceid,number, dataArray})
      }
      i = i +1; 
    }, Number(seconds)*1000);
   
    
  
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
