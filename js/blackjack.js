var shoe = []
, playerHand = []
, dealerHand = []
, playerCount
, dealerCount;
function getShoe(){
  //Add desired number of decks to the shoe
  var deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11]
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
  playerHand.push(shoe.shift());
  playerHand.push(shoe.shift());
  playerCount = playerHand[0]+playerHand[1];
  $("#playerHand .cardArea").text(playerCount);
}
function hit(){
  playerHand.push(shoe.shift());
  playerCount = sum(playerHand);
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
