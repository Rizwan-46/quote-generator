const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const quoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function newQuotes() {
   const once = local[Math.floor(Math.random() * local.length)]
   console.log(once);
   if (once.author == "Anonymous") {
    authorText.textContent = "Unknown"
   } else {
    authorText.textContent = once.author
   }
   if (once.text.length > 120) {
       quoteText.classList.add("long-quote")
   }
   else{
       quoteText.classList.remove("long-quote")
   }
   quoteText.textContent = once.text;

};

function openTwitter(params) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
quoteBtn.addEventListener("click", newQuotes);
twitterBtn.addEventListener("click", openTwitter);
