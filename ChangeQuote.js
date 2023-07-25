const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote');

function fetchNewQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = data.content;
            authorText.textContent = data.author;
        });
}

newQuoteButton.addEventListener('click', fetchNewQuote);