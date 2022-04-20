function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("my-container")
  // YOUR CODE HERE
  background(random(50), random(100), random(255));
  //two looping graphics codes
  for (let i = 60; i < 600; i += 120) {
    graphics1(i, 60);
  }
  for (let i = 70; i < 550; i += 120) {
    graphics2(i, 100);
  }
  for (let i = 60; i < 600; i += 120) {
    graphics1(i, 150);
  }
  for (let i = 70; i < 550; i += 120) {
    graphics2(i, 190);
  }
  for (let i = 60; i < 600; i += 120) {
    graphics1(i, 240);
  }
  for (let i = 70; i < 550; i += 120) {
    graphics2(i, 280);
  }
  for (let i = 60; i < 600; i += 120) {
    graphics1(i, 330);
  }
  for (let i = 70; i < 550; i += 120) {
    graphics2(i, 370);
  }
  for (let i = 60; i < 600; i += 120) {
    graphics1(i, 420);
  }
  for (let i = 70; i < 550; i += 120) {
    graphics2(i, 460);
  }
  for (let i = 60; i < 600; i += 120) {
    graphics1(i, 510);
  }
  //frame
  push();
  strokeWeight("4");
  rect(10, 10, 580, 580);
  fill("#ffd966");
  pop();

  //saveCanvas("shavonne", "png");
}
function graphics1(x, y) {
  stroke("#ffd966");
  noFill();
  ellipse(x, y, 100, 60);
  fill(map(x, 0, 600, 0, 100), map(y, 0, 600, 0, 255), map(x, 0, 600, 0, 250));
  circle(x, y, 40);
  noFill();
  circle(x, y, 50);
}
function graphics2(x, y) {
  outline = 27.5;
  inline = 25;
  stroke("#ffd966");
  fill(255);
  ellipse(x + 50, y, inline, inline);
  fill("#f1c232");
  noStroke();
  stroke("#ffd966");
  noFill();
  ellipse(x + 50, y, outline, outline);
  fill("#000066");
  noStroke();
  ellipse(x + 50, y, inline / 2, inline);
}

 //rotating looping graphics codes start here
  /*graphics1(300,300)
push()
  translate(400, 300);
  scale(0.5)
  rotate(PI/2)
  graphics1(0,0)
  pop()
  push()
  translate(200, 300);
  scale(0.5)
  rotate(PI/2)
  graphics1(0,0)
  pop()
  push()
  translate(300, 400);
  scale(0.5)
  graphics1(0,0)
  pop()
  push()
  translate(300, 200);
  scale(0.5)
  graphics1(0,0)
  pop()
  push()
  translate(365, 230);
  scale(0.5)
  rotate(PI/6)
  graphics1(0,0)
  pop()
  push()
  translate(365, 370);
  scale(0.5)
  rotate(-PI/3)
  graphics1(0,0)
  pop()
  push()
  translate(235, 230);
  scale(0.5)
  rotate(-PI/6)
  graphics1(0,0)
  pop()
  push()
  translate(235, 370);
  scale(0.5)
  rotate(PI/3)
  graphics1(0,0)
  pop()
  push()
  translate(360, 160);
  scale(0.6)
  rotate(PI/6)
  graphics1(0,0)
  pop()
  push()
  translate(430, 220);
  scale(0.6)
  rotate(PI/4)
  graphics1(0,0)
  pop()
  push()
  translate(450, 320);
  scale(0.6)
  rotate(-PI/2)
  graphics1(0,0)
  pop()
  push()
  translate(415, 405);
  scale(0.6)
  rotate(-PI/3.5)
  graphics1(0,0)
  pop()
  push()
  translate(340, 450);
  scale(0.6)
  rotate(-PI/6)
  graphics1(0,0)
  pop()
  push()
  translate(240, 435);
  scale(0.6)
  rotate(PI/7)
  graphics1(0,0)
  pop()
  push()
  translate(170, 380);
  scale(0.6)
  rotate(PI/3.5)
  graphics1(0,0)
  pop()
  push()
  translate(150, 290);
  scale(0.6)
  rotate(PI/2)
  graphics1(0,0)
  pop()
  push()
  translate(180, 200);
  scale(0.6)
  rotate(-PI/4)
  graphics1(0,0)
  pop()
  push()
  translate(250, 160);
  scale(0.6)
  rotate(-PI/5.5)
  graphics1(0,0)
  pop()
  push()
  translate(300, 120);
  scale(0.8)
  graphics1(0,0)
  pop()
  push()
  translate(420, 150);
  scale(0.8)
  rotate(PI/6)
  graphics1(0,0)
  pop()
  push()
  translate(500, 250);
  scale(0.8)
  rotate(PI/2.5)
  graphics1(0,0)
  pop()
  push()
  translate(495, 370);
  scale(0.8)
  rotate(-PI/3)
  graphics1(0,0)
  pop()
  push()
  translate(420, 470);
  scale(0.8)
  rotate(-PI/4.5)
  graphics1(0,0)
  pop()
   push()
  translate(280, 485);
  scale(0.8)
  rotate(PI/18)
  graphics1(0,0)
  pop()
   push()
  translate(160, 440);
  scale(0.8)
  rotate(PI/4)
  graphics1(0,0)
  pop()
  push()
  translate(100, 350);
  scale(0.8)
  rotate(PI/2)
  graphics1(0,0)
  pop()
   push()
  translate(110, 240);
  scale(0.8)
  rotate(-PI/3)
  graphics1(0,0)
  pop()
   push()
  translate(180, 140);
  scale(0.8)
  rotate(-PI/6)
  graphics1(0,0)
  pop()
   push()
  translate(500, 150);
  scale(0.98)
  rotate(PI/4)
  graphics1(0,0)
  pop()
  push()
  translate(560, 300);
  scale(0.98)
  rotate(PI/2)
  graphics1(0,0)
  pop()
  push()
  translate(510, 450);
  scale(0.98)
  rotate(-PI/4)
  graphics1(0,0)
  pop()
  push()
  translate(90, 450);
  scale(0.98)
  rotate(PI/4)
  graphics1(0,0)
  pop()
  push()
  translate(40, 300);
  scale(0.98)
  rotate(PI/2)
  graphics1(0,0)
  pop()
  push()
  translate(90, 150);
  scale(0.98)
  rotate(-PI/4)
  graphics1(0,0)
  pop()
  for (let i = 60; i< 600; i += 120){
  graphics1(i,60)
}
 for (let i = 60; i< 600; i += 120){
  graphics1(i,540)
}
  push()
  translate(245, 250);
  scale(1.1)
  graphics2(0,0)
  pop()
  push()
  translate(245, 350);
  scale(1.1)
  graphics2(0,0)
 pop()
  //frame
  push()
  strokeWeight("4")
  rect(10,10,580,580)
  fill("#ffd966")
  pop()
 //rotating looping graphics codes stop here 
saveCanvas('shavonne', 'png')*/

function graphics1(x, y) {
  stroke("#f1c232");
  noFill();
  ellipse(x, y, 100, 60);
  //fill("#e98a3c")
  fill(map(x,0,600,0,100), map(y,0,600,0,255), map(x,0,600,0,250))
  circle(x, y, 40);
  noFill();
  circle(x, y, 50);
}
function graphics2(x, y) {
  outline = 27.5;
  inline = 25;
  stroke("#ffd966");
  fill(255);
  ellipse(x + 50, y, inline, inline);
  fill("#f1c232");
  noStroke();
  stroke("#ffd966");
  noFill();
  ellipse(x + 50, y, outline, outline);
  fill(random(50), random(100), random(255));
  noStroke();
  ellipse(x + 50, y, inline / 2, inline);
} //code for graphics2
