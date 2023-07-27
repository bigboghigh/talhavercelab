const express = require('express')
const app = express()   
const  {getMb,checkData,receiveMb} = require('./jazz.js')
require('dotenv').config()
const port = process.env.PORT|| 5001
app.use(express.json())
app.use(express.static('./public'))
app.get('/getmb/:msisdn',async(req,res)=>{
    const {msisdn} = req.params
    const response = await getMb(msisdn)
    res.json({res:response}).status(200)
})
app.get('/receivemb/:msisdn',async(req,res)=>{
    const {msisdn} = req.params
    const response = await receiveMb(msisdn)
    res.json({res:response}).status(200)
})
app.get('/checkmb/:msisdn',async(req,res)=>{
    const {msisdn} = req.params
    const response = await checkData(msisdn)
    res.json({res:response}).status(200)
})
app.listen(port,()=>{
    console.log(`running at port:${port}`)
})