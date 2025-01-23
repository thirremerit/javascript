// Randomly choose a number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0; // Tracks the number of guesses made

// Function to check the player's guess
function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = Number(guessInput.value);
  const resultDisplay = document.getElementById('result');
  const distanceDisplay = document.getElementById('distance');

  if (!guess || guess < 1 || guess > 100) {
    resultDisplay.textContent = "Please enter a valid number between 1 and 100.";
    distanceDisplay.textContent = "";
    return;
  }

  guessCount++; // Increment guess count
  const difference = Math.abs(targetNumber - guess); // Calculate how far the guess is from the target number

  if (guess === targetNumber) {
    resultDisplay.textContent = `Congratulations! You guessed the number in ${guessCount} tries.`;
    distanceDisplay.textContent = "";
    resetGame(); // Reset the game after a correct guess
  } else {
    resultDisplay.textContent = guess > targetNumber ? "Too high!" : "Too low!";
    distanceDisplay.textContent = `You were off by ${difference}.`;
  }

  guessInput.value = ""; // Clear the input field after each guess
  guessInput.focus(); // Keep focus on the input field for the next guess
}

// Function to reset the game after a correct guess
function resetGame() {
  setTimeout(() => {
    if (confirm("You guessed correctly! Do you want to play again?")) {
      location.reload(); // Reload the page to reset the game
    }
  }, 1000);
}
