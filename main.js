document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let li = document.createElement('li');
        let btn = document.createElement('button');
        li.textContent = event.target.tasks.value;
        document.querySelector('#listContainer').appendChild(li);
    })
    document.querySelector('button').addEventListener("click", (event) => {
        event.preventDefault();
        const list = document.getElementById("listContainer");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    });
})



function resetList(){
    
}