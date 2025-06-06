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
    //yellow | teary-eye emoji
    noStroke();
    fill(242, 237, 85);
    square(0, 0, width/2);
    //head
    stroke(0,0,0);
    strokeWeight(1);
    fill(237, 209, 142);
    circle(200,200,350);
    //eyes
    noStroke();
    //inner white eye
    fill('white');
    circle(125,155,60);//left
    circle(270,155,60);//right
    // brown eye
    fill('black');
    circle(125,170,30);//left
    circle(270,170,30);//right
    //brows
    stroke('black');
    strokeWeight(8);
    //right brow
    line(245,97,265,110);
    line(265,110,285,115);
    line(285,115,300,115);
    //left brow
    line(150,95,130,110);
    line(130,110,110,115);
    line(110,115,95,115);
    //tears
    noStroke();
    fill(157, 242, 237);
    triangle(105,180,90,205,120,205);
    circle(105,215,35);
    triangle(292.5,200,280,225,305,225);
    circle(292.5,230,26);
    //frown
    fill('black');
    ellipse(200,290,105,75);
    fill(237, 209, 142);
    ellipse(200,305,100,50);
}

function drawTopRightEmoji() {
    //red | embarrassed emoji
    noStroke();
    fill(242, 95, 85);
    square(width/2, 0, width/2);
    stroke(0,0,0);
    strokeWeight(2);
      fill(237, 209, 142);
    circle(600,200,350);
     //brows
     noStroke();
     fill('black');
     ellipse(520,115,50,20);
     fill(237, 209, 142);
     ellipse(520,120,50,20);
     noStroke();
     fill('black');
     ellipse(665,115,50,20);
     fill(237, 209, 142);
     ellipse(665,120,50,20);
    //blush
    noStroke();
    fill('lightpink');
    circle(490,235,90);
    circle(710,235,90);
    //inner white eye
    noStroke();
    fill('white')
    circle(525,155,60);//left
    circle(670,155,60);//right
    fill('black');
    circle(525,155,30);
    circle(670,155,30);
    //mouth
    stroke('black');
    strokeWeight(15);
    line(525,250,670,250);
}

function drawBottomLeftEmoji() {
    //green | heart-eye emoji 
    noStroke();
    fill(127, 242, 85);
    square(0, height/2, width/2);
      stroke(0,0,0);
    strokeWeight(1);
      fill(237, 209, 142);
    circle(200,600,350);
    //heart eyes
   noStroke();
    fill('crimson');
    circle(90,550,40);
    circle(125,550,40);
    triangle(73,560,110,600,142,560);
    circle(260,550,40);
    circle(295,550,40);
    triangle(242,560,313,560,280,600);
    //smile
    noStroke();
    fill('black');
    ellipse(200,675,115,75);
    fill(237, 209, 142);
    ellipse(200,645,115,80);
}

function drawBottomRightEmoji() {
    //blue | angry emoji
    noStroke();
    fill(102, 186, 212);
    square(width/2, height/2, width/2);
      stroke(0,0,0);
    strokeWeight(1);
      fill(230, 44, 44);
    circle(600,600,350);
    //eyes
    noStroke();
    fill(92, 17, 17);
    ellipse(540,545,40,55);
    ellipse(650,545,40,55);
    //eyebrows
    strokeWeight(10);
    stroke(64, 11, 11);
    line(560,520,555,515);
    line(555,515,545,510);
    line(542,509,530,507);
    line(530,507,510,500);
    line(630,520,635,515);
    line(635,515,645,510);
    line(642,512,655,507);
    line(657,507,675,502);
    //mouth
    noStroke();
    fill(64, 11, 11);
    ellipse(600,665,140,100);
    fill(230, 44, 44);
    ellipse(600,680,140,80);
}