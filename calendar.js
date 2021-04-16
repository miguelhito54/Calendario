let xhrp
let prevmonth = document.getElementById('prev');
let month = document.getElementById('month');
let year = document.getElementById('year')
let nextmonth = document.getElementById('next');


  if(window.XMLHttpRequest)xhrp = new XMLHttpRequest()
  else xhrp = new ActiveXObject("Microsoft.XMLHTTP")
  xhrp.open('GET', BASE_URL + 'periodos')
  xhrp.addEventListener('load',(periodo) =>{
  date=JSON.parse(periodo.target.response)
  //calendar
for(let item of date){
      month.textContent = item.mes;
      year.textContent = item.anio;      
}
function writeMonth(){
      for(let i = 1 ; i <31; i++){
      date.innerHTML += 
      `<div class=''>${i}</div>`
        }
      }
})

   xhrp.send()
   










