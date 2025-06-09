function setup() {
    createCanvas(800, 800);
    noLoop();
}

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
    strokeWeight(0)
    fill(252, 192, 101);
    square(0, 0, width/2);
//head
    fill(255, 244, 148)
ellipse(200,200,240,260)

//eyes
    fill('white')
circle(150,150,50)
circle(250,150,50)
    fill('black')
circle(150,150,20)
circle(250,150,20)

//eyebrows
stroke('black')
strokeWeight(5)
line(108,136,160,107)
line(292,131,228,107)

//mouth
strokeWeight(0)
    fill('black')
ellipse(200,240,70,100)

//hands
fill(255, 234, 140)
arc(120,370,60,300,PI,0)
line(90,370,150,370)
arc(280,370,60,300,PI,0)
line(251,370,310,370)
}

function drawTopRightEmoji() {
    
    strokeWeight(0)
    fill(176, 197, 209);
    square(width/2, 0, width/2);
//head
    fill(255, 244, 148)
ellipse(600,200,240,260)

//tears
fill(84, 139, 171)
rect(535,150,30,250)
rect(635,150,30,250)
    
//eyes
    fill('black')
arc(550,170,50,50,PI,0)
    fill('black')
arc(650,170,50,50,PI,0)
    fill(84, 139, 171)
arc(550,170,30,30,PI,0)
arc(650,170,30,30,PI,0)

//mouth
    fill('black')
ellipse(600,255,60,100)

   


}

function drawBottomLeftEmoji() {
    fill(220, 206, 235);
    square(0, height/2, width/2);
//head
    fill(255, 244, 148)
ellipse(200,600,240,260)

//eyes
strokeWeight(0)
    fill('black')
circle(150,570,50)
circle(250,570,50)
    fill(255, 244, 148)
circle(150,585,55)
circle(250,585,55)

//tongue
strokeWeight(0)
fill(255, 161, 138)
push();// save coordinate system
translate(240, 650);
rotate(-PI/6);
translate(-240, -650);
arc(240,650,40,100,0,3.3,CHORD)
pop()
strokeWeight(3)
stroke('black')
line(244,649,254,672)

//mouth
    fill('black')
    strokeWeight(0)
ellipse(200,630,140,60)
    fill(255, 244, 148)
ellipse(200,620,140,60)

//party hat 
fill(255, 117, 184)
triangle(294,400,203,474,291,522)
strokeWeight(8)
stroke(157, 233, 250)
line(276,418,291,426)
line(259,429,291,448)
line(243,444,291,471)
line(225,459,289,496)
}

function drawBottomRightEmoji() {
    
    strokeWeight(0)
    fill(116, 181, 129);
    square(width/2, height/2, width/2);
//head
    fill(181, 214, 137)
ellipse(600,600,240,260)

//eyes
    fill('white')
circle(550,570,50)  
circle(650,570,50)
  fill('black')
circle(560,575,20) 
circle(640,575,20)

//eyebrows
strokeWeight(5)
stroke('black')
line(515,549,561,521)
line(621,521,679,549)

strokeWeight(0)

//mouth
    stroke('black')
   
ellipse(600,635,55,30)
    fill(181, 214, 137)
ellipse(600,642,60,30)
    noFill()
     strokeWeight(4)
arc(560,632,30,40,3*PI/2, 1.1)
arc(642,632,30,40,1.1,3*PI/2)

fill(250, 202, 180)
//ellipse(555,632,30,60)
//cheeks
strokeWeight(0)
    fill(250, 202, 180)
circle(534,637,70)
circle(667,640,70)

}