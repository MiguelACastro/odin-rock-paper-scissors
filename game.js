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

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors: ")
    return choice
}

console.log(getComputerChoice())
console.log(getHumanChoice())