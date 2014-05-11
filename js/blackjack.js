var Shoe = (function () {

	// All cards, deck and shoe are private 
	// and hidden from player to prohibit cheating
	// via the console.


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

	//Seed deck to build shoe from
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


//Player Objects and Methods
var Player = function ( display, cardArea ) {
	this.hand = [];
	this.score = 0;
	this.aceCounter = 0;
	this.display = display;
	this.cardArea = cardArea;
};

Player.prototype.hit = function () {
	var card = Shoe.getTopCard();

	// Ace's are 11 unless they put the player/dealer over 21, 
	// then they are worth 1.
	// This keeps track of if the player is holding an ace.
	if ( card.isAce ) {
		this.aceCounter ++;
	};


	this.score += card.value;
	this.hand.push( card );
	this.updateBoard( card );

	if ( this.scoreOver21() ) {

		// Check if player/dealer has an ace
		if ( this.aceCounter ) {

			// Effectively changes the Ace to 1, and removes it from the counter
			this.score -= 10;
			this.aceCounter--;

			// Update player/dealer score with change to Ace.
			this.display.html( this.score );
		} else {
			if ( player === this ) {
				Game.bust();
			} else {
				Game.playerWins();
			}
			
		};
	}; 
};

Player.prototype.updateBoard = function ( card ) {
	this.display.html( this.score );
	this.cardArea.append( card.face );
};

Player.prototype.scoreOver21 = function () {
	return this.score > 21;
}

// Resets everything for the next round
Player.prototype.resetHand = function () {
	this.hand = [];
	this.score = 0;
	this.aceCounter = 0;
	this.display.empty();
	this.cardArea.empty();
}

var player = new Player ( $('#playerHand h4' ), $('#playerHand .cardArea' ) );
var dealer = new Player ( $('#dealerHand h4' ), $('#dealerHand .cardArea' ) );

// Dealer has predefined moves and must hit until 
// score is at or over 17.
// ***Possible room for other options based on BJ rules.***
dealer.dealerTurn = function () {
	do {
		this.hit();
	} while ( this.score < 17 );
};


var Game = {

	dealCards: function () {
		player.hit();
		dealer.hit();
		player.hit();

		Game.isBlackJack();
	},

	endRound: function () {
		$( '#hit' ).hide();
		$( '#stand' ).hide();
	},

	newRound: function () {
		player.resetHand();
		dealer.resetHand();
		$( '#hit' ).show();
		$( '#stand' ).show();
		$( '#score-message h3').css( 'visibility', 'hidden' );
	},

	compareScore: function ( player, dealer ) {
		if ( player > 21 || dealer > 21 ) {
			return;
		}

		if ( player > dealer ) {
			Game.playerWins();
		} else if ( player < dealer ) {
			Game.playerLoses();
		} else {
			Game.draw();
		}
	},
 
	playerLoses: function () {
		Game.endRound();
		$( '#dealerWin' ).css( 'visibility', 'visible' ); 
	},

	playerWins: function () {
		Game.endRound();
		$( '#playerWin' ).css( 'visibility', 'visible' ); 
	},

	draw: function () {
		Game.endRound();
		$( '#push' ).css( 'visibility', 'visible' ); 
	},

	isBlackJack: function ( score ) {
		if ( score === 21 ) {
			Game.endRound();
			$( '#blackjack' ).css( 'visibility', 'visible' ); 
		}
	},

	bust: function () {
		Game.endRound();
		$( '#bust' ).css( 'visibility', 'visible' ); 
	}

}



$( document ).ready( function () {

	$( '#newGame' ).on( 'click', Shoe.buildShoe );
	
	$( '#deal' ).on( 'click', function () {
		Game.newRound();
		Game.dealCards(); 
		Game.isBlackJack( player.score );
	});
	
	$( '#hit' ).on( 'click', function () {
		player.hit.call( player );
	});

	$( '#stand' ).on( 'click', function () {
		dealer.dealerTurn.call( dealer );
		Game.compareScore ( player.score, dealer.score );  
	});
});