
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.


function Generator(array) {
  this.array = array || [];
  this.generate = function(){
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.array.length);
    var answer = this.array[randomAnswer];
    return answer;
  };

  this.addResult = function(value) {
    this.array.push(value);
  };

  this.removeResult = function(value) {
    for( var i = 0; i < this.array.length-1; i++){
     if ( array[i] === value) {
       this.array.splice(i, 1);
     }
    }
  }
}

var diceRollGenerator = new Generator([1, 2, 3, 4, 5, 6]);

var eightBallGenerator = new Generator([
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."]);

function handleDiceRoll() {
  const diceResult = diceRollGenerator.generate();
  const resultElement = document.getElementById('diceResult');
  resultElement.innerHTML = diceResult;
}

function handleEightBallShake() {
  const ballResult = eightBallGenerator.generate();
  const resultElement = document.getElementById('eightBallResult');
  resultElement.innerHTML = ballResult;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
