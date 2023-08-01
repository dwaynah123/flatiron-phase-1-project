document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let li = document.createElement('li');
        let btn = document.createElement('button');
        li.textContent = event.target.tasks.value;
        document.querySelector('#listContainer').appendChild(li);
    })
})