const quote = document.querySelector('#quote');
const button = document.querySelector('button');
const quotesArchive = ["a","b","c","d","e","f","g"];

function get_new_quote(){
   var index = Math.floor(Math.random() * (quotesArchive.length -1));
   quote.innerText = quotesArchive[index];
   console.log(index);
}

button.addEventListener('click', get_new_quote);

