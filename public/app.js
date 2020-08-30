function serverChoiceImage(choice) {
    const serverImage = document.getElementById('serverChoiceImage');
    serverImage.src = `images/${choice}.png`;
}

function serverChoice() {
    const randomInt = Math.floor(Math.random() * 3) + 1;
    let srvChoice = '';
    switch (randomInt) {
        case 1:
            srvChoice = 'rock';
            break;
        case 2:
            srvChoice = 'paper';
            break;
        case 3:
            srvChoice = 'scissors';
            break;
    }
    serverChoiceImage(srvChoice);
    console.log(`SERVER chose ${srvChoice.toUpperCase()}`)
    return srvChoice;
}

function endMessage(domElement, user, server) {
    const win = () => {
        console.log('>>> You won!');
        domElement.innerHTML = '🥳 You won! 🥳';
    };
    const loose = () => {
        console.log('>>> You lost!');
        domElement.innerHTML = '😔 You lost! 😔';
    };
    const draw = () => {
        console.log(">>> It's a draw!");
        domElement.innerHTML = "😐 It's a draw! 😐";
    };
    if (user === 'rock') {
        if (server === 'rock') draw();
        else if (server === 'paper') loose();
        else win();
    }
    else if (user === 'paper') {
        if (server === 'rock') win();
        else if (server === 'paper') draw();
        else loose();
    } else {
        if (server === 'rock') loose();
        else if (server === 'paper') win();
        else draw();
    }
}

function game(choice) {
    const button = document.querySelector(`#${choice}Button`);
    const gameMessage = document.querySelector('#gameMessage');
    button.addEventListener('click', (event) => {
        console.log('\n\nNew Game:');
        console.log(`USER chose ${choice.toUpperCase()}`);
        endMessage(gameMessage, choice, serverChoice());
    });
}

const startGame = async () => {
    ['rock', 'paper', 'scissors'].forEach(option => game(option));
}

function init() {
    startGame();
}

init();