let choice = prompt("Choisir une difficulté entre 1 et 3");
let difficulty;

if(choice == 1) {
    difficulty = {
        maxNb: 20,
        attempt: 8 
    }   
} else if (choice == 2) {
    difficulty = {
        maxNb: 50,
        attempt: 5
    }
} else if (choice == 3) {
    difficulty = {
        maxNb: 100,
        attempt: 3
    }
}

function game2 (event) {
    event.preventDefault();
    let attemptNb = i + 1;
    if(numberInput.value == secretNumber) {
        let newP = document.createElement("p");
        newP.textContent = "Trouvé! Vous avez utilisé " + attemptNb + " essais.";
        container.appendChild(newP);
    }   else if (numberInput.value < secretNumber) {
        let newP = document.createElement("p");
        newP.textContent = "C'est plus, il reste " + attemptNb + " essais.";
        container.appendChild(newP);
    } else if (numberInput.value > secretNumber) {
        let newP = document.createElement("p");
        newP.textContent = "C'est moins, il reste " + attemptNb + " essais.";
        container.appendChild(newP);
    } else if (i == difficulty.attempt) {
        let newP = document.createElement("p");
        newP.textContent = "Dommage vous avez utilisé tous vos essais";
        container.appendChild(newP);
    }
}


let numberInput = document.getElementById("number");
let numberForm = document.getElementById("numberForm");
let container = document.getElementById("container");
let secretNumber = Math.floor(Math.random() * difficulty.maxNb) + 1;

let i = 0;
while(i < difficulty.attempt) {

    numberForm.addEventListener("submit", game2);
    i++;
}



