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
    
    fill(170, 221, 227);
    square(0, 0, width/2);
    //tom
    strokeWeight(2);
    fill(148, 158, 181);
    
    //earbehind
    beginShape();
    vertex(152, 105);
    vertex(130, 66);
    vertex(52, 28);
    vertex(50, 86);
    vertex(58,148);
    vertex(96, 200);
    endShape();
    
    //earin
    stroke(122, 73, 110);
    fill('pink');
    beginShape();
    vertex(108, 140);
    vertex(75, 100);
    vertex(59, 55);
    vertex(56, 84);
    vertex(64, 141);
    vertex(91, 174);
    endShape();
    
    //base
    stroke('black');
    fill(148, 158, 181);
    circle(width/4,200,225);
    
    //scruff
    fill(148, 158, 181);
    beginShape();
    curveVertex(95,220);
    curveVertex(93,230);
    curveVertex(85,238);
    curveVertex(78,235);
    vertex(70,225);
    vertex(55,235);
    curveVertex(63,234);
    vertex(70,235);
    vertex(55,240);
    curveVertex(35,255);
    vertex(57,252);
    vertex(70,258);
    vertex(50,260);
    vertex(30, 280);
    vertex(65, 273);
    vertex(85, 275);
    vertex(92,292);
    vertex(120, 310);
    vertex(150, 320);
    vertex(178, 328);
    vertex(213, 324);
    vertex(273, 287);
    vertex(258,297);
    //secound half
    vertex(275, 289);
    vertex(286, 288);
    vertex(297, 294);
    vertex(302, 305);
    vertex(311, 295);
    vertex(303,288);
    vertex(296,276);
    vertex(293,275);
    vertex(309, 276);
    vertex(324, 290);
    vertex(329, 270);
    vertex(314, 257);
    vertex(301, 258);
    vertex(311, 254);
    vertex(320, 250);
    vertex(331, 254);
    vertex(323, 238);
    vertex(309, 240);
    vertex(316, 232);
    endShape();
    
    //ear
    beginShape();
    vertex(310, 204);
    vertex(342, 151);
    vertex(320, 78);
    vertex(299, 28);
    vertex(273, 56);
    vertex(230, 90);
    endShape();
    
    //earin
    stroke(122, 73, 110);
    fill('pink');
    beginShape();
    vertex(276, 147);
    vertex(296, 99);
    vertex(301, 62);
    vertex(317, 95);
    vertex(332, 150);
    vertex(305, 189);
    endShape();
    
    //markings
    noStroke();
    fill(203, 207, 214);
    ellipse(155,203,15,90);
    ellipse(145,215,15,80);
    ellipse(165,215,15,80);
    circle(175,235,20);
    circle(135,237,20);
    
    //eyes
    stroke(53, 56, 82);
    fill(235, 217, 160);
    ellipse(190,200,40,80);
    ellipse(125,200,35,80);
    stroke(65, 112, 69);
    strokeWeight(1.5);
    fill(134, 191, 138);
    ellipse(130,200,25,50);
    ellipse(197,200,25,50);
    fill('black');
    stroke('black');
    ellipse(135,200,10,20);
    ellipse(202,200,10,20);
    stroke(93, 145, 97);
    strokeWeight(1);
    fill('white');
    circle(124,179,12);
    circle(191,180,12);
    
    //mouth
    stroke(53, 56, 82);
    strokeWeight(2);
    fill('white');
    ellipse(160,285,60,70);
    circle(135,265,50);
    circle(180,265,50);
    noStroke();
    fill('white');
    ellipse(160,285,60,68);
    fill('black');
    triangle(143, 242, 170, 242, 157, 256);
    ellipse(155,295,20,30);
    
    //emotionbaby
    beginShape();
    vertex(168, 152);
    vertex(194, 137);
    vertex(217, 159);
    vertex(194, 130);
    endShape();
    
    beginShape();
    vertex(110, 152);
    vertex(124, 137);
    vertex(137, 152);
    vertex(124, 130);
    endShape();
    
    stroke('black');
    strokeWeight(1);
    line(178, 252, 273, 196);
    line(180, 268, 277, 270);
    line(130, 248, 63, 203);
    line(131, 268, 45, 240);

}

function drawTopRightEmoji() {
    noStroke();
    fill(250, 165, 165);
    square(width/2, 0, width/2);
    
    //leaf me alone
    strokeWeight(4);
    stroke('black');
    fill('green');
    quad(517, 234, 515, 181, 450, 137, 476, 210);
    quad(538, 259, 469, 256, 449, 308, 507, 290);
    quad(552, 258, 529, 320, 544, 345, 575, 301);
    quad(539, 257, 484, 203, 433, 215, 480, 257);
    quad(541, 262, 498, 297, 492, 352, 543, 309);
    
    
    //skull
    strokeWeight(3);
    stroke('black');
    fill('white');
    circle(602,162,224);
    stroke('black');
    
    beginShape();
    vertex(508, 221);
    vertex(507, 247);
    vertex(522, 263);
    vertex(559, 277);
    vertex(560, 320);
    vertex(577, 336);
    //right
    vertex(627, 336);
    vertex(644, 320);
    vertex(644, 277);
    vertex(681, 263);
    vertex(696, 247);
    vertex(696, 221);
    endShape();
    
    //thenoseknows
    fill('black');
    triangle(586,270, 602,240, 618,270);
    circle(594,270,15);
    circle(610,270,15);
    
    //eyeyayayaya
    ellipse(552,200,60,50);
    ellipse(652,200,60,50);
    noStroke();
    fill('white');
    circle(552,200,47);
    circle(652,200,40);
    strokeWeight(2);
    stroke(64, 94, 194);
    fill(99, 247, 255);
    circle(552,200, 27);
    circle(652,200, 17);
    noStroke();
    fill('white');
    rect(614,165, 70,30);
    strokeWeight(4);
    stroke('black');
    line(616, 195, 688, 195);
    
    //188pxl. line from bottom skull
    
    //mouthy
    strokeWeight(2.5);
    stroke('black');
    line(585,306,585,335);
    line(602,306,602,335);
    line(619,306,619,335);
}

function drawBottomLeftEmoji() {
    noStroke();
    fill(252, 189, 239);
    square(0, height/2, width/2);
    
    //plate
    strokeWeight(6);
    stroke('grey');
    fill('lightgrey');
    ellipse(195,670,350,140);

    //pancake :(
    strokeWeight(4);
    stroke(138, 108, 63);
    fill(214, 179, 126);
    ellipse(193,660,280,100);
    ellipse(200,640,280,100);
    ellipse(190,610,280,100);
    ellipse(195,590,280,100);
    
    //syrup
    stroke(61, 36, 17);
    fill(97, 62, 34);
    ellipse(195,570,250,53);
    strokeWeight(10);
    stroke(97, 62, 34);
    line(81,577,81,616);
    line(105, 589, 105, 610);
    line(234, 597, 234, 640);
    line(313, 578, 313, 650);
    line(279, 591, 279, 620);
    strokeWeight(20);
    line(144, 596, 144, 660);
    line(255, 595, 255, 620);
    line(202, 599, 202, 610);
    strokeWeight(5);
    line(172, 599, 172, 620);
    line(295, 587, 295, 650);
    line(121, 594, 121, 630);
    line(69, 572, 69, 630);
    
    //is butter a carb?
    noStroke();
    fill('gold');
    quad(162, 555, 194, 551, 218, 564, 178, 569);

    //stars?
    drawStar();
    
    translate(260,230);
    drawStar();
    
function drawStar(){
    //ima-kll-smne-if-i-c-anymre-verters
    strokeWeight(2);
    stroke('white');
    fill('gold');
    beginShape();
    vertex(78, 419);
    vertex(60, 450);
    vertex(25, 464);
    vertex(58, 478);
    vertex(78, 519);
    vertex(97, 481);
    vertex(133, 465);
    vertex(99, 452);
    endShape();
    
    
}
    
    
}

function drawBottomRightEmoji() {
    translate(-260,-230);
    noStroke();
    fill(134, 146, 227);
    square(width/2, height/2, width/2);
    
    //i wannna cry
    
    noStroke();
    fill('gold')
    circle(600,590,250);
    
    //i.hate.it.here
    stroke('blue');
    fill('lightblue');
    rect(505,576,50,150);
    rect(635,576,50,150);
    
    
    stroke('black');
    strokeWeight(10);
    line(495, 576, 565, 576);
    line(625, 576, 695, 576);
    
    strokeWeight(5);
    line(565, 656, 625, 656);
    
    stroke(134, 146, 227);
    strokeWeight(50);
    noFill();
    circle(600,590,300);
    
}