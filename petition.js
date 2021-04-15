const BASE_URL = 'http://test.movilbox.co:888/test_mbox/test.php?metodo='
  let xhr
  
  if(window.XMLHttpRequest)xhr = new XMLHttpRequest()
  else xhr = new ActiveXObject("Microsoft.XMLHTTP")
  
  xhr.open('GET', BASE_URL + 'usuarios')
  xhr.addEventListener('load',(users) =>{
    data=JSON.parse(users.target.response)
  })
  xhr.send()
  
