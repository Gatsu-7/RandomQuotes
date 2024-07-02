const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const btn = document.getElementById("btn");

const Quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * Quotes.length);
  const quote = Quotes[randomIndex];
  quoteElement.textContent = quote.quote;
  authorElement.textContent = quote.author;
}

btn.addEventListener("click", generateQuote);
