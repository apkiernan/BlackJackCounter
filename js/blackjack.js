var shoe            = []
,   playerHand      = []
,   dealerHand      = []
,   playerScoreBox = $( "#playerHand h4" )
,   playerCardArea = $( "#playerHand .cardArea" )
,   dealerScoreBox = $( "#dealerHand h4" )
,   dealerCardArea = $( "#dealerHand .cardArea" )
,   playerCount    = 0
,   dealerCount    = 0
,   count          = 0;

// Card Objects
function Card () {
  this.suit = "hearts";
  this.value = 0;
  this.face = "<img src=\"./assets/Playing_Cards/2H.svg\"></img>";
  this.back = "<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>"
}
function Ace () {
  this.isAce = true;
}
Ace.prototype = new Card ();

//Hearts Suit
var acehearts = new Ace();
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
var aceclubs = new Ace();
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
var acediamonds = new Ace();
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
var acespades = new Ace();
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
  var deck = [acehearts, aceclubs, acediamonds, acespades, twohearts, twoclubs, twodiamonds, twospades, threehearts, threeclubs, threediamonds, threespades, fourhearts, fourclubs, fourdiamonds, fourspades, fivehearts, fiveclubs, fivediamonds, fivespades, sixhearts, sixclubs, sixdiamonds, sixspades, sevenhearts, sevenclubs, sevendiamonds, sevenspades, eighthearts, eightclubs, eightdiamonds, eightspades, ninehearts, nineclubs, ninediamonds, ninespades, tenhearts, tenclubs, tendiamonds, tenspades, jackhearts, jackclubs, jackdiamonds, jackspades, queenhearts, queenclubs, queendiamonds, queenspades, kinghearts, kingclubs, kingdiamonds, kingspades]
  , numDecks = prompt("How many decks would you like to play with? ");
  for(var i = 1; i <= numDecks; i++){
    //Adds desired number of decks to the shoe
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

$("#deal").on("click", function () {
  //Reset the players' hands from previous round.

  newRound ();
  playerHand = [];
  dealerHand = [];
  $( ".cardArea" ).empty();
  $( "#score-message" ).empty();

  //Deal 2 cards to player and 1 to dealer.
  getCount();
  playerHand.push( shoe.shift() );
  getCount();
  dealerHand.push( shoe.shift() );
  getCount();
  playerHand.push( shoe.shift() );
  playerCount = playerHand[0].value + playerHand[1].value;
  dealerCount = dealerHand[0].value;
  playerCardArea.append ( playerHand[0].face );
  playerCardArea.append ( playerHand[1].face );
  dealerCardArea.append ( dealerHand[0].face );
  playerScoreBox.text ( playerCount );
  dealerScoreBox.text ( dealerCount );
  //Check for Blackjack
  if ( playerCount === 21 ) {
    endRound();
    $("#score-message").append ( "<h3>BLACKJACK!!</h3>" )
  }
});

$( "#hit" ).on( "click", function () {
  getCount();
  playerHand.push( shoe.shift() );
  playerCount += playerHand[playerHand.length - 1].value;
  playerScoreBox.text( playerCount );
  playerCardArea.append( playerHand[ playerHand.length -1 ].face);
  //Check to see if player busts
  if(playerCount > 21){
    endRound();
    $( "#score-message" ).append( "<h3>BUST!</h3>" );
  }
});

//Begins the dealer's turn
$( "#stand" ).on("click", function () {
  do {
    getCount();
    dealerHand.push( shoe.shift() );
    dealerCount += dealerHand[ dealerHand.length - 1 ].value;
    dealerCardArea.append( dealerHand[ dealerHand.length -1 ].face );
    dealerScoreBox.text( dealerCount );
  } while ( dealerCount < 17 );

  if ( dealerCount > 21 ){
    endRound();
    $( "#score-message" ).append( "<h3>Player Wins!</h3>" )
  } else { 
    compareScore( playerCount, dealerCount );
  }  
});

<<<<<<< HEAD
function compareScore(playerCount, dealerCount){
=======
function compareScore ( playerCount, dealerCount ) {
>>>>>>> gh-pages
  endRound();
  if( playerCount > dealerCount ){
    $( "#score-message" ).append( "<h3>Player Wins!</h3>" )
  } else if( playerCount === dealerCount ){
    $( "#score-message" ).append( "<h3>PUSH!</h3>" )
  } else {
    $( "#score-message" ).append( "<h3>Dealer Wins...womp womp</h3>" )
  }
}

<<<<<<< HEAD
=======
//Removes Hit/Stand buttons each round.
>>>>>>> gh-pages
function endRound(){
  $("#hit").hide();
  $("#stand").hide();
}

<<<<<<< HEAD
=======
//Adds Hit/Stand buttons each round.
>>>>>>> gh-pages
function newRound(){
  $("#hit").show();
  $("#stand").show();
}

<<<<<<< HEAD
=======
var hasAce = function ( hand ) {
  for( var i=0; i < hand.length; i++ ) {
    if( hand[i].isAce ){
      var ace = hand[i];
      return ace;
    }
  }
  return false;
}
function aceBreak ( score, ace ) {
  if( score > 21 && hasAce ) {
    ace.value = 1;
  }
}

function getCount () {
  var topCard = shoe[0];
  if ( topCard.value > 9 ) {
    count --
  } else if ( topCard.value < 7 ) {
    count ++
  } else {
    return count
  }
  return count
}
>>>>>>> gh-pages
