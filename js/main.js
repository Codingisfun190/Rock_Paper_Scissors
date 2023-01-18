const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('modal')
const scoreboard = {
  player: 0,
  computer: 0
}

// Play game
function play(e) {
  restart.style.display = 'inline-block'
  const playerChoice = e.target.id
  const computerChoice = getComputerChoice()
  const winner = getWinner(playerChoice, computerChoice)
  showWinner(winner, computerChoice)
}

// Get computers choice
function getComputerChoice() {
  const rand = Math.random()
  if (rand < 0.34) {
    return 'rock'
  } else if (rand <= 0.67) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

// Get game winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw'
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer'
    } else {
      return 'player'
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer'
    } else {
      return 'player'
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer'
    } else {
      return 'player'
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++
    // Show modal results
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer choice <strong>${computerChoice}</strong></p>
    `
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++
    // Show modal results
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer choice <strong>${computerChoice}</strong></p>
    `
  } else {
    result.innerHTML = `
      <h1>It's a draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer choice <strong>${computerChoice}</strong></p>
    `
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
  `

  modal.style.display = 'block'
}

// Event listeners
choices.forEach((choice) => choice.addEventListener('click', play))
