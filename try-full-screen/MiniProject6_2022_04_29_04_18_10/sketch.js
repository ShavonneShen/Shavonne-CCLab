/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new ShavonneDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
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
  // add properties for your dancer here:
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
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //the whole character moves

    this.RightHand = [
      map(sin(frameCount / 2), -1, 1, -10, 0),
      map(sin(frameCount), -1, 1, 10, 20),
    ];
    this.LeftHand = [
      map(sin(frameCount / 2), -1, 1, 5, 15),
      map(sin(frameCount), -1, 1, 25, 35),
    ];
    if (this.x > width - 200) {
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
    if (this.x < 200) {
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
    //pressmouse and the head and body would shrink
    if (mouseIsPressed == true) {
      this.hy = this.hy + noise(this.speed) * 3;
      if (this.hy >= 65) {
        this.hy = 65;
      }
    } else {
      this.hy = -20;
    }

    if (this.x > width - 200 || this.x < 200) {
      this.speed = this.speed * -1;
    }
    if (this.y > height - 100 || this.y < 100) {
      this.speed = this.speed * -1;
    }

    this.x = this.x + random(1, 2) * this.speed;
    this.y = this.y + random(0, 1) * this.speed;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer here ⬇️
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
    // ⬆️ draw your dancer here ⬆️

    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  /*drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }*/
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/
