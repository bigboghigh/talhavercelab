const input = document.querySelector('.number-input')
const host = 'https://jazz-free.cyclic.app'
const showCase = (elem)=>{
  const div = document.createElement('div')
  div.classList.add('response-box')
  div.textContent = elem.results.description || elem.results.desc || elem.results.mbs

  const firstChild =  document.getElementById('responseContainer').firstChild;
  document.getElementById('responseContainer').insertBefore(div,firstChild)
}
const addWait = ()=>{
const waitElem = document.querySelector('.response-box')
waitElem.style.display='block'
}
const removeWait = ()=>{
  const waitElem = document.querySelector('.response-box')
  waitElem.style.display='none'
}
document.querySelector('.btn1').addEventListener('click',async ()=>{
try {
  addWait()
  const {data} = await axios.get(`${host}/getmb/${input.value}`)
  removeWait()
  showCase(data.res)
  console.log(data.res)
} catch (error) {
  console.log(error)
  const Error = {results:{desc:'Server error'}}
  showCase(Error)
  removeWait()
}


})
document.querySelector('.btn2').addEventListener('click',async ()=>{
  try {
    addWait()
    const {data} = await axios.get(`${host}/receiveMb/${input.value}`)
    removeWait()
    showCase(data.res)
    console.log(data.res)
  } catch (error) {
    console.log(error)
    const Error = {results:{desc:'Server error'}}
    showCase(Error)
    removeWait()
  }
  
})
document.querySelector('.btn3').addEventListener('click',async ()=>{
  try {
    addWait()
    const {data} = await axios.get(`${host}/checkmb/${input.value}`)
    removeWait()
    showCase(data.res)
    console.log(data.res)
  } catch (error) {
    console.log(error)
    const Error = {results:{desc:'Server error'}}
    showCase(Error)
    removeWait()
  }
})
