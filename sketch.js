var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0, xPosition=0;
var database;

var form, player, game;

var cars, car1, car2;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-50);
  database = firebase.database();
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
