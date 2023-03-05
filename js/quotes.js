const quotes = [
    {
        quote: "조급하지 않게, 제대로 , 꾸준히",
        author: "- Maru"
    },
    {
        quote: "나는 아주 평범한, 아니 살짝 모자를지도 모르는 인간이다. 높은 효율을 기대하지 말자",
        author: "- Maru"
    },
    {
        quote: "모든 것은 다시 제자리에, 청소와 정리, 환기는 인생살이의 기본이다.",
        author: "- Maru"
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(quotes.length* Math.random())]


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;