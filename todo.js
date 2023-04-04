const form = document.querySelector('form')
const add = document.querySelector('#newAddTodo')
const input = document.querySelector('#inputname')
const deleteAll = document.querySelector('#deleteTodoAll')
const list = document.querySelector('#todoList')
const alert1 = document.querySelector('#alert1')

eventList()

function eventList(){
    add.addEventListener('click',newTodo)

    list.addEventListener('click',deleteItem)

    deleteAll.addEventListener('click',deleteAllitems)

    alert1.addEventListener('click',time)

}



function newTodo(e){
    
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(input.value))

    const a = document.createElement('a')
    a.classList = 'delete-item float-right'
    a.setAttribute('href','#')
    a.innerHTML = '<i class="bi bi-x-lg"></i>'

    li.appendChild(a)

    list.appendChild(li)

    input.value=''
    
    e.preventDefault()
}

function deleteItem(b){
    if(b.target.className === 'bi bi-x-lg'){
        b.target.parentElement.parentElement.remove()
    }
    b.preventDefault()
}

function deleteAllitems(){
    list.innerHTML=''
}

