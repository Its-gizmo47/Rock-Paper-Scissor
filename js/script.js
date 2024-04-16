let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".btn");
let msg = document.querySelector(".msg");
let userScoreCount = document.querySelector(".user-score");
let compScoreCount = document.querySelector(".comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoise, compChoice) => {
    if(userWin){
        msg.innerText = `You Win. ${userChoise} beat ${compChoice}`;
        msg.style.backgroundColor = "#38aecc";
        userScore++;
        userScoreCount.innerText = userScore;
    } else {
        msg.innerText = `You lose. ${compChoice} beat ${userChoise}`;
        msg.style.backgroundColor = "#ff6b6b";
        compScore++;
        compScoreCount.innerText = compScore;
    }
}

const gameDraw = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#313e50";
}

const playGame = (userChoise) =>{
    const compChoice = genCompChoice();
    if(userChoise === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if( userChoise === "rock"){
            userWin = compChoice === "scissor" ? true: false;
        } else if (userChoise === "paper"){
            userWin = compChoice === "rock" ? true: false;
        } else if ( userChoise === "scissor"){
            userWin = compChoice === "paper" ? true: false;
        }
        showWinner(userWin, userChoise, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    });
});