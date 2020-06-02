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
    console.log(`The server chose ${srvChoice.toUpperCase()}`)
    return srvChoice;
}

function userChoice(choice) {
    const button = document.querySelector(`#${choice}Button`);
    button.addEventListener('click', (event) => {
        // event.preventDefault();
        console.log(`The user chose ${choice.toUpperCase()}`);
        serverChoice();
    });
}

function game() {
    userChoice('rock');
    userChoice('paper');
    userChoice('scissors');
}

// function one() {
//     console.log('The game has ended!');
// }

// function two() {
//     console.log('Do you want to restart?');
// }

function init() {
    game();
}

init();