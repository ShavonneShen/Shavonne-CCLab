let dancer;
let ravens = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  dancer = new ShavonneDancer((1 / 2) * windowWidth, (1 / 2) * windowHeight);
}

function draw() {
  background(100);
  dancer.display();
  dancer.update();

  for (let i = 0; i < ravens.length; i++) {
    ravens[i].display();
   ravens[i].change();
  }
}

function mousePressed() {
  let u = new raven(random(windowWidth), random(windowHeight));
  ravens.push(u);
}

class ShavonneDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.head = color(random(100, 255), 0, random(100, 255));
    this.body = color(random(100, 255), random(100, 255), 0);
    this.speed = random(0.5, 1);
    this.RightHand = [0, 10];
    this.LeftHand = [5, 15];
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
    if (mouseIsPressed == false) {
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
    curveVertex(this.rightsidex[5], 0);
    curveVertex(this.rightsidex[5], 0);
    endShape();
    beginShape();
    curveVertex(this.rightsidex[0], 10);
    curveVertex(this.rightsidex[0], 10);
    curveVertex(this.rightsidex[1], this.LeftHand[0]);
    curveVertex(this.rightsidex[2], this.LeftHand[1]);
    curveVertex(this.rightsidex[3], 10);
    curveVertex(this.rightsidex[3], 10);
    endShape();
  }

  update() {
    if (this.x < (1 / 2) * windowWidth) {
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
    if (this.x >= (1 / 2) * windowHeight) {
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
    this.x = mouseX;
    this.y = mouseY;
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

class raven {
  constructor(xr, yr) {
    this.xr = xr;
    this.yr = yr;
  }
  display() {
    push();
    noStroke();
    fill(0);
    triangle(
      this.xr,
      this.yr - 10,
      this.xr + 20,
      this.yr,
      this.xr,
      this.yr + 10
    );
    fill(255);
    circle(this.xr, this.yr, 20);
    fill(0);
    circle(this.xr + 2, this.yr, 13);
    ellipse(this.xr, this.yr + 50, 38, 16);
    triangle(
      this.xr,
      this.yr + 10,
      this.xr + 20,
      this.yr + 50,
      this.xr - 20,
      this.yr + 50
    );
    stroke(0);
    strokeWeight("3");
    line(this.xr + 5, this.yr + 56, this.xr + 5, this.yr + 76);
    line(this.xr + 5, this.yr + 76, this.xr + 10, this.yr + 76);
    line(this.xr - 5, this.yr + 56, this.xr - 5, this.yr + 76);
    line(this.xr - 5, this.yr + 76, this.xr - 10, this.yr + 76);
    pop();

    //a mode similar to whack a mole: when the dancer gets closer to the raven, the raven would become another character
    if (this.whacked) {
      push();
      translate(this.xr, this.yr);
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
      arc(this.xr + 10, this.yr + 20, 120, 120, radians(60), radians(120));
      pop();
    }
  }
  change() {
    let d = dist(dancer.x, dancer.y, this.xr, this.yr);
    if (d <= 20) {
      this.whacked = true;
    }
  }
}

