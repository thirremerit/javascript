const circle = document.getElementById('circle');
const timerDisplay = document.getElementById('timer');
const pointsDisplay = document.getElementById('points');

let startTime = null; // Time when the timer starts
let timerInterval; // For updating the timer display
let timeElapsed = 0; // Tracks how much time has passed
let points = 0; // Tracks the number of clicks (points)

// Array of colors to cycle through
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
let currentColorIndex = 0; // Start at the first color in the array

// Function to update the timer display
function updateTimerDisplay() {
  timerDisplay.textContent = `Timer: ${timeElapsed.toFixed(2)}`; // Show elapsed time in seconds with two decimal places
}

// Function to update the points display
function updatePointsDisplay() {
  pointsDisplay.textContent = `Points: ${points}`; // Update the points text
}

// Function to start the timer (this will be called on page load and each click)
function startTimer() {
  startTime = Date.now(); // Record the start time whenever the timer starts

  // Start an interval to continuously update the timer
  if (timerInterval) {
    clearInterval(timerInterval); // Clear the previous interval if it exists
  }

  timerInterval = setInterval(() => {
    timeElapsed = (Date.now() - startTime) / 1000; // Calculate elapsed time in seconds
    updateTimerDisplay();
  }, 100); // Update every 100 milliseconds for smooth timer updates
}

// Function to stop the timer when the circle is clicked, reset the time, change color/position, and add a point
function stopTimer() {
  clearInterval(timerInterval); // Stop the timer interval
  timeElapsed = 0; // Reset the time elapsed
  updateTimerDisplay(); // Reset the timer display to 0
  startTimer(); // Start the timer again

  // Change the circle color to the next one in the array
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through colors
  circle.style.backgroundColor = colors[currentColorIndex]; // Apply the new color

  // Move the circle to a random position on the screen
  const maxX = window.innerWidth - circle.offsetWidth; // Max X position (avoiding overflow)
  const maxY = window.innerHeight - circle.offsetHeight; // Max Y position (avoiding overflow)

  const randomX = Math.random() * maxX; // Random X position
  const randomY = Math.random() * maxY; // Random Y position

  circle.style.left = `${randomX}px`; // Set the new X position
  circle.style.top = `${randomY}px`; // Set the new Y position

  // Add one point when the circle is clicked
  points += 1; // Increment the points counter
  updatePointsDisplay(); // Update the points display
}

// Add event listener to reset and start the timer on click, and change color/position
circle.addEventListener('click', stopTimer);

// Start the timer initially when the page loads
startTimer();
