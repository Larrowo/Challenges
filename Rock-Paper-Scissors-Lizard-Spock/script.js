
const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]")

const SELECTIONS = [
    {
        name: "Rock",
        emoji: "✊",
        beats1: "Scissors",
        beats2: "Lizard"
    },
    {
        name: "Paper",
        emoji: "✋", 
        beats1: "Rock",
        beats: "Spock"
    },
    {
        name: "Scissors",
        emoji: "✌",
        beats1: "Paper",
        beats2: "Lizard"
    },
    {
        name: "Lizard",
        emoji: "🦎",
        beats1: "Paper",
        beats2: "Spock"

    },
    {
        name: "Spock",
        emoji: "🖖",
        beats1: "Scissors",
        beats2: "Rock"
    }
]


//Selecciona el valor del boton al cual se le hizo click y lo iguala con el que tenga 
//Mismo nombre en el array de selecciones
selectionButtons.forEach(selectionButton =>{
    selectionButton.addEventListener("click", (e) =>{
        const selectionName = selectionButton.dataset.selection; 
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
    })
})


//Llama a una funcion para darle un valor random (eleccion random) al jugador 2 (PC) 
// 
function makeSelection(selection) {
    const computerSelection = randomSelection();
    const youWin = isWinner(selection, computerSelection);
    const pcWin = isWinner(computerSelection, selection);
    
    addSelectionResult(computerSelection, pcWin);
    addSelectionResult(selection, youWin);

    if (youWin) incrementScore(yourScoreSpan);
    if (pcWin) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner){
    const div = document.createElement("div");
    div.innerText = selection.emoji;
    div.classList.add("result-selection");
    if (winner) { 
        div.classList.add("winner");
    }
    finalColumn.after(div);
}

//Esta función determina quién es el ganador entre la selección del usuario y de la pc
function isWinner(selection, opponentSelection){
    return selection.beats1 === opponentSelection.name || selection.beats2 === opponentSelection.name; 
}



//Esta función genera un número random desde 0 (Math.floor) y el largo del Array
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}





