
let choice = prompt("Choisir un nombre entre 1 et 3");
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

function game(difficulty) {
    let secretNb = Math.floor(Math.random() * difficulty.maxNb) + 1;
    console.log(secretNb);
    let i = 0;
    while (i <= difficulty.attempt) {
        let nb = prompt("Entrer un nombre entre 1 et " + difficulty.maxNb);
        if(nb == secretNb) {
            let attemptNb = i + 1;
            console.log("Trouvé! Vous avez utilisé " + attemptNb + " essais.");
            break;
        } else if (nb < secretNb) {
            console.log("C'est plus");
        } else if (nb > secretNb) {
            console.log("C'est moins" );
        } else if (i == difficulty.attempt) {
            console.log("Dommage vous avez utilisé tous vos essais")
            break;  
        }
        i++;
        let rest = difficulty.attempt - i;
        console.log("Il reste " + rest + " essais.");
    }
}

game(difficulty);
