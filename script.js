const suit = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * suit.length);
    return suit[randomIndex];
}

function getHumanChoice() {
    const choice = prompt('Enter your choice (Rock, Paper, Scissors):');
    if (!choice) {
        alert('Game dibatalkan.');
        return null;
    }
    const formattedChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    if (suit.includes(formattedChoice)) {
        return formattedChoice;
    } else {
        alert('Invalid choice. Please try again.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        alert(result);
    }

    if (humanScore > computerScore) {
        alert(`You won the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`You lost the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        alert(`The game is a tie! Final Score: You ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();

