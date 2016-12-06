$(document).ready(function() {
  drawCars();
});
$(document).keydown(function(event) {
  var code = (event.keyCode ? event.keyCode : event.which);
  if (code === 65 && hitChecker === 0) {
    playerX -= 38;
    player.src = "img/playerleft.png";
    initialize();
  }
  if (code === 68 && hitChecker === 0) {
    playerX += 38;
    player.src = "img/playerright.png";
    initialize();
  }
  if (code === 87 && hitChecker === 0) {
    playerY -= 38;
    player.src = "img/player.png";
    initialize();
  }
  if (code === 83 && hitChecker === 0) {
    playerY += 38;
    player.src = "img/playerdown.png";
    initialize();
  }
});

var win = 0;

function initialize() {
  drawBackground();
  drawPlayer();
  checkCollision();
  checkCollision2();
  checkWin();
  drawLives();
}

var lives = 3;
var liveCheck = 0;

function drawPlayer() {
  var context = document.getElementById('myCanvas').getContext("2d");
  context.drawImage(player, playerX, playerY, 60, 60);
}

function drawBackground() {
  var context = document.getElementById("myCanvas").getContext("2d");
  context.drawImage(bround, 0, 0, 800, 800);
}

function drawCars() {
  pictArray.push(createImage("img/carblue2.png", "car1", -1000, 100));
  pictArray.push(createImage("img/carblue2.png", "car8", -600, 100));
  pictArray.push(createImage("img/carred2.png", "car2", -200, 100));
  pictArray.push(createImage("img/carblue2.png", "car3", -300, 300));
  pictArray.push(createImage("img/carred2.png", "car5", -800, 300));
  pictArray.push(createImage("img/carblue2.png", "car7", -1300, 300));
  pictArray.push(createImage("img/carred2.png", "car4", -150, 560));
  pictArray.push(createImage("img/carblue2.png", "car6", -650, 560));
  pictArray.push(createImage("img/carred2.png", "car9", -400, 560));

  pictArray2.push(createImage("img/carblue.png", "car10", 1100, 200));
  pictArray2.push(createImage("img/carred.png", "car12", 1400, 200));
  pictArray2.push(createImage("img/carred.png", "car13", 1600, 200));
  pictArray2.push(createImage("img/carred.png", "car11", 1000, 460));
  pictArray2.push(createImage("img/carblue.png", "car14", 1200, 460));
  pictArray2.push(createImage("img/carred.png", "car15", 1800, 460));
  pictArray2.push(createImage("img/carblue.png", "car18", 1100, 660));
  pictArray2.push(createImage("img/carred.png", "car16", 1250, 660));
  pictArray2.push(createImage("img/carred.png", "car17", 1500, 660));
  pictArray2.push(createImage("img/carblue.png", "car19", 1700, 660));
  animateCars();
}

function animateCars() {
  a=requestAnimationFrame(animateCars);
  createCars();
  createCars2();
}

function createCars() {
  drawBackground();
  drawPlayer();
  var context = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<pictArray.length;i++) {
        pictArray[i].left+=3;
        context.drawImage(pictArray[i],pictArray[i].left, pictArray[i].top,100,50);
        if(pictArray[i].left>800){
            pictArray[i].left = -200;
        }
    }
checkCollision();
drawLives();
  if (hitChecker === 1) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
      context.fillStyle = "black";
      context.font = "50px 'Bungee', cursive";
      context.fillText("You Win!!!", 170, 780);
      player.src = "img/win.png";
      winChecker = 1;
  }
}

function createCars2() {
  drawPlayer();
  var context = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<pictArray2.length;i++) {
        pictArray2[i].left-=3;
        context.drawImage(pictArray2[i],pictArray2[i].left, pictArray2[i].top,100,50);
        if(pictArray2[i].left<-150){
            pictArray2[i].left = +950;
        }
    }
checkCollision2();
drawLives();
  if (hitChecker === 1) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
      context.fillStyle = "black";
      context.font = "50px 'Bungee', cursive";
      context.fillText("You Win!!!", 170, 780);
      player.src = "img/win.png";
      winChecker = 1;
  }
}

var hitChecker = 0;

function checkCollision() {
  var context = document.getElementById('myCanvas').getContext("2d");
  for (i = 0; i<pictArray.length; i++) {
    if (playerX + 60 > pictArray[i].left && playerX < pictArray[i].left + 60 && playerY + 60 > pictArray[i].top && playerY < pictArray[i].top + 60) {
        hitChecker = 1;
        if (hitChecker = 1 && winChecker === 0) {
          var canvas = document.getElementById('myCanvas');
          var context = canvas.getContext('2d');
            context.fillStyle = "black";
            context.font = "25px 'Bungee', cursive";
            context.fillText("You got Hit, you Lose a life", 45, 760);
            player.src = "img/dead.jpg";
            liveCheck++;
          if (liveCheck === 1) {
            lives = lives - 1;
          }
        }
    }
  }
}

function checkCollision2() {
  for (i = 0; i<pictArray2.length; i++) {
    if (playerX + 60 > pictArray2[i].left && playerX < pictArray2[i].left + 60 && playerY + 60 > pictArray2[i].top && playerY < pictArray2[i].top + 60) {
        hitChecker = 1;
        if (hitChecker = 1 && winChecker === 0) {
          var canvas = document.getElementById('myCanvas');
          var context = canvas.getContext('2d');
            context.fillStyle = "black";
            context.font = "25px 'Bungee', cursive";
            context.fillText("You got Hit, you Lose a life", 45, 760);
            player.src = "img/dead.jpg";
            liveCheck++;
          if (liveCheck === 1) {
            lives = lives - 1;
          }
        }
    }
  }
}

  var winChecker = 0;
function checkWin() {
  if (playerX + 800 > 0 && playerX < 0 + 800 && playerY + 0 > 0 && playerY < 0 + 60) {
      hitChecker = 1;
      if (hitChecker = 1) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
          context.fillStyle = "black";
          context.font = "40px 'Bungee', cursive";
          context.fillText("You Win!!!", 170, 780);
          console.log('win');
          player.src = "img/win.png";
          winChecker = 1;
          win++;
      }
  }
}

var createImage = function(src, title, xcoord, ycoord) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    return img;
};

var pictArray = [];
var pictArray2 = [];

var player = new Image();
player.src = "img/player.png";
var playerX = 330;
var playerY = 730;

var heart = new Image();
heart.src = "img/heart.png";


var bround = new Image();
bround.src = "img/bround.png";

function drawLives() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
      console.log(lives);
  if (lives === 3) {
    context.drawImage(heart, 10, 10, 60, 60);
    context.drawImage(heart, 70, 10, 60, 60);
    context.drawImage(heart, 130, 10, 60, 60);
  }
  if (lives === 2) {
    context.drawImage(heart, 10, 10, 60, 60);
    context.drawImage(heart, 70, 10, 60, 60);
  }
  if (lives === 1) {
    context.drawImage(heart, 10, 10, 60, 60);
  }
  if (lives === 0) {
    context.fillStyle = "black";
    context.font = "50px 'Bungee', cursive";
    context.fillText("YOU LOSE!!!", 230, 410);
  }
    context.fillStyle = "black";
    context.font = "30px 'Bungee', cursive";
    context.fillText("Wins: " + win, 550, 60);
}

function resetGame() {
  if (lives != 0) {
    playerX = 330;
    playerY = 730;
    winChecker = 0;
    hitChecker = 0;
    player.src = "img/player.png";
    liveCheck = 0;
  }
}
