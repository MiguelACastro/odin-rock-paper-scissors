let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    let choice
    switch (n) {
        case 0:
            choice = "rock"
            break
        case 1:
            choice = "paper"
            break
        case 2:
            choice = "scissors"
            break
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase()
    let message
    if (humanChoiceLower == computerChoice) {
        message = "Draw"
    }
    else if (humanChoiceLower == "rock" && computerChoice == "scissors") {
        message = "Rock beats scissors, you win!"
        humanScore++
    }
    else if (humanChoiceLower == "paper" && computerChoice == "rock") {
        message = "Paper beats rock, you win!"
        humanScore++
    }
    else if (humanChoiceLower == "scissors" && computerChoice == "paper") {
        message = "Scissors beats paper, you win!"
        humanScore++
    }
    else if (humanChoiceLower == "rock" && computerChoice == "paper") {
        message = "Paper beats rock, you lose!"
        computerScore++
    }
    else if (humanChoiceLower == "paper" && computerChoice == "scissors") {
        message = "Scissors beat paper, you lose!"
        computerScore++
    }
    else if (humanChoiceLower == "scissors" && computerChoice == "rock") {
        message = "Rock beats scissors, you lose!"
        computerScore++
    }
    alert("Computer chose " + computerChoice +
        "\n" + message +
        "\nHuman Score: " + humanScore +
        "\nComputer Score: " + computerScore)
}


