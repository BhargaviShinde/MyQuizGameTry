var database, quiz;

var gameState = 0;
var contestantCount = 0;
var quiz, question, contestant;

var allPlayers;

function setup(){
  canvas = createCanvas(850,800);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("pink");
  if(gameState === 1){
    quiz.play();
    }

    if(gameState === 2){
      quiz.hide();
      Contestant.getPlayerInfo();
      quiz.end();
      }
}
