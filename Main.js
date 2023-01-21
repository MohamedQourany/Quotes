function getQuote() {
    fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
}