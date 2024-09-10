function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultText = '';

    if (playerChoice === computerChoice) {
        resultText = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText = 'You win!';
    } else {
        resultText = 'You lose!';
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${resultText}`;
}
