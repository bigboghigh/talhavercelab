const axios = require('axios');

const url = 'https://api-prod.retailsso.com/v3/customers/otp';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'appid': 'Android',
  'storeid': 'mafpak',
  'langcode': 'en',
  'userid': 'romeoch7861@gmail.com',
  'token': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlF6UXpRekpFTlVNeE16aEdOemcwUlRjeVF6VXdRVEkyTWpoRlJEZEROVE0xTVVNM1F6TTJPUSJ9.eyJodHRwczovL21hZi5ncmF2dHkuYXV0aC9kZXYvYXBpL2VtYWlsIjoicm9tZW9jaDc4NjVAZ21haWwuY29tIiwiaHR0cHM6Ly9tYWYuaWRlbnRpdHkuYXV0aC9kZXYvYXBpL2VtYWlsIjoicm9tZW9jaDc4NjVAZ21haWwuY29tIiwiaHR0cHM6Ly9tYWYuaWRlbnRpdHkuYXV0aC9kZXYvYXBpL3JpZCI6IjlkZjJiYjU4LTJkZDctNDc4MC04MmE4LWZiZjIxYWI1YWFjOCIsImh0dHBzOi8vbWFmLmlkZW50aXR5LmF1dGgvZGV2L2FwaS9taXJha2xfc2hvcF9pZCI6bnVsbCwiaHR0cHM6Ly9tYWYuaWRlbnRpdHkuYXV0aC9kZXYvYXBpL3RpbWUiOiIyMDIzLTA4LTA1VDIyOjE4OjI3LjE3MVoiLCJodHRwczovL21hZi5ncmF2dHkuYXV0aC9kZXYvYXBpL3V1aWQiOiI1M2RmNzM5Yi04MDZlLTQ1YjUtOWFlMS0xOWNhYzljN2Y2ZjYiLCJodHRwczovL21hZi5pZGVudGl0eS5hdXRoL2Rldi9hcGkvdXVpZCI6IjUzZGY3MzliLTgwNmUtNDViNS05YWUxLTE5Y2FjOWM3ZjZmNiIsImh0dHBzOi8vbWFmLmlkZW50aXR5LmF1dGgvZGV2L2FwaS9lbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vcHJvZHVjdGlvbi5tYWYuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDY0Y2VjYWIyZWUzODUwN2NmZTkwMTdjYSIsImF1ZCI6WyJodHRwczovL3Byb2R1Y3Rpb24ubWFmLmF1dGgwLmNvbS9hcGkvdjIvIiwiaHR0cHM6Ly9wcm9kdWN0aW9uLm1hZi5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjkxMjczOTA3LCJleHAiOjE2OTM4NjU5MDcsImF6cCI6ImNGdlJQMmN1QnhiM2l2Q0hkY1B5VGVYZmdUS3ZIV01hIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGRlbGV0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyBkZWxldGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyB1cGRhdGU6Y3VycmVudF91c2VyX2lkZW50aXRpZXMgb2ZmbGluZV9hY2Nlc3MiLCJndHkiOiJwYXNzd29yZCJ9.znGOC5VcBoOLAxJUX0DJueqVkYZDqGnAATRFurRJOy_Y04LUMD6_OnXRReVBaASorTuAKfioleLucEF0xLerahnGnVnwFgRbeNDvNaUN7kFHzh-XsFLDQf5eycWyO3u7EJgSGvIdH0XU_x-Ccoi8QbeJ-Ut4NMgVJiReJrji6avGSGvH3Nr0oD2AAh0zDdg44gIO4tTtFxc4pULp8WHIarm7NLUW0BAN7QCcVKUTikbdbkGeZKtm3T6QlptWb2I3W_ePMY9xZDtC7bKryzmLYbuPf3ifnL0aZJ6pq9T1cGJe3-o7Eu1FU_JTMpYDj7kvZgpGp1184wWZERPAeNsYgQ',
};

const data = {
  action: 'PHONE_VERIFICATION',
  email: 'ormsjsjwhshdvshahs@gmail.com',
  mode: 'otp',
  phoneNumber: '+923345872816',
};
const request = async (params)=>{
try {
 const response =  await     axios.post(url, data, { headers });
 console.log(response.data) 
 return response.data
//  res.json(response.data)
    
} catch (error) {
    console.log(error)
    
}

}
 request()