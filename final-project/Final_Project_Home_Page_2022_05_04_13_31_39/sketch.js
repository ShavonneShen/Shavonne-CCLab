let character1
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("my-container")
  character1 = new character(400,300)
}

function draw() {
  background(250);
   noStroke()
   //base1
  push()
 
  fill("#ffbdbd")
  quad(10,260+100*sqrt(2),500,158+100*sqrt(2),700,280+100*sqrt(2),348,450+100*sqrt(2))
  fill("#FF5BB6B7")
  quad(700,280+100*sqrt(2),348,450+100*sqrt(2),348,480+100*sqrt(2),700,310+100*sqrt(2))
 fill("#ff5bac")
  quad(10,260+100*sqrt(2),348,450+100*sqrt(2),348,480+100*sqrt(2),10,290+100*sqrt(2))
  pop()
  //base2
  push()
  noStroke()
  fill("#ecb842")
  quad(10,290+100*sqrt(2),348,480+100*sqrt(2),348,510+100*sqrt(2),20,320+100*sqrt(2))
  fill("#fae09f")
  quad(348,480+100*sqrt(2),348,510+100*sqrt(2),690,330+100*sqrt(2),700,310+100*sqrt(2))
  pop()
  
   //base3
  push()
  noStroke()
  fill("#516847")
  quad(348,510+100*sqrt(2),20,320+100*sqrt(2),30,350+100*sqrt(2),348,540+100*sqrt(2))
  fill("#9bb78e")
  quad(348,510+100*sqrt(2),690,330+100*sqrt(2),680,360+100*sqrt(2),348,540+100*sqrt(2))
  pop()
  
  //valley1 left tower
  push()
  fill("#517b94")
  quad(50,80+100*sqrt(2),50,230+100*sqrt(2),150,210+100*sqrt(2),150,80+100*sqrt(2))
  pop()
    towertop(100,80)
  arch(60,140+100*sqrt(2))
  push()
  fill("#67a9a0")
  quad(150,210+100*sqrt(2),300,260+100*sqrt(2),220,290+100*sqrt(2),50,230+100*sqrt(2))
  pop()
  push()
  fill("#53988f")
 quad(300,260+100*sqrt(2),220,290+100*sqrt(2),220,290+100*sqrt(2)+20,300,260+100*sqrt(2)+20)
  pop()
  push()
  fill("#428a80")
  quad(220,290+100*sqrt(2),220,290+100*sqrt(2)+20,50,250+100*sqrt(2),50,230+100*sqrt(2))
  pop()
  
  //valley1 right tower
   towertop(600,80)
  push()
  noStroke()
  fill("#517b94")
  quad(550,80+100*sqrt(2),550,230+100*sqrt(2),580,260+10*sqrt(221),580,80+10*sqrt(221))
  fill("#76a5af")
  quad(580,80+10*sqrt(221),580,260+10*sqrt(221),650,230+100*sqrt(2),650,80+100*sqrt(2))
  pop()
  Window(600,100+10*sqrt(221))
  Window(610,150+10*sqrt(221))
  Window(600,200+10*sqrt(221))
  push()
  fill("#1b6056")
  quad(580,260+10*sqrt(221),650,230+100*sqrt(2),650,250+100*sqrt(2),580,280+10*sqrt(221))
  pop()
  push()
  fill("#266d63")
 quad(580,260+10*sqrt(221),580,280+10*sqrt(221),550,250+100*sqrt(2),550,230+100*sqrt(2))
  pop()
 
  //character
  character1.display()
  character1.update()
}

function towertop(xt,yt){
  push()
  strokeWeight("2")
  stroke("#201d54")
  line(xt,yt,xt+75,yt+75*sqrt(3))
  line(xt-75,yt+75*sqrt(3),xt,yt)
 fill("#313a76")
  arc(xt,yt,300,300,radians(60),radians(120))
  pop()
}

function Window(xw,yw){
  push()
  fill("#f2d41a")
  rect(xw,yw,20,30)
  pop()
  push()
  stroke("#df9704")
  strokeWeight("2")
  line(xw+1,yw+15,xw+19,yw+15)
  line(xw+10,yw+1,xw+10,yw+29)
  pop()
}
function arch(xa,ya){
  push()
  strokeWeight("2")
  stroke("#e1005e")
  fill("#e1005e")
  arc(xa+40,ya+40,80*sqrt(2),80*sqrt(2),radians(-135),radians(-45))
  quad(xa,ya,xa+80,ya,xa+80,ya+60,xa,ya+80)
  pop()
}

class character{
  constructor(xc,yc){
    this.xc = xc
    this.yc = yc
    
  }
  display(){
    //Hat
  push()
     translate(this.xc,this.yc)
    rotate(map(sin(frameCount/50),-1,1,radians(30),radians(-60)))
  fill("#e1dfdf")
  arc(50,0,40*sqrt(3),40*sqrt(3),radians(150),radians(210))
//Head
  fill(0)
  noStroke()
  circle(10,0,40)
  fill(255)
  noStroke()
  ellipse(2,0,20,30)
  pop()

 //Body
   push()
   fill(250)
   arc(this.xc+10,this.yc+20,120,120,radians(60),radians(120))
    pop()
  }
  
  update(){
    if (mouseIsPressed == true){
      this.targetX = mouseX
    this.targetY = mouseY
       this.xc = this.xc+ (this.targetX-this.xc)*0.1
    this.yc = this.yc+ (this.targetY-this.yc)*0.1
    }
  }
}