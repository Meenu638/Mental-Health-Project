// Array of motivational quotes
const quotes = [
  "Believe in yourself, you are stronger than you think.",
  "Every day is a new beginning, take a deep breath and start again.",
  "Your mental health is more important than your grades, jobs, or opinions.",
  "Happiness is not something you postpone for the future; it is something you create today.",
  "Difficulties in life don’t come to destroy you, they help you realize your hidden potential.",
  "Take time to do what makes your soul happy.",
  "It’s okay to not be okay, just don’t give up.",
  "Success is built one brick at a time. These bricks have many names. Some use the name attitude or mindset, others will say bearing, temperament or behaviour.",
  "Success is the sum of small efforts – repeated day in and day out.",
  "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
  "Hard work, consistently applied in the right direction, takes you further than you could imagine",
  "Never underestimate the power you have to take your life in a new direction",
  "Deep within your mind lies a reservoir of untapped genius and power. Now is your time to release it.",
  
  
];

// Function to get a random quote
function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}


