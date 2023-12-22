const axios = require('axios');

const url = 'http://abtalkapi.oneway-tech.com/credits/v3/ad/reward';


const data = {
  "requestTime": 1702555980794,
  "sign": "TKyQ1b8oydBSd8wPxhUqFM4Vcc2IIXHT1PePm55ms1CvU3UvDtMHDS0d2OUHg/QN9u6vLd09qW1sQPiWfc6PjOVNkAyvJGp95S8t8TLDBJeQCgYXadkWJRjk0yPLeQE59hByKlIifzDMwCzcKzifG5m+WPLzIhW5kLYzcm+Y0g96gougnjpC3SSvEkDg9GiyQYeYoqTZ42nKZj2tkVb4fX8xP3Za2qnNU4gyhBQTOnVUlohqm2FZQrdfj7D+D0nndXtnZJ9XUlY0mChpBqzWbWx6ymqjBrjSseuWfzKOgmRwpeL0PzCwevgkWM3qeyJ/R8btUt/FR9XliSFt0FP2hw==",
  "creditAmount": 999,
  "projectId": "DT_2022102902",
};


const request = async (token, deviceId)=>{
try {
  const headers = {
  'version': '167465',
  'token': token,
  'deviceid':deviceId,
  'content-type': 'application/json; charset=UTF-8',
};

 const response =  await  axios.post(url, data, { headers })
 console.log(response.data)
  
 return response.data
//  res.json(response.data)
    
} catch (error) {
    console.log(error)
    
}

}
 module.exports = request