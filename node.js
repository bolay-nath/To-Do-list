const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask(){
    if(inputBox.value == ""){
        alert("Please enter a task/message");
    }else{
        let liElement = document.createElement('li');
        liElement.innerText = inputBox.value;
        listContainer.appendChild(liElement);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        liElement.appendChild(span)
        saveData();
    }
    inputBox.value="";

}
listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentNode.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
};
function getData(){
    listContainer.innerHTML = localStorage.getItem('data')
}
getData()