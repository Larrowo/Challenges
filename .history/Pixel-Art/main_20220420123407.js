const container = document.querySelector(".container");

function populate (size){
    for (let index = 0; index < size; index++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        container.appendChild(div);
    }
}

populate(4)