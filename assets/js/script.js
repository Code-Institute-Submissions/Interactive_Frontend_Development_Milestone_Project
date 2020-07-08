alert ("Hi, I'm the Memory Game");

//var namePlayer = prompt("Please enter your name:", "Name...");

const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
