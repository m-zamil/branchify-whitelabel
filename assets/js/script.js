// Timer function
function startCountdown(endDate) {
  // Initialize variables to keep track of the last updated values
  let lastDays, lastHours, lastMinutes, lastSeconds;

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    // If countdown has ended
    if (distance < 0) {
      clearInterval(timer);
      updateElement('days', '00');
      updateElement('hours', '00');
      updateElement('minutes', '00');
      updateElement('seconds', '00');
      return;
    }

    // Calculate time remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update only if the value has changed
    if (days !== lastDays) {
      updateElement('days', days.toString().padStart(2, '0'));
      lastDays = days;
    }
    if (hours !== lastHours) {
      updateElement('hours', hours.toString().padStart(2, '0'));
      lastHours = hours;
    }
    if (minutes !== lastMinutes) {
      updateElement('minutes', minutes.toString().padStart(2, '0'));
      lastMinutes = minutes;
    }
    if (seconds !== lastSeconds) {
      updateElement('seconds', seconds.toString().padStart(2, '0'));
      lastSeconds = seconds;
    }
  }, 1000);
}

// Helper function to update DOM element
function updateElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

// Set the countdown end date (e.g., 7 days from now)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7); // 7 days from today
startCountdown(countdownDate);
