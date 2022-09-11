var quotes = [
	{
     
               quote: "Age is foolish and forgetful when it underestimates youth.",
               source: "Albus Dumbledore",
               citation:"Harry potter"
               },
               {
               quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
               source: "Nelson Mandela"
               },
               {
               quote: "To the world, you may be one person. But to one person, you may be the world.",
               source: "Jeon Jungkook"
               },
               {
               quote: "Don't be trapped in someone else's dream.",
               source: "Kim Taeyung",
               },
               {
               quote: "Go on your path, even if you live for a day.",
               source: "Park Jimin"
               },
               {
               quote: "Those who want to look more youthful should live life with a young heart.",
               source: "Kim Seok Jin"
               },
               {
               quote: "we are too young and immature to give up, you idiot",
               source: "Min Yoongi", 
               },
               {
               quote:  "Live your life. It’s yours anyway.Don’t try too hard. It’s okay to lose.",
               source: "Fire"
               },
               {
               quote: "You are the leader of your own life",
               source: "Jung Hoseok"
               },
               {
               quote: "The only time you should ever look back, is to see how far you've come.",
               source: "Butterfly"
               },
               {
               quote: "when you want something, all the universe conspires in helping you to achieve it",
               source: "Paolo Coelho", 
               citation: "The Alchemist",
               
               },
               {
               quote: "Try not to become a man of success. Rather become a man of value.",
               source: "Albert Einstien", 
               
               },
               {
               quote: "No Pressure, No Diomonds",
               source: "Thomas Caryle",
               
               },
               {
               quote: "You will face many defeats in life, but never let yourself be defeated.",
               source: "Maya Angelou"
               },
               {
               quote: "Life is either a daring adventure or nothing at all",
               source: "Helen Keller"
               },
               {
               quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
               source: "Maya Angelou"
               },
               {
               quote: "Whoever is happy will make others happy too. ",
               source: "Anne Frank"
               },
               {
               quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
               source: "Nelson Mandela"
               },
               {
               quote: "Nothing in life is to be feared; it is only to be understood.",
               source: "Marie Curie"
               },
               {
               
               quote: "Those who don't believe in magic will never find it.",
               source: "Roald Dahl"
               },
               {
               quote: "Being pretty isn't everything",
               source: "Kim Jisoo"
               },
               {
               quote: "Maybe I can never fly, Baby I can't touch the sky.",
               source: "Kim Seok Jin"
               },
               {
               quote: "It does not do to dwell on dreams and forget to live.",
               source: "Albus Dumbledore", 
               citation: "Harry Potter and the Sorcerer's Stone",
               },
               {
               quote: "Once your heart is moved, it will develop to something better and positive",
               source: "Park Jimin"
               },
               {
               quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
               source: "Magic Shop"
               },
               {
               quote: "Even though the language is different, the music is the same.",
               source: "Kai"
               },
               {
               quote: "In my next life, I want to be born as a rock.",
               source: "Min Yoongi"
               },
               {
               quote: "Even when I fall and hurt myself, I keep running towards my dream.",
               source: "Epilogue : Young Forever",
               },
               {
               quote: "Though it's hard and it hurts, if I can fly, I will fly.",
               source: "A Supplementary Story : You Never Walk Alone"
               },
               {
               quote: "You shine in this pitch darkness. That is the butterfly effect",
               source: "Butterfly"
               },
               {
               quote: "Would you believe me if I said that I was scared of everything too?",
               source: "Magic Shop"
               },
               {
               quote: "Can't hold me down 'cuz you know I'm a fighter.",
               source: "On"
               },
               {
               quote: "You can't stop me lovin' myself.",
               source: "Idol"
               },
               {
               quote: "Love all, trust a few, do wrong to none.",
               source: "William Shakespeare"
               },
               {
               quote: "Whatever, big or small, you are you after all.",
               source: "Paradice",
               
               },
               {
               quote: "A score does not define who you are as a person.",
               source: "Bang Yongguk."
               }
               
               ];


function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("dis-quote");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

				
					document.body.style.backgroundColor = getRandomColor ();
}

window.setInterval(function(){
printQuote ();
}, 15000);
	
document.getElementById("switchQuote").addEventListener("click", printQuote, false);



