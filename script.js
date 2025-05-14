const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not in what you have, but who you are.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Act as if what you do makes a difference. It does.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Push yourself, because no one else is going to do it for you."
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteText = document.getElementById("quote");
  
  quoteText.style.opacity = 0;
  setTimeout(() => {
    quoteText.innerText = quote;
    quoteText.style.opacity = 1;
  }, 300);
}

function shareQuote() {
  const quote = document.getElementById("quote").innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  window.open(twitterUrl, "_blank");
}

// Show a quote on page load
window.onload = generateQuote;
