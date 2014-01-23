var shoe = []
, playerHand = []
, dealerHand = []
, playerCount
, dealerCount;

// Card Objects
function Card(){
  this.suit = "hearts";
  this.value = 0;
  this.face = "<img src=\"./assets/Playing_Cards/2H.svg\"></img>";
  this.back = "<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>"
}

//Hearts Suit
var acehearts = new Card();
acehearts.value = 11;
acehearts.face = "<img src=\"./assets/Playing_Cards/AH.svg\"></img>";
var twohearts = new Card();
twohearts.value = 2;
twohearts.face = "<img src=\"./assets/Playing_Cards/2H.svg\"></img>";
var threehearts = new Card();
threehearts.value = 3;
threehearts.face = "<img src=\"./assets/Playing_Cards/3H.svg\"></img>";
var fourhearts = new Card();
fourhearts.value = 4;
fourhearts.face = "<img src=\"./assets/Playing_Cards/4H.svg\"></img>";
var fivehearts = new Card();
fivehearts.value = 5;
fivehearts.face = "<img src=\"./assets/Playing_Cards/5H.svg\"></img>";
var sixhearts = new Card();
sixhearts.value = 6;
sixhearts.face = "<img src=\"./assets/Playing_Cards/6H.svg\"></img>";
var sevenhearts = new Card();
sevenhearts.value = 7;
sevenhearts.face = "<img src=\"./assets/Playing_Cards/7H.svg\"></img>";
var eighthearts = new Card();
eighthearts.value = 8;
eighthearts.face = "<img src=\"./assets/Playing_Cards/8H.svg\"></img>";
var ninehearts = new Card();
ninehearts.value = 9;
ninehearts.face = "<img src=\"./assets/Playing_Cards/9H.svg\"></img>";
var tenhearts = new Card();
tenhearts.value = 10;
tenhearts.face = "<img src=\"./assets/Playing_Cards/10H.svg\"></img>";
var jackhearts = new Card();
jackhearts.value = 10;
jackhearts.face = "<img src=\"./assets/Playing_Cards/JH.svg\"></img>";
var queenhearts = new Card();
queenhearts.value = 10;
queenhearts.face = "<img src=\"./assets/Playing_Cards/QH.svg\"></img>";
var kinghearts = new Card();
kinghearts.value = 10;
kinghearts.face = "<img src=\"./assets/Playing_Cards/KH.svg\"></img>";
//Clubs Suit
var aceclubs = new Card();
aceclubs.suit = "clubs";
aceclubs.value = 11;
aceclubs.face = "<img src=\"./assets/Playing_Cards/AC.svg\"></img>";
var twoclubs = new Card();
twoclubs.suit = "clubs";
twoclubs.value = 2;
twoclubs.face = "<img src=\"./assets/Playing_Cards/2C.svg\"></img>";
var threeclubs = new Card();
threeclubs.suit = "clubs";
threeclubs.value = 3;
threeclubs.face = "<img src=\"./assets/Playing_Cards/3C.svg\"></img>";
var fourclubs= new Card();
fourclubs.suit = "clubs";
fourclubs.value = 4;
fourclubs.face = "<img src=\"./assets/Playing_Cards/4C.svg\"></img>";
var fiveclubs = new Card();
fiveclubs.suit = "clubs";
fiveclubs.value = 5;
fiveclubs.face = "<img src=\"./assets/Playing_Cards/5C.svg\"></img>";
var sixclubs = new Card();
sixclubs.suit = "clubs";
sixclubs.value = 6;
sixclubs.face = "<img src=\"./assets/Playing_Cards/6C.svg\"></img>";
var sevenclubs = new Card();
sevenclubs.suit = "clubs";
sevenclubs.value = 7;
sevenclubs.face = "<img src=\"./assets/Playing_Cards/7C.svg\"></img>";
var eightclubs = new Card();
eightclubs.suit = "clubs";
eightclubs.value = 8;
eightclubs.face = "<img src=\"./assets/Playing_Cards/8C.svg\"></img>";
var nineclubs = new Card();
nineclubs.suit = "clubs";
nineclubs.value = 9;
nineclubs.face = "<img src=\"./assets/Playing_Cards/9C.svg\"></img>";
var tenclubs = new Card();
tenclubs.suit = "clubs";
tenclubs.value = 10;
tenclubs.face = "<img src=\"./assets/Playing_Cards/10C.svg\"></img>";
var jackclubs = new Card();
jackclubs.suit = "clubs";
jackclubs.value = 10;
jackclubs.face = "<img src=\"./assets/Playing_Cards/JC.svg\"></img>";
var queenclubs = new Card();
queenclubs.suit = "clubs";
queenclubs.value = 10;
queenclubs.face = "<img src=\"./assets/Playing_Cards/QC.svg\"></img>";
var kingclubs = new Card();
kingclubs.suit = "clubs";
kingclubs.value = 10;
kingclubs.face = "<img src=\"./assets/Playing_Cards/KC.svg\"></img>";
//Diamonds Suit
var acediamonds = new Card();
acediamonds.suit = "diamonds";
acediamonds.value = 11;
acediamonds.face = "<img src=\"./assets/Playing_Cards/AD.svg\"></img>";
var twodiamonds = new Card();
twodiamonds.suit = "diamonds";
twodiamonds.value = 2;
twodiamonds.face = "<img src=\"./assets/Playing_Cards/2D.svg\"></img>";
var threediamonds = new Card();
threediamonds.suit = "diamonds";
threediamonds.value = 3;
threediamonds.face = "<img src=\"./assets/Playing_Cards/3D.svg\"></img>";
var fourdiamonds= new Card();
fourdiamonds.suit = "diamonds";
fourdiamonds.value = 4;
fourdiamonds.face = "<img src=\"./assets/Playing_Cards/4D.svg\"></img>";
var fivediamonds = new Card();
fivediamonds.suit = "diamonds";
fivediamonds.value = 5;
fivediamonds.face = "<img src=\"./assets/Playing_Cards/5D.svg\"></img>";
var sixdiamonds = new Card();
sixdiamonds.suit = "diamonds";
sixdiamonds.value = 6;
sixdiamonds.face = "<img src=\"./assets/Playing_Cards/6D.svg\"></img>";
var sevendiamonds = new Card();
sevendiamonds.suit = "diamonds";
sevendiamonds.value = 7;
sevendiamonds.face = "<img src=\"./assets/Playing_Cards/7D.svg\"></img>";
var eightdiamonds = new Card();
eightdiamonds.suit = "diamonds";
eightdiamonds.value = 8;
eightdiamonds.face = "<img src=\"./assets/Playing_Cards/8D.svg\"></img>";
var ninediamonds = new Card();
ninediamonds.suit = "diamonds";
ninediamonds.value = 9;
ninediamonds.face = "<img src=\"./assets/Playing_Cards/9D.svg\"></img>";
var tendiamonds = new Card();
tendiamonds.suit = "diamonds";
tendiamonds.value = 10;
tendiamonds.face = "<img src=\"./assets/Playing_Cards/10D.svg\"></img>";
var jackdiamonds = new Card();
jackdiamonds.suit = "diamonds";
jackdiamonds.value = 10;
jackdiamonds.face = "<img src=\"./assets/Playing_Cards/JD.svg\"></img>";
var queendiamonds = new Card();
queendiamonds.suit = "diamonds";
queendiamonds.value = 10;
queendiamonds.face = "<img src=\"./assets/Playing_Cards/QD.svg\"></img>";
var kingdiamonds = new Card();
kingdiamonds.suit = "diamonds";
kingdiamonds.value = 10;
kingdiamonds.face = "<img src=\"./assets/Playing_Cards/KD.svg\"></img>";
//Spades Suit
var acespades = new Card();
acespades.suit = "spades";
acespades.value = 11;
acespades.face = "<img src=\"./assets/Playing_Cards/AS.svg\"></img>";
var twospades = new Card();
twospades.suit = "spades";
twospades.value = 2;
twospades.face = "<img src=\"./assets/Playing_Cards/2S.svg\"></img>";
var threespades = new Card();
threespades.suit = "spades";
threespades.value = 3;
threespades.face = "<img src=\"./assets/Playing_Cards/3S.svg\"></img>";
var fourspades= new Card();
fourspades.suit = "spades";
fourspades.value = 4;
fourspades.face = "<img src=\"./assets/Playing_Cards/4S.svg\"></img>";
var fivespades = new Card();
fivespades.suit = "spades";
fivespades.value = 5;
fivespades.face = "<img src=\"./assets/Playing_Cards/5S.svg\"></img>";
var sixspades = new Card();
sixspades.suit = "spades";
sixspades.value = 6;
sixspades.face = "<img src=\"./assets/Playing_Cards/6S.svg\"></img>";
var sevenspades = new Card();
sevenspades.suit = "spades";
sevenspades.value = 7;
sevenspades.face = "<img src=\"./assets/Playing_Cards/7S.svg\"></img>";
var eightspades = new Card();
eightspades.suit = "spades";
eightspades.value = 8;
eightspades.face = "<img src=\"./assets/Playing_Cards/8S.svg\"></img>";
var ninespades = new Card();
ninespades.suit = "spades";
ninespades.value = 9;
ninespades.face = "<img src=\"./assets/Playing_Cards/9S.svg\"></img>";
var tenspades = new Card();
tenspades.suit = "spades";
tenspades.value = 10;
tenspades.face = "<img src=\"./assets/Playing_Cards/10S.svg\"></img>";
var jackspades = new Card();
jackspades.suit = "spades";
jackspades.value = 10;
jackspades.face = "<img src=\"./assets/Playing_Cards/JS.svg\"></img>";
var queenspades = new Card();
queenspades.suit = "spades";
queenspades.value = 10;
queenspades.face = "<img src=\"./assets/Playing_Cards/QS.svg\"></img>";
var kingspades = new Card();
kingspades.suit = "spades";
kingspades.value = 10;
kingspades.face = "<img src=\"./assets/Playing_Cards/KS.svg\"></img>";

$("#newGame").on("click", function(){
  //Adds desired number of decks to the shoe
  var deck = [acehearts, aceclubs, acediamonds, acespades, twohearts, twoclubs, twodiamonds, twospades, threehearts, threeclubs, threediamonds, threespades, fourhearts, fourclubs, fourdiamonds, fourspades, fivehearts, fiveclubs, fivediamonds, fivespades, sixhearts, sixclubs, sixdiamonds, sixspades, sevenhearts, sevenclubs, sevendiamonds, sevenspades, eighthearts, eightclubs, eightdiamonds, eightspades, ninehearts, nineclubs, ninediamonds, ninespades, tenhearts, tenclubs, tendiamonds, tenspades, jackhearts, jackclubs, jackdiamonds, jackspades, queenhearts, queenclubs, queendiamonds, queenspades, kinghearts, kingclubs, kingdiamonds, kingspades]
  , numDecks = 2;//prompt("How many decks would you like to play with? ");
  for(var i = 1; i <= numDecks; i++){
    shoe = shoe.concat(deck);   
  }
  shuffle(shoe);
  return shoe;
}); 
function shuffle(shoe){  
  var m = shoe.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = shoe[m];
    shoe[m] = shoe[i];
    shoe[i] = t;
    }
  return shoe;
};

$("#deal").on("click", function(){
  newRound();
  playerHand = [];
  dealerHand = [];
  $(".cardArea").empty();
  $("#score-message").empty();
  playerHand.push(shoe.shift());
  dealerHand.push(shoe.shift());
  playerHand.push(shoe.shift());
  playerCount = playerHand[0].value+playerHand[1].value;
  dealerCount = dealerHand[0].value;
  $("#playerHand .cardArea").append(playerHand[0].face);
  $("#playerHand .cardArea").append(playerHand[1].face);
  $("#dealerHand .cardArea").append(dealerHand[0].face);
  $("#playerHand h4").text(playerCount);
  $("#dealerHand h4").text(dealerCount);
  if (playerCount === 21){
    endRound();
    $("#score-message").append("<h3>BLACKJACK!!</h3>")
  }
});

$("#hit").on("click", function(){
  playerHand.push(shoe.shift());
  playerCount += playerHand[playerHand.length - 1].value;
  $("#playerHand h4").text(playerCount);
  if(playerCount > 21){
    endRound();
    $("#score-message").append("<h3>BUST!</h3>");
  }
  $("#playerHand .cardArea").append(playerHand[playerHand.length -1].face);
});

$("#stand").on("click", function(){
  dealerHand.push(shoe.shift());
  dealerCount += dealerHand[dealerHand.length - 1].value;
  $("#dealerHand .cardArea").append(dealerHand[dealerHand.length -1].face);
  $("#dealerHand h4").text(dealerCount);
  while (dealerCount < 17){
    dealerHand.push(shoe.shift());
    dealerCount += dealerHand[dealerHand.length - 1].value;
    $("#dealerHand .cardArea").append(dealerHand[dealerHand.length -1].face);
    $("#dealerHand h4").text(dealerCount);
  }
  if(dealerCount > 21){
    endRound();
    $("#score-message").append("<h3>Player Wins!</h3>")
  } else{
    compareScore(playerCount, dealerCount);
  }  
});
function compareScore(playerCount, dealerCount){
  endRound();
  if(playerCount > dealerCount){
    $("#score-message").append("<h3>Player Wins!</h3>")
  } else if(playerCount === dealerCount){
    $("#score-message").append("<h3>PUSH!</h3>")
  } else{
    $("#score-message").append("<h3>Dealer Wins...womp womp</h3>")
  }
}
function endRound(){
  $("#hit").hide();
  $("#stand").hide();
}
function newRound(){
  $("#hit").show();
  $("#stand").show();
}