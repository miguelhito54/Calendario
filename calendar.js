let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let prevmonth = document.getElementById('prev');

let monthNames=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];
let month = document.getElementById('month');
let year = document.getElementById('year')

let nextmonth = document.getElementById('next');

let dates = document.getElementById('number')

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();
//flecha izquierda, derecha
prevmonth.addEventListener('click', ()=>lastMonth());
nextmonth.addEventListener('click', ()=>nextMonth());

const writeMonth = (month) => {
   for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }
     for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div>${i}</div>`;
        }else{
            dates.innerHTML += ` <div>${i}</div>`;
        }
    }
}

const getTotalDays = (month) => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

function startDay(){
    let start = new date(currentYear,monthNumber,1);
    return (start.getDay())
}
function lastMonth(){
    if(monthNumber !== 0){
      monthNumber--;
    }else{
      monthNumber = 11;
      currentYear--;
    }
      setNewDate();
}
function nextMonth(){
  if(monthNumber !== 0){
      monthNumber++;
    }else{
      monthNumber = 11;
      currentYear++;
    }
      setNewDate();
    
}
const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}



   










