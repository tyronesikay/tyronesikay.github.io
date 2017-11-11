$(document).ready(function(){

  function newQuote(){

  var quotes = ["Stay away from negative people.  They have a problem for every solution.", "If you even dream of beating me, you'd better wake up and apologize.", "If you can dream it,  You can do it.", "Every strike brings me closer to the next home run.", "If you tell the truth, you don't have to remember anything."];
  var authors = ["- Albert Einstein", "- Muhammad Ali", "- Walt Disney", "- Babe Ruth", "- Mark Twain"];

  var randomNum = Math.floor(Math.random()*authors.length);
  randomQuotes = quotes[randomNum]; //why it doesn't work if i put var?
  randomAuthor = authors[randomNum];

  $(".quote").text("\"" + randomQuotes +"\"");
  $(".author").text(randomAuthor);
  }
  $/* use . for class tag */(".button1, .quoteBox").on("click", function(){
    newQuote();
  $/* use # for ID tag */("#tweet").on("click", function(){
   window.open("https://twitter.com/intent/tweet?text=" + "\"" + randomQuotes +"\" " + randomAuthor);
  });
  });

});
