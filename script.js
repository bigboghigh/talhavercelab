const axios = require('axios');


const token = async (deviceId)=>{
  const url = 'https://abtalkapi.oneway-tech.com/user/open/login/device';

const headers = {
  'Host': 'abtalkapi.oneway-tech.com',
  'version': '16746',
  'mcc': '',
  'mnc': '',
  'syslocale': 'en-US',
  'sysmodel': 'TECNOLD7',
  'sysversion': '16746',
  'token': '',
  'deviceid': deviceId,
  'country': 'US',
  'content-type': 'application/json; charset=UTF-8',
  'accept-encoding': 'gzip',
  'user-agent': 'okhttp/3.14.9',
};

const data = {
  'sign': 'TpTpzaE1iE8Ei8RQ4YzupwdB/rkYJu+3iklPXTZ9PrcAYiAzdb0OT9+U+UNAOAfOC/a8qAw9E/vfrkJ6pC42gw9H6TnNBr8yDupuTQDzyFjrvwphV1//5jw0yOPHzkyuFzwxp6rB5+2VftEVBSXQg0GFy37uBTwxtrLqhKg+662CzB9t8To3nf0JvhED6+3MRxIiLJUvNumPWpiGBUa8Un3q6zrt/9hwaN8hN7u7Pc0fAvaC7LdkKgt+XebqOHP1PbAWbfFolbUnTqdZmnFDyD55BcxEVFaCsOQ0HdmQ97SPo+HzuuLozRmAdoHD9bhKH6+0jkPiByZZ0Bw5Yxy5dA==',
};

const res =await axios.post(url, data, { headers })

return res.data.token;
}



const request = async (key, androidId)=>{
try {

const url = 'http://abtalkapi.oneway-tech.com/credits/v3/ad/reward';


const data = {
  "requestTime": 1702555980794,
  "sign": "TKyQ1b8oydBSd8wPxhUqFM4Vcc2IIXHT1PePm55ms1CvU3UvDtMHDS0d2OUHg/QN9u6vLd09qW1sQPiWfc6PjOVNkAyvJGp95S8t8TLDBJeQCgYXadkWJRjk0yPLeQE59hByKlIifzDMwCzcKzifG5m+WPLzIhW5kLYzcm+Y0g96gougnjpC3SSvEkDg9GiyQYeYoqTZ42nKZj2tkVb4fX8xP3Za2qnNU4gyhBQTOnVUlohqm2FZQrdfj7D+D0nndXtnZJ9XUlY0mChpBqzWbWx6ymqjBrjSseuWfzKOgmRwpeL0PzCwevgkWM3qeyJ/R8btUt/FR9XliSFt0FP2hw==",
  "creditAmount": 999,
  "projectId": "DT_2022102902",
};

  const headers = {
  'version': '167465',
  'token': await token(key),
  'deviceid':androidId,
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