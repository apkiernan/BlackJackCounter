var Shoe = (function () {

	//Card Contructors
	var Card = function (suit, value, face) {
	  this.suit = suit;
	  this.value = value;
	  this.face = "<img src=\"./assets/Playing_Cards/" + face + ".svg\"></img>";
	},

	Ace = function (suit, value, face) {
	  this.isAce = true;
	  this.suit = suit;
	  this.value = value;
	  this.face = "<img src=\"./assets/Playing_Cards/" + face + ".svg\"></img>";
	},

	//Card Objects

	//Hearts Suit
	acehearts = new Ace( "hearts", 11, "AH"),
	twohearts = new Card( "hearts", 2, "2H"),
	threehearts = new Card( "hearts", 3, "3H"),
	fourhearts = new Card( "hearts", 4, "4H"),
	fivehearts = new Card( "hearts", 5, "5H"),
	sixhearts = new Card( "hearts", 6, "6H"),
	sevenhearts = new Card( "hearts", 7, "7H"),
	eighthearts = new Card( "hearts", 8, "8H"),
	ninehearts = new Card( "hearts", 9, "9H"),
	tenhearts = new Card( "hearts", 10, "10H"),
	jackhearts = new Card( "hearts", 10, "JH"),
	queenhearts = new Card( "hearts", 10, "QH"),
	kinghearts = new Card( "hearts", 10, "KH"),

	//Clubs Suit
	aceclubs = new Ace( "clubs", 11, "AC"),
	twoclubs = new Card( "clubs", 2, "2C"),
	threeclubs = new Card( "clubs", 3, "3C"),
	fourclubs = new Card( "clubs", 4, "4C"),
	fiveclubs = new Card( "clubs", 5, "5C"),
	sixclubs = new Card( "clubs", 6, "6C"),
	sevenclubs = new Card( "clubs", 7, "7C"),
	eightclubs = new Card( "clubs", 8, "8C"),
	nineclubs = new Card( "clubs", 9, "9C"),
	tenclubs = new Card( "clubs", 10, "10C"),
	jackclubs = new Card( "clubs", 10, "JC"),
	queenclubs = new Card( "clubs", 10, "QC"),
	kingclubs = new Card( "clubs", 10, "KC"),

	//Diamonds Suit
	acediamonds = new Ace( "diamonds", 11, "AD"),
	twodiamonds = new Card( "diamonds", 2, "2D"),
	threediamonds = new Card( "diamonds", 3, "3D"),
	fourdiamonds = new Card( "diamonds", 4, "4D"),
	fivediamonds = new Card( "diamonds", 5, "5D"),
	sixdiamonds = new Card( "diamonds", 6, "6D"),
	sevendiamonds = new Card( "diamonds", 7, "7D"),
	eightdiamonds = new Card( "diamonds", 8, "8D"),
	ninediamonds = new Card( "diamonds", 9, "9D"),
	tendiamonds = new Card( "diamonds", 10, "10D"),
	jackdiamonds = new Card( "diamonds", 10, "JD"),
	queendiamonds = new Card( "diamonds", 10, "QD"),
	kingdiamonds = new Card( "diamonds", 10, "KD"),

	//Spades Suit
	acespades = new Ace( "spades", 11, "AS"),
	twospades = new Card( "spades", 2, "2S"),
	threespades = new Card( "spades", 3, "3S"),
	fourspades = new Card( "spades", 4, "4S"),
	fivespades = new Card( "spades", 5, "5S"),
	sixspades = new Card( "spades", 6, "6S"),
	sevenspades = new Card( "spades", 7, "7S"),
	eightspades = new Card( "spades", 8, "8S"),
	ninespades = new Card( "spades", 9, "9S"),
	tenspades = new Card( "spades", 10, "10S"),
	jackspades = new Card( "spades", 10, "JS"),
	queenspades = new Card( "spades", 10, "QS"),
	kingspades = new Card( "spades", 10, "KS"),

	deck = [
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

  shoe = [],

	shuffle = function (  ) {
		var m = shoe.length, t, i;
	
		// While there remain elements to shuffle…
		while ( m ) {

			// Pick a remaining element…
	   	i = Math.floor( Math.random() * m-- );

	    // And swap it with the current element.
	    t = shoe[m];
	    shoe[m] = shoe[i];
	    shoe[i] = t;
		};
	
		return shoe;
	},

  buildShoe = function () {
  	var numDecks = $( "select#numDecks option:selected" ).val();


		//Add number of decks to the shoe
  	for ( var i = 0; i < numDecks; i++ ) {
  		shoe = shoe.concat( deck );
  	};

  	shuffle ( shoe );
  },

  getTopCard = function () {
  	return shoe.shift();
  };

  return {
  	'buildShoe': buildShoe,
  	'getTopCard': getTopCard
  };

})();

$( document ).ready( function () {
	var start = $( '#newGame' );
	start.on( 'click', Shoe.buildShoe );

});