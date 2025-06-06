function setup() {
    createCanvas(700, 800);
    noLoop();
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + " , " + mouseY);
}

function draw() {
    drawTopRightEmoji();
    //mouth
    fill('black')
    circle(530,245,100)
    fill(255,220,177)
    circle(527,205,100)
    
    //eyes
    fill('black')
    circle(456,121,30)
    circle(579,120,30)
    
    //cheek
    fill(255,192,203)
    circle(419,176,50)
    circle(615,175,50)
    
    //nose
    fill('black')
    triangle(525,155,501,190,551,190)
    
    //hat
    fill('black')
    rect(375,29,300,50)
    square(470,-30,100)
    square(407,-2,75)
    square(569,1,75)
    strokeWeight(10)
    stroke(139,69,19)
    line(379,52,489,52)
    square(497,25,40)
    line(540,52,672,52)
    
    
    drawTopLeftEmoji();
    //eyes
    noStroke('white')
    fill('white')
    circle(101,111,52)
    circle(228,110,52)
    //inner eyes
    fill('black')
    circle(109,120,20)
    circle(235,120,20)
    //eyebrows
    strokeWeight(6)
    stroke('black')
    line(74,64,115,55)
    line(198,53,237,56)
    //nose
    triangle(171,160,132,197,206,197)
    //hair
    fill('black')
    circle(35,51,50)
    circle(22,72,50)
    circle(15,95,50)
    circle(64,20,50)
    circle(110,0,50)
    circle(161,0,50)
    circle(210,0,50)
    circle(254,6,50)
    circle(281,35,50)
    circle(314,61,50)
    circle(337,97,50)
    circle(344,139,50)
    circle(328,166,50)
    circle(352,170,50)
    circle(334,210,50)
    circle(319,232,50)
    circle(334,247,50)
    circle(299,271,50)
    circle(310,285,50)
    circle(11,135,50)
    circle(0,161,50)
    circle(9,179,50)
    circle(3,217,50)
    circle(22,137,50)
    circle(13,255,50)
    circle(11,286,50)
    circle(40,300,50)
    circle(25,312,50)
    circle(13,343,50)
    circle(49,343,50)
    circle(29,372,50)
    circle(289,312,50)
    circle(334,313,50)
    circle(308,333,50)
    circle(341,277,50)
    circle(284,353,50)
    circle(333,352,50)
    //mouth
    line(97,266,107,260)
    line(107,260,126,253)
    line(126,253,145,249)
    line(145,249,166,248)
    line(166,248,185,245)
    line(185,245,209,248)
    line(209,248,221,249)
    

    drawBottomLeftEmoji();
    //hair
    stroke('black')
    line(114,426,105,390)
    line(134,420,133,385)
    line(150,406,145,381)
    line(172,408,163,378)
    line(178,404,174,374)
    line(192,405,190,376)
    line(202,406,196,377)
    line(211,407,212,375)
    line(225,409,227,382)
    line(236,414,240,383)
    line(100,419,91,394)
    line(252,425,248,393)
    
    //eyes
    noStroke('white')
    fill('white')
    circle(97,510,52)
    circle(233,510,52)
    
    //inner eyes
    fill('black')
    circle(109,518,20)
    circle(220,518,20)
    
    //freckle
    fill('black')
    circle(205,583,10)
    circle(86,672,15)
    
    //mouth
    stroke('black')
    line(106,629,122,623)
    line(138,617,150,616)
    line(163,622,176,628)
    line(192,631,206,627)
    line(216,616,228,612)
    line(121,622,137,616)
    line(151,616,163,622)
    line(176,628,191,631)
    line(206,628,216,615)
    
    
    drawBottomRightEmoji();
    
    //eyes
    stroke('black')
    line(436,474,490,525)
    line(486,474,435,525)
    line(563,474,613,525)
    line(605,474,565,525)
    
    //mouth
    fill('black')
    circle(522,622,70)
    
    //party hat
    stroke(242, 196, 238)
    fill('white')
    triangle(668,321,543,427,664,486)
    noStroke(188, 227, 223)
    fill(188, 227, 223)
    circle(584,422,30)
    fill(187, 32, 247)
    circle(648,359,20)
    fill(245, 7, 229)
    circle(645,439,15)
    fill(242,196,238)
    circle(609,451,20)
    fill(98,196,101)
    circle(612,383,10)
    circle(628,413,15)
    fill(68, 187, 235)
    circle(674,305,50)
}

function drawTopLeftEmoji() {
    noStroke(255,120,177)
    fill(255,220,177);
    square(0, 0, width/2, height/2);

}

function drawTopRightEmoji() {
    noStroke(255,120,177)
    fill(255,220,177);
    square(width/2, 0, width/2, height/2);
    
}

function drawBottomLeftEmoji() {
    noStroke(255,120,177)
    fill(107,142,35);
    square(0, height/2, width/2, height/2);
    
}

function drawBottomRightEmoji() {
    noStroke(255,120,177)
    fill(255,220,177);
    square(width/2, height/2, width/2, height/2);
    
}