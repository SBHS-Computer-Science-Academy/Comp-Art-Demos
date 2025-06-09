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
    fill("hotpink");
    square(0, 0, width/2);

 //heads
    fill("yellow")
    circle(171,200,300)
    
   

//mouth
  fill("black")
  circle(170,221,30)
  
  //lefteye
  strokeWeight(10)
  line(69,133,120,161)
  line(120,163,67,178)
  
  //righteye
  strokeWeight(10)
  line(194,164,251,144)
  line(197,164,259,189)
  
  //blush
  strokeWeight(0)
  fill("pink")
  circle(72,201,40)
  circle(262,207,40)
  
  //partyhat
  strokeWeight(3)
  fill("white")
  triangle(217,57,372,29,319,172)
  fill("limegreen")
  circle(312,124,30)
  fill("dodgerblue")
  circle(305,54,20)
  fill("orange")
  circle(251,65,30)
  fill("purple")
  circle(344,46,20)
  fill("yellow")
  circle(324,79,30)
  fill("purple")
  circle(282,88,30)
  //confetti
  strokeWeight(0)
  fill("blue")
  triangle(44,19,32,42,62,38)
  fill("red")
  triangle(124,23,112,40,147,26)
  fill("magenta")
  triangle(335,223,334,247,366,221)
  fill("yellow")
  triangle(26,70,15,92,42,82)
  fill("orange")
 triangle(23,318,13,353,46,325)
 fill("greenyellow")
 triangle(319,308,313,328,354,315)
 fill("orange")
 triangle(369,106,363,128,395,100)
}

function drawTopRightEmoji() {
    fill("black");
    square(width/2, 0, width/2);

    fill("purple")
    circle(614,216,300)
    //scaryeyes
  fill("darkred")
  circle(428,84,20)
  circle(512,42,20)
  fill("black")
  triangle(501,48,522,33,502,24)
  triangle(439,84,419,78,435,73)
  triangle(420,78,445,69,413,56)
  
    

  //eyes
   fill("black")
  circle(555,195,40)
  circle(664,196,40)
  //brows
  strokeWeight(15)
  line(515,149,577,138)
  line(638,139,696,148)
  //scared mouth
  circle(612,262,20)

}

function drawBottomLeftEmoji() {
    fill("red");
    square(0, height/2, width/2);
    
        fill("yellow")
        strokeWeight(8)
    circle(191,609,300)
    
     //brows
     strokeWeight(10)
  line(105,536,163,555)
  line(277,533,221,558)
  
  //eyes
  fill("black")
  circle(136,595,40)
  circle(241,596,40)
  
  //mouth
  line(138,693,266,661)
    
}

function drawBottomRightEmoji() {
    fill("blue");
    square(width/2, height/2, width/2);
    
       fill("lightblue")
    circle(613,608,300)
 
  //eyes
  fill("black")
  strokeWeight(0)
  circle(562,568,50)
  circle(671,578,50)
  
  //tears
  fill("deepskyblue")
  circle(544,585,20)
  circle(558,599,20)
  circle(660,597,20)
  circle(673,605,20)
  

  fill("white")
  circle(573,556,20)
  circle(556,572,20)
  circle(660,580,20)
  circle(681,564,20)
  strokeWeight(10)
  line(525,531,579,517)
  line(647,519,700,532)



  //sad mouth
  angleMode(DEGREES);
  fill("lightblue")
  
arc(615,687, 150, 50, 180, 0);



}