let quoteArray = [{quote: "Oubien parais tel que tu es, ou bien sois tel que tu parais",author:"Akin"},
                    {quote: "Evangelisez les noirs", author: "Leopold"},
                    {quote: "Armez vous de science", author: "Cheikh A D"}];

let quotesArray = [];


let quoteContainer =  document.querySelector("p");
let authorContainer =  document.querySelector("span");
let button = document.getElementById("button");

let randomingQuoteAndAuthor = () => {
    let randomValue = Math.floor(Math.random() * quotesArray.length);
    let text = quotesArray[randomValue].text;
    let author = quotesArray[randomValue].author;
    let quoteToDisplay = {text: text, author :author};
    return quoteToDisplay;
}

function clearBox (element){
    document.querySelector(element).innerHTML = "";
}

let displayedQuote = () => {
        clearBox("p");
        clearBox("span");
        const qFinal = randomingQuoteAndAuthor();
        let q = document.createTextNode(qFinal.text);
        quoteContainer.appendChild(q);
        let a = document.createTextNode(qFinal.author);
        authorContainer.appendChild(a);
    }
// }

let quoteToShow = () =>{
    displayedQuote();
}

button.addEventListener("click", displayedQuote);

async function getQuotes() {
    let url ="http://Type.fit/api/quotes";
    try {
        let q = await fetch(url);
        return await q.json();
    }catch (error) {
        console,log(error);
    }
}


async function rendersQuote () {
    let quotes = await getQuotes();
    quotes.forEach( quote => {
        let valueQ = quote.text;
        let valueA = quote.author;
        let objetQuote = {text: valueQ, author: valueA};
        quotesArray.push(objetQuote);
    });
    quoteToShow();
    return quotesArray;
}