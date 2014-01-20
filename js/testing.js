//Player Objects
function Player(){
  this.hand = [];
  this.score = 0;
  this.chips = 500;
}

Player.prototype.hit = function(x){
  x.hand.push(shoe.shift());
  x.score += x.hand[x.hand.length - 1].value;
  $("#playerHand h3").text(x.score);
  $("#playerHand .cardArea").append(x.hand[x.hand.length -1].face);
}
var player = new Player();
var dealer = new Player();

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