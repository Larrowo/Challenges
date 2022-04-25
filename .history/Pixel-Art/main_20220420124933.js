const container = document.querySelector(".container");
const sizeEl = document.querySelector(".size")
const size = sizeEl.value;
const color = document.querySelector(".color")


function populate (size){
    container.style.setProperty("--size",size)
    for (let index = 0; index < size * size; index++) {
        const div = document.createElement("div");
        div.classList.add("pixel");

        div.addEventListener("mouseover", () => div.style.backgroundColor = color.value)
        container.appendChild(div);
    }
}

populate(size)