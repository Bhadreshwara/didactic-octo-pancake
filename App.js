let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(4).sub();
    const smallCompWord = "Comp".fontsize(4).sub();
    //console.log(user);
    //console.log(computer);
    results_p.innerHTML =  `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. You Win!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    
    console.log("WIN");
}

function lose(userChoice, computerChoice) {
    console.log("LOST");
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log(user);
    //console.log(computer);
    
    const smallUserWord = "User".fontsize(4).sub();
    const smallCompWord = "Comp".fontsize(4).sub();
    results_p.innerHTML =  `${computerChoice}${smallCompWord} beats ${userChoice}${smallUserWord}. You Lost. . .`;
}

function draw(userChoice, computerChoice) {
    console.log("DRAWWW");
    const smallUserWord = "User".fontsize(4).sub();
    const smallCompWord = "Comp".fontsize(4).sub();
    results_p.innerHTML =  `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord} . It's a Drawwww.`;
}
//console.log(getComputerChoice());

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "RockScissor":
        case "PaparRock":
        case "ScissorPaper":
            win(userChoice, computerChoice);
            //console.log("User Wins.");
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorPaper":
            lose(userChoice, computerChoice);
            //console.log("User Loss.");
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userChoice, computerChoice);
            //console.log("It's a Draw.");
            break;
    }
    
    //console.log("User Choice => " +userChoice);
    //console.log("Computer Choice => "+computerChoice);
}

function main() {
rock_div.addEventListener('click',function() {
    game("Rock");
    })

paper_div.addEventListener('click',function() {
    game("Paper");
    })

scissor_div.addEventListener('click',function() {
    game("Scissor");
    })

}

main();