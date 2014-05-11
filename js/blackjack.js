var shoe            = [],
    playerHand      = [],
    dealerHand      = [],
    playerScoreBox = $( "#playerHand h4" ),
    playerCardArea = $( "#playerHand .cardArea" ),
    dealerScoreBox = $( "#dealerHand h4" ),
    dealerCardArea = $( "#dealerHand .cardArea" ),
    playerCount    = 0,
    dealerCount    = 0,
    count          = 0,
    playerAceCounter = 0,
    dealerAceCounter = 0;

// Card Objects
function Card (suit, value, face) {
  this.suit = suit;
  this.value = value;
  this.face = "<img src=\"./assets/Playing_Cards/" + face + ".svg\"></img>";
}

function Ace (suit, value, face) {
  this.isAce = true;
  this.suit = suit;
  this.value = value;
  this.face = "<img src=\"./assets/Playing_Cards/" + face + ".svg\"></img>";
}

//Hearts Suit
var acehearts = new Ace( "hearts", 11, "AH");
var twohearts = new Card( "hearts", 2, "2H");
var threehearts = new Card( "hearts", 3, "3H");
var fourhearts = new Card( "hearts", 4, "4H");
var fivehearts = new Card( "hearts", 5, "5H");
var sixhearts = new Card( "hearts", 6, "6H");
var sevenhearts = new Card( "hearts", 7, "7H");
var eighthearts = new Card( "hearts", 8, "8H");
var ninehearts = new Card( "hearts", 9, "9H");
var tenhearts = new Card( "hearts", 10, "10H");
var jackhearts = new Card( "hearts", 10, "JH");
var queenhearts = new Card( "hearts", 10, "QH");
var kinghearts = new Card( "hearts", 10, "KH");

//Clubs Suit
var aceclubs = new Ace( "clubs", 11, "AC");
var twoclubs = new Card( "clubs", 2, "2C");
var threeclubs = new Card( "clubs", 3, "3C");
var fourclubs = new Card( "clubs", 4, "4C");
var fiveclubs = new Card( "clubs", 5, "5C");
var sixclubs = new Card( "clubs", 6, "6C");
var sevenclubs = new Card( "clubs", 7, "7C");
var eightclubs = new Card( "clubs", 8, "8C");
var nineclubs = new Card( "clubs", 9, "9C");
var tenclubs = new Card( "clubs", 10, "10C");
var jackclubs = new Card( "clubs", 10, "JC");
var queenclubs = new Card( "clubs", 10, "QC");
var kingclubs = new Card( "clubs", 10, "KC");

//Diamonds Suit
var acediamonds = new Ace( "diamonds", 11, "AD");
var twodiamonds = new Card( "diamonds", 2, "2D");
var threediamonds = new Card( "diamonds", 3, "3D");
var fourdiamonds = new Card( "diamonds", 4, "4D");
var fivediamonds = new Card( "diamonds", 5, "5D");
var sixdiamonds = new Card( "diamonds", 6, "6D");
var sevendiamonds = new Card( "diamonds", 7, "7D");
var eightdiamonds = new Card( "diamonds", 8, "8D");
var ninediamonds = new Card( "diamonds", 9, "9D");
var tendiamonds = new Card( "diamonds", 10, "10D");
var jackdiamonds = new Card( "diamonds", 10, "JD");
var queendiamonds = new Card( "diamonds", 10, "QD");
var kingdiamonds = new Card( "diamonds", 10, "KD");

//Spades Suit
var acespades = new Ace( "spades", 11, "AS");
var twospades = new Card( "spades", 2, "2S");
var threespades = new Card( "spades", 3, "3S");
var fourspades = new Card( "spades", 4, "4S");
var fivespades = new Card( "spades", 5, "5S");
var sixspades = new Card( "spades", 6, "6S");
var sevenspades = new Card( "spades", 7, "7S");
var eightspades = new Card( "spades", 8, "8S");
var ninespades = new Card( "spades", 9, "9S");
var tenspades = new Card( "spades", 10, "10S");
var jackspades = new Card( "spades", 10, "JS");
var queenspades = new Card( "spades", 10, "QS");
var kingspades = new Card( "spades", 10, "KS");

$("#newGame").on("click", function(){  
  var deck = [
              acehearts, aceclubs, acediamonds, acespades, twohearts, 
              twoclubs, twodiamonds, twospades, threehearts, threeclubs, 
              threediamonds, threespades, fourhearts, fourclubs, fourdiamonds, 
              fourspades, fivehearts, fiveclubs, fivediamonds, fivespades, 
              sixhearts, sixclubs, sixdiamonds, sixspades, sevenhearts, sevenclubs, 
              sevendiamonds, sevenspades, eighthearts, eightclubs, eightdiamonds, 
              eightspades, ninehearts, nineclubs, ninediamonds, ninespades, tenhearts, 
              tenclubs, tendiamonds, tenspades, jackhearts, jackclubs, jackdiamonds, 
              jackspades, queenhearts, queenclubs, queendiamonds, queenspades, kinghearts, 
              kingclubs, kingdiamonds, kingspades
              ],
      numDecks = prompt("How many decks would you like to play with? ");
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
}

$("#deal").on("click", function () {
  //Reset the players' hands from previous round.

  newRound ();
  playerHand = [];
  dealerHand = [];
  $( ".cardArea" ).empty();
  $( "#score-message h3" ).css ( "visibility", "hidden" )

  //Deal 2 cards to player and 1 to dealer.

  getCount();
  hit( playerHand, playerAceCounter );
  getCount();
  hit( dealerHand, dealerAceCounter );
  getCount();
  hit( playerHand, playerAceCounter );
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
    $("#blackjack").css ( {"visibility": "visible"} );
  };

  if ( playerCount > 21 && playerAceCounter !== 0 ) {
    playerCount -= 10;
    playerAceCounter --;
  }
});

$( "#hit" ).on( "click", function () {
  getCount();
  hit( playerHand, playerAceCounter );
  playerCount += playerHand[ playerHand.length - 1 ].value;
  playerScoreBox.text( playerCount );
  playerCardArea.append( playerHand[ playerHand.length -1 ].face);
  
  //Check to see if player busts
  
  if( playerCount > 21 ){
    if ( playerAceCounter !== 0 ) {
      playerCount -= 10
      playerAceCounter --;
    } else {
      endRound();
      $( "#bust" ).css( "visibility", "visible" );
    };
  }
});

//Begins the dealer's turn

$( "#stand" ).on("click", function () {
  do {

    getCount();
    hit( dealerHand, dealerAceCounter );
    dealerCount += dealerHand[ dealerHand.length - 1 ].value;
    dealerCardArea.append( dealerHand[ dealerHand.length -1 ].face );
    dealerScoreBox.text( dealerCount );

  } while ( dealerCount < 17 );

  if( dealerCount > 21 ){

    if ( dealerAceCounter !== 0 ) {

      dealerCount -= 10
      dealerAceCounter --;

    } else {
      endRound();
      $( "#playerWin" ).css( "visibility", "visible" );

    };
  } else {
    endRound();
    compareScore( playerCount, dealerCount );
  }

});

function compareScore ( playerCount, dealerCount ) {
  endRound();
  if( playerCount > dealerCount ){
    $( "#playerWin" ).css( "visibility", "visible" );
  } else if( playerCount === dealerCount ){
    $( "#push" ).css( "visibility", "visible" );
  } else {
    $( "#dealerWin" ).css( "visibility", "visible" );
  }
}

//Removes Hit/Stand buttons each round.

function endRound(){
  $("#hit").hide();
  $("#stand").hide();
}

//Adds Hit/Stand buttons each round.

function newRound(){
  $("#hit").show();
  $("#stand").show();
}

function getCount () {
  var topCard = shoe[0];
  if ( topCard.value > 9 ) {
    count -- ;
  } else if ( topCard.value < 7 ) {
    count ++ ;
  } else {
    return count;
  }
  return count;
};

function hit ( hand, counter ) {
  var topCard = shoe.shift();
  if ( topCard.isAce ) { 
    counter ++
  };

  hand.push( topCard );

}

$( "#countButton" ).on('click', function () {
  $( "#count" ).text( count );
  $( "#count" ).slideToggle ( 500, function () {
    $( this ).css( "z-index", "10000" );
  });
});