const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addButton = document.getElementById("add");

addButton.addEventListener('click',() =>{
    addTask();
})

function addTask(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    inputBox.value = '';
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.append(span);
    saveData();
}
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();