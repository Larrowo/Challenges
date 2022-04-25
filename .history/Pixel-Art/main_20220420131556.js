const container = document.querySelector(".container");
const sizeEl = document.querySelector(".size")
let size = sizeEl.value;
const color = document.querySelector(".color")
const resetBtn = document.querySelector(".btn")

let draw = false;

function populate (size){
    container.style.setProperty("--size",size)
    for (let index = 0; index < size * size; index++) {
        const div = document.createElement("div");
        div.classList.add("pixel");

        div.addEventListener("mouseover", () => {if(!draw) return
         div.style.backgroundColor = color.value})
        container.appendChild(div);

        div.addEventListener("click", () => {
         div.style.backgroundColor = color.value})

        container.appendChild(div);
    }
}

window.addEventListener("mousedown", () => {draw = true});
window.addEventListener("mouseup", () => {draw = false});


function reset() {
    container.innerHTML = "";
    populate (size)
}

resetBtn.addEventListener("click", reset)

sizeEl.addEventListener("change", () => {
    size = sizeEl.value;
    reset(); 
})


populate(size)