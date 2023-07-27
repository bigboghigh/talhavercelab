// Replace 'your_access_token' with the actual token value
const host = 'https://jazz.cleverapps.io'
function displayResponseOnTop(response) {
  const responseContainer = document.getElementById('responseContainer');
  const responseBox = document.createElement('div');
  responseBox.className = 'response-box';
  responseBox.textContent = response;

  if (response.includes('success') || response.includes('reward is added!')) {
    responseBox.classList.add('response-success');
  } else {
    responseBox.classList.add('response-failure');
  }

  responseContainer.insertBefore(responseBox, responseContainer.firstChild);
  responseContainer.style.display = 'block';
}

function showPleaseWaitMessage() {
  document.getElementById('pleaseWait').style.display = 'block';
}

function hidePleaseWaitMessage() {
  document.getElementById('pleaseWait').style.display = 'none';
}
function showError(){
  document.getElementById('state').style.display = 'block'
  setTimeout(()=>{
    document.getElementById('state').style.display = 'none'

  },5000)
}

function getMb() {
  const msisdn = document.getElementById('msisdnInput').value;
  const pleaseWaitBox = document.getElementById('pleaseWait');

  pleaseWaitBox.style.display = 'block';
  fetch(`${host}/getmb/${msisdn}`,{method:'GET'})
  .then(response => response.json())
  .then(data => {
    if(data.res.results.status != -2) return 
    const responseMessage = data.res.results.description || "success";
    displayResponseOnTop(responseMessage);
    hidePleaseWaitMessage();
  })
  .catch(error => {
    console.error('Error:', error);
    hidePleaseWaitMessage();
   console.log('running on error')
  });
}

function receiveMb() {
  const msisdn = document.getElementById('msisdnInput').value;
  const pleaseWaitBox = document.getElementById('pleaseWait');

  pleaseWaitBox.style.display = 'block';
  fetch(`${host}/receivemb/${msisdn}`,{method:'GET'})
  .then(response => response.json())
  .then(data => {
    const responseMessage = data.res.results.desc;
    displayResponseOnTop(responseMessage);
    hidePleaseWaitMessage();
  })
  .catch(error => {
    console.error('Error:', error);
    hidePleaseWaitMessage();
  });
}

function checkMb() {
  const msisdn = document.getElementById('msisdnInput').value;
  const pleaseWaitBox = document.getElementById('pleaseWait');

  pleaseWaitBox.style.display = 'block';
  fetch(`${host}/checkmb/${msisdn}`,{method:'GET'})
  .then(response => response.json())
  .then(data => { 
    console.log(data)
    const responseMessage = `mbs: ${data.res.results.mbs}`;
    displayResponseOnTop(responseMessage);
    hidePleaseWaitMessage();
  })
  .catch(error => {
    console.error('Error:', error);
    hidePleaseWaitMessage();
  });
}
