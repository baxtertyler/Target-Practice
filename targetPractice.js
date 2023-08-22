let targetX; //Coordinates of target
let targetY; //Coordinates of target
let score = 0;
let timer = 60;
let targetSize = 0;
let timerStart = 0;
var mode = 0; //Sets the mode of the game
let targetsHit = 0;
let targetsMissed = 0;
let innerTarget = 30;
let outerTarget = 70;
let innerTargetTemp = 30;
let outerTargetTemp = 70;
let modeName = "Medium";
let chanceMoving = 0;
let chanceShrinking = 0;
let chancePenalty = 0;
let penaltyTarget = false;
let chance = 7;
let timerRemember = 60;
let hsT = 134;
let hsR = 128;
let hsD = 121;
let hsS = 133;
let hitResponse = '';
let hitResponseNum = '';
let lives = 3;
let targetTime;
let survivalMode = false;
let c;
var song;
var tpop;
var miss;
var ding;
var particles = [];
let px;
let pya;
let pyb;
let combo = 0;
let comboMultiplier = 1;
let responseSize = 30;
let responseMode = 0;
let c1bought = false;
let c2bought = false;
let c3bought = false;
let coins;
let totalCoins = 5000;
let cursors = 0;
let selected = 0;
var buttonMenu;
let ci1 = 200;
let ci2 = 0;
let ci3 = 0;
let co1 = 0;
let co2 = 200;
let co3 = 0;

function setup() {
  loop();
  createCanvas(500, 500);
  song = loadSound("music.mp3", loadSong);
  frameRate(60);
  background(220);
  fill(0, 200, 0);
  ellipse(250, 250, 490, 490);
  fill(200, 0, 0);
  ellipse(250, 250, 250, 250);
  textSize(50);
  fill(0, 0, 0);
  text("Target Practice", 83, 180);
  text("Target Practice", 77, 180);
  text("Target Practice", 80, 183);
  text("Target Practice", 80, 177);
  fill(255, 255, 255);
  text("Target Practice", 82, 180);
  text("Target Practice", 78, 180);
  text("Target Practice", 80, 182);
  text("Target Practice", 80, 178);
  fill(0, 0, 0);
  text("Target Practice", 80, 180);

  buttonE = createButton("EASY");
  buttonE.style("background-color", "#FFFFFF");
  buttonE.position(50, 300);
  buttonE.size(100, 50);
  buttonE.mousePressed(bE);

  buttonM = createButton("MEDIUM");
  buttonM.style("background-color", "#fcffa6");
  buttonM.position(150, 300);
  buttonM.size(100, 50);
  buttonM.mousePressed(bM);

  buttonH = createButton("HARD");
  buttonH.style("background-color", "#FFFFFF");
  buttonH.position(250, 300);
  buttonH.size(100, 50);
  buttonH.mousePressed(bH);

  buttonSurvival = createButton("SURVIVAL");
  buttonSurvival.style("background-color", "#FFFFFF");
  buttonSurvival.position(350, 300);
  buttonSurvival.size(100, 80);
  buttonSurvival.mousePressed(bSurvival);

  buttonS = createButton("START");
  buttonS.style("background-color", "#FFFFFF");
  buttonS.position(50, 200);
  buttonS.size(400, 100);
  buttonS.mousePressed(startButton);

  buttonT1 = createButton("15 Seconds");
  buttonT1.style("background-color", "#FFFFFF");
  buttonT1.position(50, 350);
  buttonT1.size(100, 30);
  buttonT1.mousePressed(bT1);

  buttonT2 = createButton("30 Seconds");
  buttonT2.style("background-color", "#FFFFFF");
  buttonT2.position(150, 350);
  buttonT2.size(100, 30);
  buttonT2.mousePressed(bT2);

  buttonT3 = createButton("60 Seconds");
  buttonT3.style("background-color", "#ff8787");
  buttonT3.position(250, 350);
  buttonT3.size(100, 30);
  buttonT3.mousePressed(bT3);
  
  buttonShop = createButton("SHOP");
  buttonShop.style("background-color", "#FFFFFF");
  buttonShop.position(440, 0);
  buttonShop.size(60, 25);
  buttonShop.mousePressed(shopButton);
  

  setTarget();
}

function loadSong() {
  song.play();
}
function loadPop() {
  tpop.play();
}
function loadMiss() {
  miss.play()
}
function loadDing() {
  ding.play();
}

function bE() {
  buttonSurvival.style("background-color", "#FFFFFF");
  buttonE.style("background-color", "#bcffa6");
  buttonM.style("background-color", "#FFFFFF");
  buttonH.style("background-color", "#FFFFFF");
  innerTarget = 50;
  outerTarget = 100;
  innerTargetTemp = 50;
  outerTargetTemp = 100;
  chance = 9;
  modeName = "Easy";
  survivalMode = false;
}
function bM() {
  buttonSurvival.style("background-color", "#FFFFFF");
  buttonM.style("background-color", "#fcffa6");
  buttonE.style("background-color", "#FFFFFF");
  buttonH.style("background-color", "#FFFFFF");
  innerTarget = 30;
  outerTarget = 70;
  innerTargetTemp = 30;
  outerTargetTemp = 70;
  chance = 8;
  modeName = "Medium";
  survivalMode = false;
}
function bH() {
  buttonSurvival.style("background-color", "#FFFFFF");
  buttonH.style("background-color", "#ff8787");
  buttonM.style("background-color", "#FFFFFF");
  buttonE.style("background-color", "#FFFFFF");
  innerTarget = 15;
  outerTarget = 40;
  innerTargetTemp = 15;
  outerTargetTemp = 40;
  chance = 6;
  modeName = "Hard";
  survivalMode = false;
}
function bSurvival() {
  buttonSurvival.style("background-color", "#c70000");
  buttonH.style("background-color", "#FFFFFF");
  buttonM.style("background-color", "#FFFFFF");
  buttonE.style("background-color", "#FFFFFF");
  innerTarget = 15;
  outerTarget = 40;
  innerTargetTemp = 15;
  outerTargetTemp = 40;
  chance = 6;
  modeName = "Survival";
  survivalMode = true;
}

function bT1() {
  buttonT1.style("background-color", "#bcffa6");
  buttonT2.style("background-color", "#FFFFFF");
  buttonT3.style("background-color", "#FFFFFF");
  timer = 15;
  timerRemember = 15;
}
function bT2() {
  buttonT2.style("background-color", "#fcffa6");
  buttonT1.style("background-color", "#FFFFFF");
  buttonT3.style("background-color", "#FFFFFF");
  timer = 30;
  timerRemember = 30;
}
function bT3() {
  buttonT3.style("background-color", "#ff8787");
  buttonT2.style("background-color", "#FFFFFF");
  buttonT1.style("background-color", "#FFFFFF");
  timer = 60;
  timerRemember = 60;
}

function shopConfirm() {
  loop();
  if(mode == 3) {
    textStyle(NORMAL);
    textSize(15);
    totalCoins = totalCoins;
    if(c1bought == true) {
      stroke(0);
      strokeWeight(2);
      fill(0,200,0);
      beginShape();
      vertex(305, 190);
      vertex(300, 195);
      vertex(322.5, 220);
      vertex(340, 170);
      vertex(335, 165);
      vertex(320, 205);
      vertex(305, 190);
      endShape();
      strokeWeight(1);
      textSize(15);
      fill(0);
      text("Purchased", 346, 200);
    }
    if(c2bought == true) {
      stroke(0);
      strokeWeight(2);
      fill(0,200,0);
      beginShape();
      vertex(305, 260);
      vertex(300, 265);
      vertex(322.5, 290);
      vertex(340, 240);
      vertex(335, 235);
      vertex(320, 275);
      vertex(305, 260);
      endShape();
      strokeWeight(1);
      fill(0);
      text("Purchased", 346, 270);
    }
    if(c3bought == true) {
      stroke(0);
      strokeWeight(2);
      fill(0,200,0);
      beginShape();
      vertex(305, 330);
      vertex(300, 335);
      vertex(322.5, 360);
      vertex(340, 310);
      vertex(335, 305);
      vertex(320, 345);
      vertex(305, 330);
      endShape();
      strokeWeight(1);
      fill(0);
      text("Purchased", 346, 340);
    }
    textSize(20);
    text("Total Coins: " + totalCoins, 315, 160);
  }
}
function shopButton() {
  loop();
  background(220);
  textSize(90);
  textStyle(BOLD);
  stroke(0);
  strokeWeight(10);
  fill(0,200,0);
  text("S H O P", 90, 100);
  fill(0);
  strokeWeight(5);
  line(0,130,500,130);
  
  noFill();
  strokeWeight(3);
  square(310, 180, 25);
  square(310, 250, 25);
  square(310, 320, 25);
  fill(0);
  strokeWeight(1);
  
  
  mode = 3;
  buttonS.hide();
  buttonShop.hide();
  buttonE.hide();
  buttonM.hide();
  buttonH.hide();
  buttonSurvival.hide();
  buttonT1.hide();
  buttonT2.hide();
  buttonT3.hide();
  //buttonMenu.show();

  buttonCursorB = createButton("YELLOW TARGETS");
  buttonCursorB.style("background-color", "#FFFFFF");
  buttonCursorB.position(20, 170);
  buttonCursorB.size(100, 50);
  buttonCursorB.mousePressed(targetYellow);
  
  buttonCursorG = createButton("GREEN TARGETS");
  buttonCursorG.style("background-color", "#FFFFFF");
  buttonCursorG.position(20, 240);
  buttonCursorG.size(100, 50);
  buttonCursorG.mousePressed(targetGreen);
  
  buttonCursorR = createButton("RED TARGETS");
  buttonCursorR.style("background-color", "#FFFFFF");
  buttonCursorR.position(20, 310);
  buttonCursorR.size(100, 50);
  buttonCursorR.mousePressed(targetRed);
  
  buttonDefault = createButton("DEFAULT TARGETS");
  buttonDefault.style("background-color", "#BFBFBF");
  buttonDefault.position(20, 380);
  buttonDefault.size(100, 50);
  buttonDefault.mousePressed(defaultButton);
  
  buttonBack = createButton("BACK");
  buttonBack.style("background-color", "#FFFFFF");
  buttonBack.position(45, 450);
  buttonBack.size(50, 25);
  buttonBack.mousePressed(backButton);

  //totalCoins = 3000;
  textSize(20);
  //text("Total Coins: " + totalCoins, 315, 160);
  text("Price: 500 Coins", 130, 200);
  text("Price: 1000 Coins", 130, 270);
  text("Price: 2000 Coins", 130, 340);
  
  
}

function targetYellow() {
  ci1 = 255;
  ci2 = 255;
  ci3 = 200;
  co1 = 255;
  co2 = 255;
  co3 = 0;
  if (totalCoins >= 500 && c1bought == false) {
    cursors = 1;
    noStroke();
    fill(220);
    rect(423, 135, 75, 30);
    stroke(0);
    fill(0);
    totalCoins -= 500;
    selected = 1;
    c1bought = true;
  }
  if (c1bought == true) {
    cursors = 1;
    selected = 1;
    buttonCursorB.style("background-color", "#C2D4FF");
    buttonCursorG.style("background-color", "#FFFFFF");
    buttonCursorR.style("background-color", "#FFFFFF");
    buttonDefault.style("background-color", "#FFFFFF");
  }
}
function targetGreen() {
  ci1 = 0;
  ci2 = 150;
  ci3 = 0;
  co1 = 0;
  co2 = 255;
  co3 = 0;
  if (totalCoins >= 1000 && c2bought == false) {
    cursors = 2;
    noStroke();
    fill(220);
    rect(423, 135, 75, 30);
    stroke(0);
    fill(0);
    totalCoins -= 1000;
    selected = 2;
    c2bought = true;
      
  }
  if (c2bought == true) {
    cursors = 2;
    selected = 2;
    buttonCursorB.style("background-color", "#FFFFFF");
    buttonCursorG.style("background-color", "#d3ffc2");
    buttonCursorR.style("background-color", "#FFFFFF");
    buttonDefault.style("background-color", "#FFFFFF");
  }
}
function targetRed() {
  ci1 = 150;
  ci2 = 0;
  ci3 = 0;
  co1 = 255;
  co2 = 0;
  co3 = 0;
  if (totalCoins >= 2000 && c3bought == false) {
    cursors = 3;
    noStroke();
    fill(220);
    rect(423, 135, 75, 30);
    stroke(0);
    fill(0);
    totalCoins -= 2000;
    selected = 3;
    c3bought = true;
    
  }
  if (c3bought == true) {
    cursors = 3;
    selected = 3;
    buttonCursorB.style("background-color", "#FFFFFF");
    buttonCursorG.style("background-color", "#FFFFFF");
    buttonCursorR.style("background-color", "#ffc2c2");
    buttonDefault.style("background-color", "#FFFFFF");
  }
}
function defaultButton() {
  ci1 = 200;
  ci2 = 0;
  ci3 = 0;
  co1 = 0;
  co2 = 200;
  co3 = 0;
  cursors = 0;
  selected = 0;
  cursor();
  buttonCursorB.style("background-color", "#FFFFFF");
  buttonCursorG.style("background-color", "#FFFFFF");
  buttonCursorR.style("background-color", "#FFFFFF");
  buttonDefault.style("background-color", "#BFBFBF");
}
function backButton() {
  mode = 0;
  background(220);
  strokeWeight(1);
  textStyle(NORMAL);
  fill(0, 200, 0);
  ellipse(250, 250, 490, 490);
  fill(200, 0, 0);
  ellipse(250, 250, 250, 250);
  textSize(50);
  strokeWeight(0);
  fill(0, 0, 0);
  text("Target Practice", 83, 180);
  text("Target Practice", 77, 180);
  text("Target Practice", 80, 183);
  text("Target Practice", 80, 177);
  fill(255, 255, 255);
  text("Target Practice", 82, 180);
  text("Target Practice", 78, 180);
  text("Target Practice", 80, 182);
  text("Target Practice", 80, 178);
  fill(0, 0, 0);
  text("Target Practice", 80, 180);
  buttonCursorB.hide();
  buttonCursorG.hide();
  buttonCursorR.hide();
  buttonDefault.hide();
  buttonBack.hide();
  buttonS.show();
  buttonShop.show();
  buttonE.show();
  buttonM.show();
  buttonH.show();
  buttonSurvival.show();
  buttonT1.show();
  buttonT2.show();
  buttonT3.show();
}

function startButton() {
  loop();
  buttonS.hide();
  buttonE.hide();
  buttonM.hide();
  buttonH.hide();
  buttonSurvival.hide();
  buttonT1.hide();
  buttonT2.hide();
  buttonT3.hide();
  buttonShop.hide();
  highScoreSetup();
  strokeWeight(1);
  if(modeName == "Survival") {
    background(220);
  background(220);
  textSize(40);
  textStyle(BOLDITALIC);
  fill(0);
  text("How to play:", 30, 50);
  
  textStyle(BOLD);
  fill(co1, co2, co3);
  ellipse(80, 120, 80, 80);
  fill(ci1, ci2, ci3);
  ellipse(80, 120, 35, 35);

  fill(0);
  rect(105, 95, 100, 2);
  triangle(105, 93, 105, 99, 100, 96);
  rect(85, 120, 100, 2);
  triangle(85, 118, 85, 124, 80, 121);

  textSize(15);
  fill(0);
  text("Click the outer ring to earn 1 point", 220, 100);
  text("Click the inner circle to earn 2 points", 200, 125);


  fill(0, 200, 0);
  ellipse(420, 230, 80, 80);
  fill(200, 0, 0);
  ellipse(420, 230, 35, 35);

  fill(0);

  text("Targets dissapear after 1 second", 20, 218);
  text("Click within 1 second to gain a point", 20, 240);
  text('If you do not click in time, you will lose a life', 20, 262);
  text("Remember: ", 30, 350);
  text("Some targets will move", 40, 375);
  text("Some targets will shrink", 40, 395);
  text("There is no time limit, but you only have three lives", 40, 415);
  text("Get combos by hitting multiple targets in a row", 40, 435);
  text("Earn coins by hitting targets (harder difficulty = more coins)", 40, 455);

  buttonP = createButton("Play");
  buttonP.style("background-color", "#FFFFFF");
  buttonP.position(250, 330);
  buttonP.size(200, 50);
  buttonP.mousePressed(playButton);
  textStyle(NORMAL);
  }
  
  else {
  background(220);
  textSize(40);
  textStyle(BOLDITALIC);
  fill(0);
  text("How to play:", 30, 50);
  
  textStyle(BOLD);
  fill(co1, co2, co3);
  ellipse(80, 120, 80, 80);
  fill(ci1, ci2, ci3);
  ellipse(80, 120, 35, 35);

  fill(0);
  rect(105, 95, 100, 2);
  triangle(105, 93, 105, 99, 100, 96);
  rect(85, 120, 100, 2);
  triangle(85, 118, 85, 124, 80, 121);
  rect(95, 180, 100, 2);
  triangle(95, 178, 95, 184, 90, 181);

  textSize(15);
  fill(0);
  text("Click the outer ring to earn 1 point", 220, 100);
  text("Click the inner circle to earn 2 points", 200, 125);
  text("Miss the target and lose 1 point", 210, 185);

  fill(0, 68, 204);
  ellipse(420, 270, 80, 80);
  fill(165);
  ellipse(420, 270, 35, 35);

  fill(0);
  rect(250, 269, 100, 2);
  triangle(350, 267, 350, 273, 355, 270);

  text("This is a Penalty target! Click", 20, 258);
  text("this target and lose 3 points.", 20, 280);
  text('"Miss" the target to avoid losing points', 20, 302);
  text("Remember: ", 30, 350);
  text("Some targets will move", 40, 375);
  text("Some targets will shrink", 40, 395);
  text("You have " + timer + " seconds to play", 40, 415);
  text("Get combos by hitting multiple targets in a row", 40, 435);
  text("Earn coins by hitting targets (harder difficulty = more coins)", 40, 455);

  buttonP = createButton("Play");
  buttonP.style("background-color", "#FFFFFF");
  buttonP.position(250, 350);
  buttonP.size(200, 50);
  buttonP.mousePressed(playButton);
  textStyle(NORMAL);
  }
}

function highScoreSetup() {
  if(timerRemember == 15) {
    if(modeName == 'Easy') {
      hsT = 122; hsR = 110; hsD = 130; hsS = 117;
    }
    if(modeName == 'Medium') {
      hsT = 86; hsR = 95; hsD = 81; hsS = 77;
    }
    if(modeName == 'Hard') {
      hsT = 40; hsR = 33; hsD = 44; hsS = 32;
    }
  }
  if(timerRemember == 30) {
    if(modeName == 'Easy') {
      hsT = 252; hsR = 265; hsD = 244; hsS = 261;
    }
    if(modeName == 'Medium') {
      hsT = 186; hsR = 143; hsD = 159; hsS = 192;
    }
    if(modeName == 'Hard') {
      hsT = 136; hsR = 124; hsD = 123; hsS = 133;
    }
  }
  if(timerRemember == 60) {
    if(modeName == 'Easy') {
      hsT = 530; hsR = 487; hsD = 543; hsS = 567;
    }
    if(modeName == 'Medium') {
      hsT = 369; hsR = 388; hsD = 359; hsS = 364;
    }
    if(modeName == 'Hard') {
      hsT = 218; hsR = 205; hsD = 214; hsS = 224;
    }
  }
  if(modeName == "Survival") {
    hsT = 65; hsR = 73; hsS = 77; hsD = 68;
  }
}

function playButton() {
  buttonP.hide();
  mode = 1;
  timerStart++;
}

function draw() {
  ///fill(0);
  //rect(mouseX, mouseY, 50, 50);
  
  textStyle(NORMAL);
  shopConfirm();
  if(modeName == "Survival") penaltyTarget = false;
  if (mode == 1) {
    background(200);
    fill(255);
    
    text("Score: " + score, 10, 50);
    if (modeName == "Survival") {
      strokeWeight(2);
      stroke(0);
      fill(255,0,0);
      beginShape();
      vertex(450, 50);
      vertex(430, 30);
      vertex(440, 20);
      vertex(450, 30);
      vertex(460, 20);
      vertex(470, 30);
      vertex(450, 50);
      endShape();
      if(lives < 2) fill(255);
      beginShape();
      vertex(400, 50);
      vertex(380, 30);
      vertex(390, 20);
      vertex(400, 30);
      vertex(410, 20);
      vertex(420, 30);
      vertex(400, 50);
      endShape();
      if(lives < 3) fill(255);
      beginShape();
      vertex(350, 50);
      vertex(330, 30);
      vertex(340, 20);
      vertex(350, 30);
      vertex(360, 20);
      vertex(370, 30);
      vertex(350, 50);
      endShape();
      strokeWeight(1);
    }
    
    
    
    counter();
    if (timer > 0) {
      textSize(responseSize);
      fill(255);
      text(hitResponse + ' ' + hitResponseNum, 20, 85);
      
      
      
      for(let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      for(let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        if(p.checkDead()){
          particles.splice(i, 1);
        }
      }
    for(let i = 0; i < particles.length; i++){
      particles[i].draw();
    }
    fill(255);
      drawTarget();
      if (chancePenalty > chance + 2 && modeName != "Survival") {
        penaltyTarget = true;
      }
      if (chancePenalty <= chance + 2) {
        penaltyTarget = false;
      }
      px=0;
      pya = 4;
      pyb = 6;
      if (chanceMoving > chance) {
        if (c < 2) {
          targetX++;
          px=5;
        }
        if (c > 2 && c < 4) {
          targetX--;
          px=-5;
        }
        if (c > 4 && c < 6) {
          targetY++;
          pya = 12;
          pyb = 14;
        }
        if (c > 6) {
          targetY--;
          pya = -4;
          pyb = -6;
        }
        if (c < 2 && targetX > (500 + outerTarget/2)) 
          targetX = outerTarget/2 * -1;
        if (c > 2 && c < 4 && targetX < (outerTarget/2) * -1) 
          targetX = outerTarget/2 + 500;
        if (c > 4 && c < 6 && targetY > (500 + outerTarget/2)) 
          targetY = outerTarget/2 * -1;
        if (c > 6 && targetY < (outerTarget/2) * -1) 
          targetY = outerTarget/2 + 500;
      } 
      
      
      else if (chanceShrinking > chance && outerTarget > 10) {
        if (innerTarget > 0) {
          innerTarget -= 0.3;
        }
        outerTarget -= 0.5;
        }
        if (lives == 0 && modeName == "Survival") {
          endScreen();
        }
        if (modeName == "Survival") {
          timer = 99999;
          targetTime++;
        }
        if (modeName == "Survival" && targetTime == 50) {
          lives--;
          combo = 0;
          setTarget();
        }
      textSize(50);
    } 
  }
}

function spawnParticle(x, y, dx, dy, c1, c2, c3) {
  particles.push(new Particle(x, y, dx, dy, c1, c2, c3, 4));
}

function counter() {
  if (modeName != "Survival") {
    textSize(50);
    fill(255);
    text("Time: " + timer, 300, 50);
    if (timer <= 5) {
      textStyle(BOLD);
      textSize(400);
      text(timer, 140, 400);
    }
    textStyle(NORMAL);
    if (frameCount % 60 == 0 && timer > 0 && timerStart > 0) timer--;
    if (timer == 0) endScreen();
  }
}

//Draws Target
function drawTarget() {
  fill(co1, co2, co3);
  strokeWeight(1);
  stroke(0);
  if (modeName != "Survival" && chancePenalty > chance + 2) {
    fill(0, 68, 204);
  }
  circle(targetX, targetY, outerTarget);
  fill(ci1, ci2, ci3);
  if (modeName != "Survival" && chancePenalty > chance + 2) {
    fill(165);
  }
  circle(targetX, targetY, innerTarget);
}

//Set new Target coordinates
function setTarget() {
  targetX = 60 + Math.random() * (width - 100);
  targetY = 100 + Math.random() * (height - 160);
  innerTarget = innerTargetTemp;
  outerTarget = outerTargetTemp;
  chanceMoving = random(0, 10);
  chanceShrinking = random(0, 10);
  if (modeName != "Survival") chancePenalty = random(0, 10);
  targetTime = 0;
  c = random(0,8);
}

//Target Clicked
function mousePressed() {
  //textSize(40);
  let distance = dist(mouseX, mouseY, targetX, targetY) - 5;
  if (distance < innerTarget / 2 && timerStart > 0) {
    particleAnnimationHit(targetX, targetY, px, pya, pyb);
    if (penaltyTarget == true) {
      score -= 3;
      lives--;
      hitResponse = 'PENALTY!';
      hitResponseNum = '-3';
      combo = 0;
      miss = loadSound("error.mp3", loadMiss);
    }
    else {
      if (combo <= 5) {
        score += 2;
        comboMultiplier = 1;
      }
      if (combo > 5 && combo <= 10) {
        score += 4;
        comboMultiplier = 2;
      }
      if (combo > 10) {
        score += 6;
        comboMultiplier = 3;
      }
      tpop = loadSound("pop.mp3", loadPop);
    }
      combo++;
      hitResponse = 'BULLSEYE!';
      hitResponseNum = '+2 x ' + comboMultiplier;
      
      targetsHit++;
      setTarget();
    }
  
  else if (distance < outerTarget / 2 && timerStart > 0) {
    particleAnnimationHit(targetX, targetY, px, pya, pyb);
    if (penaltyTarget == true && modeName != "Survival") {
      score -= 3;
      lives--;
      hitResponse = 'PENALTY!';
      hitResponseNum = '-3';
      combo = 0;
      miss = loadSound("error.mp3", loadMiss);
    } 
    else {
      score += 1;
      if (combo <= 5) {
        score += 1;
        comboMultiplier = 1;
      }
      if (combo > 5 && combo <= 10) {
        score += 2;
        comboMultiplier = 2;
      }
      if (combo > 10) {
        score += 3;
        comboMultiplier = 3;
      }
            tpop = loadSound("pop.mp3", loadPop);
    }
      combo++;
      hitResponse = 'HIT!';
      hitResponseNum = '+1 x ' + comboMultiplier;

      targetsHit++;
      setTarget();
    
  } 
  else if (distance > outerTarget / 2 && timerStart > 0 && 
           timer > 0 && timer < timerRemember) {
    particelAnnimationMiss(mouseX, mouseY);
    if (penaltyTarget == true) {
      hitResponse = 'PENALTY AVOIDED!';
      hitResponseNum = '-0';
      ding = loadSound("ding.mp3", loadDing);
    } 
    else {
      score -= 1;
      lives--;
      combo = 0;
      hitResponse = 'MISS!';
      hitResponseNum = '-1';
      miss = loadSound("error.mp3", loadMiss);
    }
    targetsMissed++;
    setTarget();
  }
}

function particleAnnimationHit(posX, posY, parx, parya, paryb) {
  for(let i = 0; i < outerTarget * 2.5; i++){
    let x = posX + random(outerTarget / 2 * -1, outerTarget / 2);
    let y = posY + random(outerTarget / 2 * -1, outerTarget / 2);
    let d;
    for(let i = 0; i < 20; i++)
    {
      d = dist(posX, posY, x, y);
      if(d > outerTarget/2 -5|| d < innerTarget/2)
      {
        x = posX + random(outerTarget / 2 * -1 - 5, outerTarget / 2 + 5);
        y = posY + random(outerTarget / 2 * -1 - 5, outerTarget / 2 + 5);
      }
    }
    if(penaltyTarget == false) {
      spawnParticle(x, y, parx, random(parya, paryb), co1, co2, co3);
    }
    if(penaltyTarget == true) {
      spawnParticle(x, y, parx, random(parya, paryb), 0, 68, 204);
    }
  }
  for(let i = 0; i < innerTarget * 1.5; i++) {
    let x2 = posX + random(innerTarget / 2 * -1, innerTarget / 2);
    let y2 = posY + random(innerTarget / 2 * -1, innerTarget / 2);
    let d2;
    for(let i = 0; i < 20; i++)
    {
      d2 = dist(posX, posY, x2, y2);
      if(d2 > innerTarget/2-2)
      {
        x2 = posX + random(innerTarget / 2 * -1 - 5, innerTarget / 2 + 5);
        y2 = posY + random(innerTarget / 2 * -1 - 5, innerTarget / 2 + 5);
      }
    }
    if(penaltyTarget == false) {
      spawnParticle(x2, y2, parx, random(parya, paryb), ci1, ci2, ci3);
    }
    if(penaltyTarget == true) {
      spawnParticle(x2, y2, parx, random(parya, paryb), 165, 165, 165);
    }
  }
}

function particelAnnimationMiss(posX, posY) {
  for(let i = 0; i < 50; i++) {
    if(penaltyTarget == false) {
      let x = random(-10,10);
      let y = random(-10,10);
      spawnParticle(posX + x, posY + x, 0, -5, 0, 0, 0);
      spawnParticle(posX + y, posY - y, 0, -5, 0, 0, 0);
    }
    if(penaltyTarget == true) {
      let x = random(-10,0);
      let y = random(0, 20);
      spawnParticle(posX + x, posY + x, 0, -5, 0, 100, 0);
      spawnParticle(posX + y, posY - y, 0, -5, 0, 100, 0);
    }
  }
}

function spawnParticle(x, y, dx, dy, c1, c2, c3) {
  particles.push(new Particle(x, y, dx, dy, c1, c2, c3, 4));
}

function reset() {
  score = 0;
  timer = 60;
  combo = 0;
  comboMultiplier = 1;
  targetSize = 0;
  timerStart = 0;
  mode = 0;
  lives = 3;
  targetsHit = 0;
  targetsMissed = 0;
  innerTarget = 30;
  outerTarget = 70;
  innerTargetTemp = 30;
  outerTargetTemp = 70;
  modeName = "Medium";
  chanceMoving = 0;
  chanceShrinking = 0;
  chancePenalty = 0;
  penaltyTarget = false;
  chance = 7;
  timerRemember = 60;
  hsT = 134;
  hsR = 128;
  hsD = 121;
  hsS = 133;
  hitResponse = '';
  hitResponseNum = '';
  //resetButton.hide();
  lives = 3;
  survivalMode = false;
  setup();
}

function keyPressed() {
  if(key == 'r' && mode == 5) {
    reset();
  }
}

function response() {
  mode = 0;
  if(responseSize < 30 && responseMode == 0) {
        responseSize+=2;
    
      }
      if(responseSize == 30) responseMode = 1;
      if(responseSize > 20 && responseMode == 1) {
        responseSize-=2;
      }
      if(responseSize == 30) responseMode = 2;
}

function endScreen() {
  mode = 5;
  noLoop();
  
  let multiplyer;
  if(modeName == "Easy") multiplier = 0.5;
  if(modeName == "Medium") multiplier = 1;
  if(modeName == "Hard") multiplier = 1.2;
  if(modeName == "Survival") multiplier = 1.5;

  let tempCoins = score * multiplier;
  tempCoins = Math.trunc(tempCoins);
  totalCoins = totalCoins + tempCoins;
  for(let i = particles.length - 1; i >= 0; i--) {
    particles.splice(i, 1);
  }
  hitResponse = '';
  hitResponseNum = '';
  background(230);
  if(score < 0) score = 0;

  if(modeName == "Survival") {
    textSize(80);
    fill(0);
    text("F I N I S H !", 44, 100);
    text("F I N I S H !", 36, 100);
    text("F I N I S H !", 40, 104);
    text("F I N I S H !", 40, 96);
    fill(255, 0, 0);
    text("F I N I S H !", 40, 100);

    textSize(50);
    fill(0);
    textStyle(NORMAL);
    text("FINAL SCORE: " + score, 40, 180);
    textSize(30);
    text("Game Mode: " + modeName, 50, 240);
    text("Total Hits: " + targetsHit, 50, 280);
    strokeWeight(1);
    fill(0, 200, 0);
    ellipse(400, 295, 100, 100);
    fill(200, 0, 0);
    ellipse(400, 295, 50, 50);
  
    noFill();
    strokeWeight(3);
    rect(40, 380, 420, 80);
    textSize(20);
    strokeWeight(1);
    fill(0);
    textStyle(NORMAL);
    text("Developer High Scores (" + modeName + ")", 45, 405);
    text("T: " + hsT, 45, 430);
    text("R: " + hsR, 250, 450);
    text("D: " + hsD, 250, 430);
    text("S: " + hsS, 45, 450);
    text("press 'r' to reset", 170, 485);
  }
  else {
    textSize(80);
    textStyle(BOLD);
    fill(0);
    text("F I N I S H !", 44, 100);
    text("F I N I S H !", 36, 100);
    text("F I N I S H !", 40, 104);
    text("F I N I S H !", 40, 96);
    fill(255, 0, 0);
    text("F I N I S H !", 40, 100);

    textSize(50);
    fill(0);
    textStyle(NORMAL);
    text("FINAL SCORE: " + score, 40, 180);
    textSize(30);
    text("Game Mode: " + modeName, 50, 240);
    text("Time Played: " + timerRemember + " sec", 50, 280);
    text("Total Hits: " + targetsHit, 50, 320);
    text("Total Misses: " + targetsMissed, 50, 360);
    strokeWeight(1);
    fill(co1, co2, co3);
    ellipse(400, 295, 100, 100);
    fill(ci1, ci2, ci3);
    ellipse(400, 295, 50, 50);
  
    noFill();
    strokeWeight(3);
    rect(40, 380, 420, 80);
    strokeWeight(1);
    textSize(20);
    fill(0);
    textStyle(NORMAL);
    text("Developer High Scores (" + modeName + " : " + timerRemember + " sec)", 45, 405);
    text("T: " + hsT, 45, 430);
    text("R: " + hsR, 250, 450);
    text("D: " + hsD, 250, 430);
    text("S: " + hsS, 45, 450);
    text("press 'r' to reset", 170, 485);
  }
}