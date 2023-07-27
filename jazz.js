

const axios = require('axios');
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC85Mi4yMDQuMTcwLjIxOFwvamRiXC9pbmRleC5waHBcL2FwaVwvZW5cL2F1dGhcL2FjY2VzcyIsImlhdCI6MTY4OTY3MDYzMywiZXhwIjoxNjkyMjYyNjMzLCJuYmYiOjE2ODk2NzA2MzMsImp0aSI6Ilc0anNiVVhpd3p1ZjROaXoiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.1mO-wVzBSyBbdA88GGrTDE0ew2rIev_HMA_Cc_pDAtk';
async function getMb(num) {
    if(!num) return {status:429} 
   num = `${num.split('').splice(1).join('')}`
    const url = 'http://92.204.170.218/jdb/index.php/api/en/v3/addReward/v3';
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'Cookie': 'jazz_bizstore_ session=4e5OxQSZtnRy8HxtD5UZRZcqajeMgwFZbupeAP2v',
      'User-Agent': 'okhttp/4.9.2',
    };
  
    const data = {
      "level": 4,
      "reward_id": 19,
      "msisdn": num
    };
  
    try {
      const response = await axios.post(url, data, { headers });
      console.log(response.data)
      return response.data
      // Handle the response as needed
    } catch (error) {
      
      console.error('Error:', error);
      return error
      // Handle errors
    }
  }
  async function receiveMb(num) {
    if(!num) return {status:429} 

    num = `${num.split('').splice(1).join('')}`
    const url = 'http://92.204.170.218/jdb/index.php/api/en/v3/redeem/reward/v3';
    const headers = {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC85Mi4yMDQuMTcwLjIxOFwvamRiXC9pbmRleC5waHBcL2FwaVwvZW5cL2F1dGhcL2FjY2VzcyIsImlhdCI6MTY4OTUyNDMzNywiZXhwIjoxNjkyMTE2MzM3LCJuYmYiOjE2ODk1MjQzMzcsImp0aSI6IjVRb2JScFNFS1lQbkw2YTQiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Tlu9__MrzlgU1iirdSFjRiipnKukaRekPDvM25zZTH0',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'Cookie': 'jazz_bizstore_session=S1ujOxQjcc6wZGi5MChLkTxighHgYjD4CrumPNzo',
      'User-Agent': 'okhttp/4.9.2',
    };
  
    const params = {
      reward_id: 19,
      msisdn: num,
    };
  
    try {
      const {data}= await axios.get(url, { headers, params });
      console.log(data)
      return data
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle errors
      return error
    }
  }
const checkData = async (msisdn) => {
  msisdn = msisdn.split('').splice(1).join('')
  console.log(msisdn)
  try {
    const url = `http://92.204.170.218/jdb/index.php/api/en/v3/user/mbs?msisdn=${msisdn}`;
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'Cookie': 'jazz_bizstore_session=t5RetFWlrmZRfUp6CE1eEHX4PLFmYRxFTeEiVRik',
      'User-Agent': 'okhttp/4.9.2',
      'If-Modified-Since': 'Wed, 19 Jul 2023 19:20:13 GMT'
    };

    const response = await axios.get(url, { headers });
    const data = response.data;
    // Process the data here
    console.log(data);
    return data;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Usage example

module.exports = {getMb,checkData,receiveMb}


