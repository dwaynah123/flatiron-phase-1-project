document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let p = document.createElement('p');
        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        p.textContent = event.target.tasks.value;
        p.classList.add('taskList');
        document.querySelector('#listContainer').appendChild(checkBox);
        document.querySelector('#listContainer').appendChild(p);
    })
    document.querySelector('button').addEventListener("click", (event) => {
        event.preventDefault();
        const list = document.getElementById("listContainer");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    });

    fetch("http://localhost:4000/Tasks")
    .then((response) => response.json())
    .then((dataObject) => {
        console.log(dataObject);
    })
})
