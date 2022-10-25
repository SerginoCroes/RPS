const getComputerChoice = () => ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];

const play = (playerSel, computerSel) => {
    playerSel = playerSel[0].toUpperCase().concat(playerSel.slice(1, playerSel.length).toLowerCase());

    if (!(playerSel === "Rock" || playerSel === "Paper" || playerSel === "Scissors")) return "Invalid input";
    
    let result = "";

    switch (computerSel) {
        case "Rock":
            if(playerSel === "Rock") result = "equal";
            else if(playerSel === "Paper") result = "win";
            else result = "lose";
            break;            
        case "Paper":
            if(playerSel === "Rock") result = "lose";
            else if(playerSel === "Paper") result = "equal";
            else result = "win";
            break;
        case "Scissors":
            if(playerSel === "Rock") result = "win";
            else if(playerSel === "Paper") result = "lose";
            else result = "equal";
            break;
    }

    switch (result) {
        case "win":
            return `You win! ${playerSel} beats ${computerSel}`;
        case "lose":
            return `You lose! ${computerSel} beats ${playerSel}`;
        case "equal":
            return "No winner"; 
    }
}

const game = () => {   
    let score = 0; 
    let output = "";

    for (let i = 0; i < 5; i++){

        let choice = prompt("Type rock paper or scissors");

        if (choice === null) {
            alert("Game aborted");
            return;
        }

        let output = play(choice, getComputerChoice());

        switch (output [4]){
            case "w":
                alert(output);
                score ++;
                break;
            case "l":
                alert(output);
                score --;
                break;
            default:
                alert(output);          
        }
    }
    alert(`Score = ${score}`);
    game();
}

game();