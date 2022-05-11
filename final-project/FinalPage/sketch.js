let character1;
let raven1;
let dancer;
let Auroras = [];

//shooting stars
let x = [];
let y = [];
let Xspeed;
let Yspeed;
function setup() {
  let canvas = createCanvas(1250,650);
  canvas.parent("my-container")
  character1 = new character(420,360);
  raven1 = new raven(random(800,1110),random(365,460));
  dancer = new ShavonneDancer(raven1.xr, raven1.yr);
  //shooting stars
  for (let i = 0; i < 10; i++) {
    x[i] = random(1250);
    y[i] = random(650);
    Xspeed = random(0, 20);
    Yspeed = random(0, 15);
  }
}

function draw() {
  //background change
  if (dist(character1.xc, character1.yc, 60, 140 + 100 * sqrt(2)) <= 100) {
  //shooting stars
  for (let i = 0; i < 5; i++) {
    push();
    x[i] = x[i] + Xspeed;
    y[i] = y[i] + Yspeed;
    strokeWeight("5");
    stroke(color(random(228, 255), 255, 212));
    point(x[i], y[i]);
    if (x[i] < 0) {
      x[i] = 1250;
    } else if (x[i] > 1250) {
      x[i] = 0;
    }
    if (y[i] < 0) {
      y[i] = 650;
    } else if (y[i] > 650) {
      y[i] = 0;
    }
    pop();
  } }else {
    background("#344c53");
  }

  Valley1();
  Valley2();

  //character
  character1.display();
  character1.update();

  //raven
  raven1.display();
  raven1.change();

  //footprint
  for (let l = 0; l < Auroras.length; l++) {
    Auroras[l].move();
    Auroras[l].display();
  }
  if (mouseIsPressed == true) {
    push();
    let u = new DesignAurora(mouseX, mouseY + 70);
    Auroras.push(u);
    pop();
  }

  check();
  colorchange();
}

function whacked(){
  dancer.display()
  dancer.update()
}

function check() {
  let d = dist(character1.xc, character1.yc, raven1.xr, raven1.yr);
  if (d <= 30) {
    whacked()
  }
}

function colorchange() {
  if (
    70 <= character1.yc &&
    character1.yc <= 104 &&
    1120 <= character1.xc &&
    character1.xc <= 1245
  ) {
    push();
    fill("#fff800");
    quad(1461 - 400 + 20 + 45,
    320 - 80 - 35,
    1510 - 400 + 45,
    338 - 80 - 35,
    1510 - 400 + 45,
    420 - 80 - 35,
    1461 - 400 + 20 + 45,
    402 - 80 - 35);
    pop();
  } else {
    push();
    noStroke();
    noFill();
    quad(1461 - 400 + 20 + 45,
    320 - 80 - 35,
    1510 - 400 + 45,
    338 - 80 - 35,
    1510 - 400 + 45,
    420 - 80 - 35,
    1461 - 400 + 20 + 45,
    402 - 80 - 35);
    pop();
  }
}

//platform 1
function Valley1() {
  noStroke();

  //base1
  push();
  fill("#ffbdbd");
  quad(
    10,
    260 + 100 * sqrt(2),
    500,
    158 + 100 * sqrt(2),
    700,
    280 + 100 * sqrt(2),
    348,
    450 + 100 * sqrt(2) - 40
  );
  fill("#FF5BB6B7");
  quad(
    700,
    280 + 100 * sqrt(2),
    348,
    450 + 100 * sqrt(2) - 40,
    348,
    480 + 100 * sqrt(2) - 40,
    700,
    310 + 100 * sqrt(2)
  );
  fill("#ff5bac");
  quad(
    10,
    260 + 100 * sqrt(2),
    348,
    450 + 100 * sqrt(2) - 40,
    348,
    480 + 100 * sqrt(2) - 40,
    10,
    290 + 100 * sqrt(2)
  );
  pop();

  //base2
  push();
  fill("#ecb842");
  quad(
    10,
    290 + 100 * sqrt(2),
    348,
    480 + 100 * sqrt(2) - 40,
    348,
    510 + 100 * sqrt(2) - 40,
    20,
    320 + 100 * sqrt(2)
  );
  fill("#fae09f");
  quad(
    348,
    480 + 100 * sqrt(2) - 40,
    348,
    510 + 100 * sqrt(2) - 40,
    690,
    330 + 100 * sqrt(2),
    700,
    310 + 100 * sqrt(2)
  );
  pop();

  //base3
  push();
  fill("#516847");
  quad(
    348,
    510 + 100 * sqrt(2) - 40,
    20,
    320 + 100 * sqrt(2),
    30,
    350 + 100 * sqrt(2),
    348,
    540 + 100 * sqrt(2) - 40
  );
  fill("#9bb78e");
  quad(
    348,
    510 + 100 * sqrt(2) - 40,
    690,
    330 + 100 * sqrt(2),
    680,
    360 + 100 * sqrt(2),
    348,
    540 + 100 * sqrt(2) - 40
  );
  pop();

  //valley1 left tower
  push();
  fill("#517b94");
  quad(
    50,
    80 + 100 * sqrt(2),
    50,
    230 + 100 * sqrt(2),
    150,
    210 + 100 * sqrt(2),
    150,
    80 + 100 * sqrt(2)
  );
  pop();

  towertop(100, 80);
  arch(60, 140 + 100 * sqrt(2));

  push();
  fill("#67a9a0");
  quad(
    150,
    210 + 100 * sqrt(2),
    300,
    260 + 100 * sqrt(2),
    220,
    290 + 100 * sqrt(2),
    50,
    230 + 100 * sqrt(2)
  );
  pop();
  push();
  fill("#53988f");
  quad(
    300,
    260 + 100 * sqrt(2),
    220,
    290 + 100 * sqrt(2),
    220,
    290 + 100 * sqrt(2) + 20,
    300,
    260 + 100 * sqrt(2) + 20
  );
  pop();
  push();
  fill("#428a80");
  quad(
    220,
    290 + 100 * sqrt(2),
    220,
    290 + 100 * sqrt(2) + 20,
    50,
    250 + 100 * sqrt(2),
    50,
    230 + 100 * sqrt(2)
  );
  pop();

  //valley1 right tower
  towertop(600, 80);
  push();
  fill("#517b94");
  quad(
    550,
    80 + 100 * sqrt(2),
    550,
    230 + 100 * sqrt(2),
    580,
    260 + 10 * sqrt(221),
    580,
    80 + 10 * sqrt(221)
  );
  fill("#76a5af");
  quad(
    580,
    80 + 10 * sqrt(221),
    580,
    260 + 10 * sqrt(221),
    650,
    230 + 100 * sqrt(2),
    650,
    80 + 100 * sqrt(2)
  );
  pop();
  Window(600, 100 + 10 * sqrt(221));
  Window(610, 150 + 10 * sqrt(221));
  Window(600, 200 + 10 * sqrt(221));
  push();
  fill("#1b6056");
  quad(
    580,
    260 + 10 * sqrt(221),
    650,
    230 + 100 * sqrt(2),
    650,
    250 + 100 * sqrt(2),
    580,
    280 + 10 * sqrt(221)
  );
  pop();
  push();
  fill("#266d63");
  quad(
    580,
    260 + 10 * sqrt(221),
    580,
    280 + 10 * sqrt(221),
    550,
    250 + 100 * sqrt(2),
    550,
    230 + 100 * sqrt(2)
  );
  pop();
}

//platform 2
function Valley2() {
  //base1
  push();
  noStroke();
  fill("#ffc070");
  quad(
    1257 - 400 + 45,
    493 - 80 + 20 - 35+20,
    1655 - 400 - 55 + 45,
    573 - 80 - 35,
    1030 + 45,
    590 - 35,
    1054 - 400 + 45,
    612 - 80 - 35
  );
  fill("#ffb353");
  quad(
    1655 - 400 - 55 + 45,
    573 - 80 - 35,
    1440 - 400 - 10 + 45,
    590 - 35,
    1440 - 400 - 10 + 45,
    620 - 35,
    1655 - 400 - 55 + 45,
    603 - 80 - 35
  );
  fill("#ff8f00");
  quad(
    1440 - 400 - 10 + 45,
    590 - 35,
    1054 - 400 + 45,
    612 - 80 - 35,
    1054 - 400 + 45,
    642 - 80 - 35,
    1440 - 400 - 10 + 45,
    620 - 35
  );
  pop();
  //base2
  push();
  noStroke();
  fill("#ecb842");
  quad(
    1054 - 400 + 45,
    642 - 80 - 35,
    1440 - 400 - 10 + 45,
    620 - 35,
    1440 - 400 - 10 + 45,
    650 - 35,
    1054 - 400 + 45,
    672 - 80 - 35
  );
  fill("#fae09f");
  quad(
    1440 - 400 - 10 + 45,
    620 - 35,
    1655 - 400 - 55 + 45,
    603 - 80 - 35,
    1655 - 400 - 55 + 45,
    633 - 80 - 35,
    1440 - 400 - 10 + 45,
    650 - 35
  );
  pop();
  //base3
  push();
  noStroke();
  fill("#516847");
  quad(
    1440 - 400 - 10 + 45,
    650 - 35,
    1054 - 400 + 45,
    672 - 80 - 35,
    1064 - 400 + 45,
    702 - 80 - 35,
    1440 - 400 - 10 + 45,
    680 - 35
  );
  fill("#9bb78e");
  quad(
    1655 - 400 - 55 + 45,
    633 - 80 - 35,
    1440 - 400 - 10 + 45,
    650 - 35,
    1440 - 400 - 10 + 45,
    680 - 35,
    1645 - 400 - 55 + 45,
    673 - 80 - 35
  );
  pop();

  //building
  push();
  fill("#aadde4");
  quad(
    1655 - 400 - 55 + 45,
    273 - 80 - 35,
    1655 - 400 - 55 + 45,
    573 - 80 - 35,
    1531 - 400 + 45,
    605 - 80 - 35,
    1531 - 400 + 45,
    300 - 80 - 35
  );
  fill("#4aa6b3");
  quad(
    1531 - 400 + 45,
    605 - 80 - 35,
    1531 - 400 + 45,
    300 - 80 - 35,
    1075 + 45,
    193 - 35,
    1075 + 45,
    561 - 80 - 35
  );
  fill("#65bac6");
  quad(
    1075 + 45,
    193 - 35,
    1531 - 400 + 45,
    300 - 80 - 35,
    1655 - 400 - 55 + 45,
    273 - 80 - 35,
    1135 + 45,
    170 - 35
  );
  pop();
  ///hole
  push();
  stroke(0);
  noFill();
  quad(
    1461 - 400 + 20 + 45,
    320 - 80 - 35,
    1510 - 400 + 45,
    338 - 80 - 35,
    1510 - 400 + 45,
    420 - 80 - 35,
    1461 - 400 + 20 + 45,
    402 - 80 - 35
  );
  pop();
}

function towertop(xt, yt) {
  push();
  strokeWeight("2");
  stroke("#201d54");
  line(xt, yt, xt + 75, yt + 75 * sqrt(3));
  line(xt - 75, yt + 75 * sqrt(3), xt, yt);
  fill("#313a76");
  arc(xt, yt, 300, 300, radians(60), radians(120));
  pop();
}

function Window(xw, yw) {
  push();
  fill("#f2d41a");
  rect(xw, yw, 20, 30);
  pop();
  push();
  stroke("#df9704");
  strokeWeight("2");
  line(xw + 1, yw + 15, xw + 19, yw + 15);
  line(xw + 10, yw + 1, xw + 10, yw + 29);
  pop();
}
function arch(xa, ya) {
  push();
  strokeWeight("2");
  stroke("#e1005e");
  fill("#e1005e");
  arc(
    xa + 40,
    ya + 40,
    80 * sqrt(2),
    80 * sqrt(2),
    radians(-135),
    radians(-45)
  );
  quad(xa, ya, xa + 80, ya, xa + 80, ya + 60, xa, ya + 80);
  pop();
}

class ShavonneDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.head = color(random(100, 255), 0, random(100, 255));
    this.body = color(random(100, 255), random(100, 255), 0);
    this.speed = random(0.5, 1);
    this.RightHand = [-10, 20];
    this.LeftHand = [5, 35];
    this.rightsidex = [-15, 0, 15, 30, 45, 60];
    this.sidex = [-60, -45, -30, -15, 0, 15, 30, 45, 60];
    this.hy = -20;
  }

  Head(hx, hy) {
    push();
    fill(this.head);
    ellipse(0, this.hy, 40, 40);
    fill(255);
    ellipse(10, this.hy, 2.5, 5);
    ellipse(-10, this.hy, 2.5, 5);
    if (mouseIsPressed == true) {
      noFill();
      stroke(255);
      strokeWeight("2");
      line(-5, this.hy + 10, 0, this.hy + 7);
      line(0, this.hy + 7, 5, this.hy + 10);
    } else {
      noFill();
      stroke(255);
      strokeWeight("2");
      line(-5, this.hy + 10, 0, this.hy + 12);
      line(0, this.hy + 12, 5, this.hy + 10);
    }
    pop();
  }
  Body(bx, by) {
    push();
    fill(this.body);
    ellipse(0, 65, 60, 20);
    triangle(0, this.hy + 15, 30, 65, -30, 65);
    pop();
  }

  right(rx, ry) {
    noFill();
    stroke(color(0, random(100, 255), random(100, 255)));
    strokeWeight("2");
    beginShape();
    curveVertex(this.rightsidex[2], 5);
    curveVertex(this.rightsidex[2], 5);
    curveVertex(this.rightsidex[3], this.RightHand[0]);
    curveVertex(this.rightsidex[4], this.RightHand[1]);
    curveVertex(this.rightsidex[5], -10);
    curveVertex(this.rightsidex[5], -10);
    endShape();
    beginShape();
    curveVertex(this.rightsidex[0], 20);
    curveVertex(this.rightsidex[0], 20);
    curveVertex(this.rightsidex[1], this.LeftHand[0]);
    curveVertex(this.rightsidex[2], this.LeftHand[1]);
    curveVertex(this.rightsidex[3], 20);
    curveVertex(this.rightsidex[3], 20);
    endShape();
  }

  update() {
    push();
    this.RightHand = [
      map(sin(frameCount / 2), -1, 1, -10, 0),
      map(sin(frameCount), -1, 1, 10, 20),
    ];
    pop();
    push();
    this.LeftHand = [
      map(sin(frameCount / 2), -1, 1, 5, 15),
      map(sin(frameCount), -1, 1, 25, 35),
    ];
    pop();
    if (this.x >= 920) {
      push();
      // left direction
      translate(this.x, this.y);
      this.rightsidex[0] = this.sidex[5];
      this.rightsidex[1] = this.sidex[4];
      this.rightsidex[2] = this.sidex[3];
      this.rightsidex[3] = this.sidex[2];
      this.rightsidex[4] = this.sidex[1];
      this.rightsidex[5] = this.sidex[0];
      this.right(0, 0);
      pop();
    }
    if (this.x < 920) {
      //right direction
      push();
      translate(this.x, this.y);
      this.rightsidex[0] = this.sidex[3];
      this.rightsidex[1] = this.sidex[4];
      this.rightsidex[2] = this.sidex[5];
      this.rightsidex[3] = this.sidex[6];
      this.rightsidex[4] = this.sidex[7];
      this.rightsidex[5] = this.sidex[8];
      this.right(0, 0);
      pop();
    }
    if (this.x > 1110 || this.x < 800) {
      this.speed = this.speed * -1;
    }
    if (this.y > 460 || this.y < 365) {
      this.speed = this.speed * -1;
    }
    this.x = this.x + random(1, 2) * this.speed;
    this.y = this.y + random(0, 1) * this.speed;
  }
  display() {
    push();
    translate(this.x, this.y);

    noStroke();
    pop();
    //body
    push();
    noStroke();
    translate(this.x, this.y);
    rotate(radians(map(noise(frameCount / 40), 0, 1, -40, 40)));
    this.Body(0, 0);
    push();
    noFill();
    stroke(color(0, random(100, 255), random(100, 255)));
    strokeWeight("2");
    //arm
    this.right(0, 0);
    //head
    noStroke();
    this.Head(0, 0);
    pop();
  }
}

class character {
  constructor(xc, yc) {
    this.xc = xc;
    this.yc = yc;
  }
  display() {
    //Hat
    push();
    translate(this.xc, this.yc);
    rotate(map(sin(frameCount / 50), -1, 1, radians(30), radians(-60)));
    fill("#e1dfdf");
    arc(50, 0, 40 * sqrt(3), 40 * sqrt(3), radians(150), radians(210));
    //Head
    fill(0);
    noStroke();
    circle(10, 0, 40);
    fill(255);
    noStroke();
    ellipse(2, 0, 20, 30);
    pop();

    //Body
    push();
    fill(250);
    arc(this.xc + 10, this.yc + 20, 120, 120, radians(60), radians(120));
    pop();
    push();
    fill("#ffa32e");
    //text(this.xc, this.xc, this.yc);
    //text(this.yc, this.xc, this.yc + 20);
    pop();
  }

  update() {
    if (mouseIsPressed == true) {
      this.targetX = mouseX;
      this.targetY = mouseY;
      this.xc = this.xc + (this.targetX - this.xc) * 0.1;
      this.yc = this.yc + (this.targetY - this.yc) * 0.1;
    }
  }
}

class raven {
  constructor(xr, yr) {
    this.xr = xr;
    this.yr = yr;
    this.s = random(0.2, 1);
  }
  //leg+foot
  rightleg(xR, yR) {
    push();
    stroke(0);
    strokeWeight("3");
    line(0, 0, 0, 20);
    line(0, 20, 5, 20);
    pop();
  }
  leftleg(xL, yL) {
    push();
    stroke(0);
    strokeWeight("3");
    line(0, 0, 0, 20);
    line(0, 20, -5, 20);
    pop();
  }
  display() {
    push();
    noStroke();
    fill(0);
    //mouth
    triangle(
      this.xr,
      this.yr - 10,
      this.xr + 20,
      this.yr,
      this.xr,
      this.yr + 10
    );
    //head
    fill(255);
    circle(this.xr, this.yr, 20);
    //eye
    fill(0);
    circle(this.xr + 2, this.yr, 13);
    //body
    ellipse(this.xr, this.yr + 50, 38, 16);
    triangle(
      this.xr,
      this.yr + 10,
      this.xr + 20,
      this.yr + 50,
      this.xr - 20,
      this.yr + 50
    );
    pop();
    //leg+foot
    push();
    translate(this.xr + 5, this.yr + 56);
    rotate(map(cos(frameCount / 10), -1, 1, radians(-60), radians(0)));
    this.rightleg(0, 0);
    pop();
    push();
    translate(this.xr - 5, this.yr + 56);
    rotate(map(sin(frameCount / 8), -1, 1, radians(0), radians(60)));
    this.leftleg(0, 0);
    pop();
  }

  change() {
    if (this.xr > 1110 || this.xr < 800) {
      this.s = this.s * -1;
    }
    if (this.yr > 460 || this.yr < 365) {
      this.s = this.s * -1;
    }
    this.xr = this.xr + random(0, 1) * this.s;
    this.yr = this.yr + random(0, 1) * this.s;
  }
}

//referrence:
//https://p5js.org/examples/form-star.html
function star(xS, yS, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = xS + cos(a) * radius2;
    let sy = yS + sin(a) * radius2;
    vertex(sx, sy);
    sx = xS + cos(a + halfAngle) * radius1;
    sy = yS + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
class DesignAurora {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }

  move() {
    this.Y = this.Y + random(1);
  }

  display() {
    push();
    noStroke();
    translate(this.X, this.Y);
    fill(254, 268, 62, 100);
    star(0, 0, 5, 8, 5);
    pop();
  }
}
