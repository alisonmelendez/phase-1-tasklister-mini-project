document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        let inputtedValue = e.target.newTask.value
        console.log(inputtedValue)
        grabTodo(inputtedValue)

    })

    function grabTodo(todo) {
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.textContent = 'x' // button for later to delete
        li.textContent = todo
        let list = document.querySelector('#tasks')
        list.appendChild(li)

    }

});