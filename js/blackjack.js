var shoe = []
, playerHand = []
, dealerHand = []
, playerCount
, dealerCount
, acehearts = {"suit": "hearts", "value": 11, "face": "<img src=\"./assets/Playing_Cards/AH.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, twohearts = {"suit": "hearts", "value": 2, "face": "<img src=\"./assets/Playing_Cards/2H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, threehearts = {"suit": "hearts", "value": 3, "face": "<img src=\"./assets/Playing_Cards/3H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fourhearts = {"suit": "hearts", "value": 4, "face": "<img src=\"./assets/Playing_Cards/4H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fivehearts = {"suit": "hearts", "value": 5, "face": "<img src=\"./assets/Playing_Cards/5H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sixhearts = {"suit": "hearts", "value": 6, "face": "<img src=\"./assets/Playing_Cards/6H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sevenhearts = {"suit": "hearts", "value": 7, "face": "<img src=\"./assets/Playing_Cards/7H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, eighthearts = {"suit": "hearts", "value": 8, "face": "<img src=\"./assets/Playing_Cards/8H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, ninehearts = {"suit": "hearts", "value": 9, "face": "<img src=\"./assets/Playing_Cards/9H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, tenhearts = {"suit": "hearts", "value": 10, "face": "<img src=\"./assets/Playing_Cards/10H.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, jackhearts = {"suit": "hearts", "value": 10, "face": "<img src=\"./assets/Playing_Cards/JH.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, queenhearts = {"suit": "hearts", "value": 10, "face": "<img src=\"./assets/Playing_Cards/QH.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, kinghearts = {"suit": "hearts", "value": 10, "face": "<img src=\"./assets/Playing_Cards/KH.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, aceclubs = {"suit": "clubs", "value": 11, "face": "<img src=\"./assets/Playing_Cards/AC.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, twoclubs = {"suit": "clubs", "value": 2, "face": "<img src=\"./assets/Playing_Cards/2C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, threeclubs = {"suit": "clubs", "value": 3, "face": "<img src=\"./assets/Playing_Cards/3C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fourclubs = {"suit": "clubs", "value": 4, "face": "<img src=\"./assets/Playing_Cards/4C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fiveclubs = {"suit": "clubs", "value": 5, "face": "<img src=\"./assets/Playing_Cards/5C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sixclubs = {"suit": "clubs", "value": 6, "face": "<img src=\"./assets/Playing_Cards/6C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sevenclubs = {"suit": "clubs", "value": 7, "face": "<img src=\"./assets/Playing_Cards/7C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, eightclubs = {"suit": "clubs", "value": 8, "face": "<img src=\"./assets/Playing_Cards/8C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, nineclubs = {"suit": "clubs", "value": 9, "face": "<img src=\"./assets/Playing_Cards/9C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, tenclubs = {"suit": "clubs", "value": 10, "face": "<img src=\"./assets/Playing_Cards/10C.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, jackclubs = {"suit": "clubs", "value": 10, "face": "<img src=\"./assets/Playing_Cards/JC.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, queenclubs = {"suit": "clubs", "value": 10, "face": "<img src=\"./assets/Playing_Cards/QC.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, kingclubs = {"suit": "clubs", "value": 10, "face": "<img src=\"./assets/Playing_Cards/KC.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, acediamonds = {"suit": "diamonds", "value": 11, "face": "<img src=\"./assets/Playing_Cards/AD.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, twodiamonds = {"suit": "diamonds", "value": 2, "face": "<img src=\"./assets/Playing_Cards/2D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, threediamonds = {"suit": "diamonds", "value": 3, "face": "<img src=\"./assets/Playing_Cards/3D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fourdiamonds = {"suit": "diamonds", "value": 4, "face": "<img src=\"./assets/Playing_Cards/4D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fivediamonds = {"suit": "diamonds", "value": 5, "face": "<img src=\"./assets/Playing_Cards/5D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sixdiamonds = {"suit": "diamonds", "value": 6, "face": "<img src=\"./assets/Playing_Cards/6D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sevendiamonds = {"suit": "diamonds", "value": 7, "face": "<img src=\"./assets/Playing_Cards/7D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, eightdiamonds = {"suit": "diamonds", "value": 8, "face": "<img src=\"./assets/Playing_Cards/8D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, ninediamonds = {"suit": "diamonds", "value": 9, "face": "<img src=\"./assets/Playing_Cards/9D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, tendiamonds = {"suit": "diamonds", "value": 10, "face": "<img src=\"./assets/Playing_Cards/10D.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, jackdiamonds = {"suit": "diamonds", "value": 10, "face": "<img src=\"./assets/Playing_Cards/JD.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, queendiamonds = {"suit": "diamonds", "value": 10, "face": "<img src=\"./assets/Playing_Cards/QD.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, kingdiamonds = {"suit": "diamonds", "value": 10, "face": "<img src=\"./assets/Playing_Cards/KD.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, acespades = {"suit": "spades", "value": 11, "face": "<img src=\"./assets/Playing_Cards/AS.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, twospades = {"suit": "spades", "value": 2, "face": "<img src=\"./assets/Playing_Cards/2S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, threespades = {"suit": "spades", "value": 3, "face": "<img src=\"./assets/Playing_Cards/3S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fourspades = {"suit": "spades", "value": 4, "face": "<img src=\"./assets/Playing_Cards/4S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, fivespades = {"suit": "spades", "value": 5, "face": "<img src=\"./assets/Playing_Cards/5S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sixspades = {"suit": "spades", "value": 6, "face": "<img src=\"./assets/Playing_Cards/6S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, sevenspades = {"suit": "spades", "value": 7, "face": "<img src=\"./assets/Playing_Cards/7S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, eightspades = {"suit": "spades", "value": 8, "face": "<img src=\"./assets/Playing_Cards/8S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, ninespades = {"suit": "spades", "value": 9, "face": "<img src=\"./assets/Playing_Cards/9S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, tenspades = {"suit": "spades", "value": 10, "face": "<img src=\"./assets/Playing_Cards/10S.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, jackspades = {"suit": "spades", "value": 10, "face": "<img src=\"./assets/Playing_Cards/JS.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, queenspades = {"suit": "spades", "value": 10, "face": "<img src=\"./assets/Playing_Cards/QS.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" }
, kingspades = {"suit": "spades", "value": 10, "face": "<img src=\"./assets/Playing_Cards/KS.svg\"></img>", "back":"<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>" };

function getShoe(){
  //Add desired number of decks to the shoe
  var deck = [acehearts, aceclubs, acediamonds, acespades, twohearts, twoclubs, twodiamonds, twospades, threehearts, threeclubs, threediamonds, threespades, fourhearts, fourclubs, fourdiamonds, fourspades, fivehearts, fiveclubs, fivediamonds, fivespades, sixhearts, sixclubs, sixdiamonds, sixspades, sevenhearts, sevenclubs, sevendiamonds, sevenspades, eighthearts, eightclubs, eightdiamonds, eightspades, ninehearts, nineclubs, ninediamonds, ninespades, tenhearts, tenclubs, tendiamonds, tenspades, jackhearts, jackclubs, jackdiamonds, jackspades, queenhearts, queenclubs, queendiamonds, queenspades, kinghearts, kingclubs, kingdiamonds, kingspades]
  , numDecks = 2;//prompt("How many decks would you like to play with? ");
  for(var i = 1; i <= numDecks; i++){
    shoe = shoe.concat(deck);   
  }
  return shoe;
}
  
function shuffle(){  
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

function deal(){
  playerHand = [];
  dealerHand = [];
  playerHand.push(shoe.shift());
  dealerHand.push(shoe.shift());
  playerHand.push(shoe.shift());
  playerCount = playerHand[0]+playerHand[1];
  dealerCount = dealerHand[0];
  $("#playerHand .cardArea").text(playerCount);
  $("#dealerHand .cardArea").text(dealerCount);
  $("#bust","#playerLose","#playerWin").css({"display": "none"})
}

function hit(){
  playerHand.push(shoe.shift());
  playerCount += playerHand[playerHand.length - 1];
  if(playerCount > 21){
    $("#bust").css({"display": "block"});
  }
  $("#playerHand .cardArea").text(playerCount);
}

function sum(x){
  var y, z = 0;
  for (var i = 0; i<x.length; i++){
    y = parseInt(playerHand[i]);
    z += y;
  }
  return z;
}

function dealerTurn(){
  dealerHand.push(shoe.shift());
  dealerCount += dealerHand[dealerHand.length - 1];
  $("#dealerHand .cardArea").text(dealerCount);
  while (dealerCount < 17){
    dealerHand.push(shoe.shift());
    dealerCount += dealerHand[dealerHand.length - 1];
    $("#dealerHand .cardArea").text(dealerCount);
    if (dealerCount > 21){
      console.log("Dealer breaks, player wins!")
    }else{
      //console.log("player's count is " + playerCount);
      //console.log("dealer's count is " + dealerCount);
      compareScore(playerCount, dealerCount);
    }
  }
}
function compareScore(playerCount, dealerCount){
  if(playerCount > dealerCount){
    console.log("Player Wins!");
  } else if(playerCount === dealerCount) {
    console.log("PUSH!");
  } else {
    console.log("Dealer Wins..womp womp");
  }
}
function Card(){
  this.suit = "hearts";
  this.value = 0;
  this.face = "<img src=\"./assets/Playing_Cards/AH.svg\"></img>";
  this.back = "<img src=\"./assets/Playing_Cards/Blue_Back.svg\"></img>";
}