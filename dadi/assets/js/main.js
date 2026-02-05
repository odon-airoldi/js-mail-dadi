/*
Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let numberRandomWinner;
const numberRandomHuman = Math.floor(Math.random() * 6) + 1;
const numberRandomComputer = Math.floor(Math.random() * 6) + 1;

if (numberRandomHuman > numberRandomComputer) {
    numberRandomWinner = 'The Human wins'
} else if (numberRandomComputer > numberRandomHuman) {
    numberRandomWinner = 'The Computer wins'
} else {
    numberRandomWinner = 'Draw'
}

console.log(`Human ${numberRandomHuman} - ${numberRandomComputer} Computer, ${numberRandomWinner}`)
