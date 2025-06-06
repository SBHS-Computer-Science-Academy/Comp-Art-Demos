function setup() {
    createCanvas(800, 800);
    background("beige")
    noLoop();
}
let ey=120
let ex=100
// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}

function draw() {
    drawTopLeftEmoji();
    drawTopRightEmoji();
    drawBottomLeftEmoji();
    drawBottomRightEmoji();
}

function drawTopLeftEmoji() {
    noStroke()
    fill("yellow");
    square(0, 0, width/2);
    //head
    fill(255,230,100)
    circle(width/4,height/4,width/2)
    //eyes
    strokeWeight(10)
    stroke(200,170,50)
    line(ex,ey,ex+60,ey)
    line(ex+140,ey,ex+200,ey)
    //mouth
    stroke(20)
    fill(255)
    arc(200,200,325,250,0,PI)
    fill(255,230,100)
    arc(200,200,325,100,0,PI)

}

function drawTopRightEmoji() {
    noStroke()
    fill("red");
    square(width/2, 0, width/2);
    //head
    fill(255,230,100)
    circle(width*3/4,height/4,width/2)
    //eyes
    strokeWeight(10)
    stroke(200,170,50)
    line(ex+400,ey,ex+460,ey+10)
    line(ex+540,ey+10,ex+600,ey)
    //eyebrows
    stroke(20)
    line(500,15,580,75)
    line(700,15,620,75)
    //mouth
    fill(255)
    arc(600,300,300,200,PI,0)
    fill(20)
    arc(600,300,300,150,PI,0)
    fill(255,230,100)
    arc(600,300,300,100,PI,0)
    
}

function drawBottomLeftEmoji() {
    noStroke()
    fill("purple");
    square(0, height/2, width/2);
    //head
    fill(255,230,100)
    circle(width/4,height*3/4,width/2)
    //eyes
    strokeWeight(10)
    stroke(200,170,50)
    line(ex,ey+400,ex+60,ey+420)
    line(ex+140,ey+420,ex+200,ey+400)
    //eyebrows
    stroke(20)
    line(100,415,180,475)
    line(300,415,220,475)
    //mouth
    stroke(20)
    fill(255)
    arc(200,550,325,400,0,PI)
    fill(255,230,100)
    arc(200,550,325,275,0,PI)
    
}

function drawBottomRightEmoji() {
    noStroke()
    fill("blue");
    square(width/2, height/2, width/2);
    //head
    fill(255,230,100)
    circle(width*3/4,height*3/4,width/2)
    //eyes
    strokeWeight(10)
    stroke(200,170,50)
    line(ex+400,ey+410,ex+460,ey+400)
    line(ex+540,ey+400,ex+600,ey+410)
    //mouth
    stroke(20)
    fill(255)
    arc(600,700,325,250,PI,0)
    fill(255,230,100)
    arc(600,700,325,100,PI,0)
    //eyebrows
    stroke(20)
    line(500,460,580,425)
    line(700,460,620,425)
    //tears
    noStroke()
    fill(100,100,255,200)
    angleMode(DEGREES)
    arc(530,530,70,30,350,170)
    arc(530,530,70,30,350,170)
    ellipse(520,545,30,20)
    arc(670,530,70,30,10,190)
    arc(670,530,70,30,10,190)
    ellipse(680,545,30,20)
    
}