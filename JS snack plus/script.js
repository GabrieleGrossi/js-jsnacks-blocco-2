function createListItem (){
    let li = document.createElement("li");
    li.textContent = "Js Live-Coding";
    li.addEventListener("click", function() {
        li.classList.toggle("barrato");
    });
    return li
}

function generateList() {
    let ul = document.getElementById ("miaLista");
    for (let i = 1; i <= 10; i ++){
        let listItem = createListItem("Element " + i);
        ul.appendChild(listItem)
    }
}

generateList()