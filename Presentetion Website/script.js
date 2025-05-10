// Funcționalitatea pentru butonul de teme
document.getElementById('theme-toggle').addEventListener('click', () => {
  // Creăm un panou cu paleta de culori
  const colorPalette = document.createElement('div');
  colorPalette.id = 'color-palette';
  colorPalette.style.position = 'absolute';
  colorPalette.style.top = '80px';
  colorPalette.style.left = '20px';
  colorPalette.style.display = 'flex';
  colorPalette.style.gap = '10px';
  colorPalette.style.zIndex = '1000';
  
  // Adăugăm culori disponibile
  const colors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700', '#8A2BE2', '#FF4500'];
  colors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.style.width = '30px';
    colorBox.style.height = '30px';
    colorBox.style.backgroundColor = color;
    colorBox.style.borderRadius = '50%';
    colorBox.style.cursor = 'pointer';
    
    // Când click-uiți pe o culoare, schimbăm fundalul
    colorBox.addEventListener('click', () => {
      document.body.style.backgroundColor = color;
      colorPalette.remove(); // Eliminăm paleta după alegerea unei culori
    });

    colorPalette.appendChild(colorBox);
  });

  // Adăugăm paleta la body
  document.body.appendChild(colorPalette);
});

// Game logic for "Guess the Number"
let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess-input').value);
  const message = document.getElementById('game-message');
  attempts++;

  if (guess === secretNumber) {
    message.textContent = `Congratulations! You've guessed the number in ${attempts} attempts.`;
    message.style.color = 'green';
  } else if (guess < secretNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'red';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'red';
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  document.getElementById('guess-input').value = '';
  document.getElementById('game-message').textContent = '';
}
