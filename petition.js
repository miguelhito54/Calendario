const BASE_URL = 'http://test.movilbox.co:888/test_mbox/test.php?metodo='
  let xhr
  let res = document.getElementById('res')
  
  if(window.XMLHttpRequest)xhr = new XMLHttpRequest()
  else xhr = new ActiveXObject("Microsoft.XMLHTTP")
  
  xhr.open('GET', BASE_URL + 'usuarios')
  xhr.addEventListener('load',(users) =>{
  data=JSON.parse(users.target.response)
    for(let i of data){
      res.innerHTML +=`
        <div class='user-container'>
          ${i.nombre}
          <br>
          ${i.perfil}
          <h4>dias planificados</h4>
           ${i.dias_plani}
          <h4>tiendas planificadas</h4>
           ${i.tiendas_plani}
        </div>

      `
    }
  })
  xhr.send()
  
