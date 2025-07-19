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
    const resultNode = document.querySelector("#result > p")
    const winnerNode = document.querySelector("#winner")

    if(resultNode) {
        resultNode.remove()
    }
    if(winnerNode) {
        winnerNode.remove()
    }

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
    const humanChoiceDisplay = document.querySelector("#human-choice")
    humanChoiceDisplay.textContent = getEmoji(humanChoice)

    const computerChoiceDisplay = document.querySelector("#computer-choice")
    computerChoiceDisplay.textContent = getEmoji(computerChoice)

    const result = document.createElement("p")
    result.textContent = message

    document.querySelector("#result").appendChild(result)

    const humanScoreDisplay = document.querySelector("#human-score")
    humanScoreDisplay.textContent = "Player Score: " + humanScore

    const computerScoreDisplay = document.querySelector("#computer-score")
    computerScoreDisplay.textContent = "Computer Score: " + computerScore

    if(humanScore == 5 || computerScore == 5) {
        displayWinner()
    }

}

function getEmoji(choice) {
    let emoji
    switch (choice) {
        case "rock":
            emoji = "🪨"
        break;

        case "paper":
            emoji = "📄"
        break;

        case "scissors":
            emoji = "✂️"
        break;
    }
    return emoji
}

function displayWinner() {
    const winner = (humanScore > computerScore ? "Player" : "Computer") + " wins!"

    const winnerText = document.createElement("p")
    winnerText.textContent = winner
    winnerText.id = "winner"

    const scores = document.querySelector("#scores")
    scores.appendChild(winnerText)

    humanScore = 0
    computerScore = 0
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
})