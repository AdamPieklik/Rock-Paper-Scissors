const rock = 'Rock'
const paper = 'Paper'
const scissors = 'Scissors'
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let a = Math.floor(Math.random()*3);
  return (a == 0) ? rock : (a == 1) ? paper : scissors
}

function getPlayerChoice () {
  let b = prompt('What you choose?');
  let a = b.toUpperCase()
  return (a === 'ROCK') ? rock : (a ==='PAPER') ? paper : (a === 'SCISSORS') ? scissors : alert('Incorrect value, try again!');
}

 function compareBothValues () {
  let a = getComputerChoice()
  let b = getPlayerChoice()
  console.log(a)
  return (a === b) ? alert('Draw!') 
  : (a === rock && b === paper) ? alert('Paper beats rock, You won!')&(playerScore+=1)
  : (a === rock && b === scissors) ? alert('Rock beats scissors, You lose!')&(computerScore+=1)
  : (a === paper && b === rock) ? alert('Paper beats rock, You lose!')&(computerScore+=1)
  : (a === paper && b === scissors) ? alert('Scissors beats paper, You won!')&(playerScore+=1)
  : (a === scissors && b === rock) ? alert('Rock beats scissors, You won!')&(playerScore+=1)
  : (a === scissors && b === paper) ? alert('Scissors beats paper, You lose!')&(computerScore+=1)
  : alert('Unknown error, try again')
 }

 function playGame() {
  for (let i = 0; i < 5; i++) {
    compareBothValues()
   }
   return (computerScore > playerScore) ? `You lose after 5 rounds by the score of ${playerScore}:${computerScore}`
   : (computerScore < playerScore) ? `You won after 5 rounds by the score of ${playerScore}:${computerScore}`
   : `Draw! After 5 rounds you and computer has the score of ${playerScore}`
 }
 
alert(playGame())