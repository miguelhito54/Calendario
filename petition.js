const BASE_URL = 'http://test.movilbox.co:888/test_mbox/test.php?metodo='
let res = document.getElementById('res')  
let xhr
 
if(window.XMLHttpRequest)xhr = new XMLHttpRequest()
  else xhr = new ActiveXObject("Microsoft.XMLHTTP")
  
  xhr.open('GET', BASE_URL + 'usuarios')
  xhr.addEventListener('load',(users) =>{
  data=JSON.parse(users.target.response)  
  const inputuser = document.getElementById('inputuser')
      
    const filtrar =()=>{
      res.innerHTML = ''
      const text = inputuser.value.toLowerCase();
        for(let item of data){
          let name = item.nombre.toLowerCase();
          
          if(name.indexOf(text) !== -1){
              res.innerHTML += `
              <div class='user-container' draggable='true' id=''>
               <h2>${item.nombre}</h2>
               <h2>${item.perfil}<h2> 
               <h2>dias planificados      ${item.dias_plani}</h2>
               <h2>tiendas planificadas        ${item.tiendas_plani}</h2>
              </div>
            `
          }
        }
        if(res.innerHTML === ''){
          res.innerHTML +=`No se encontro la persona ...`
        }
      }
      filtrar()
      inputuser.addEventListener('keyup', filtrar)
    }
)
  xhr.send()
  

