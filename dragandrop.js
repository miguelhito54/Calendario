const draggables = document.querySelectorAll('.draggable')
const calendardays = document.querySelectorAll('.calendardays')

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', ()=>{
        draggable.classList.remove('dragging')
    })
})

calendardays.forEach(container =>{
    container.addEventListener('dragover', () =>{
        console.log('dragover')
    })
})