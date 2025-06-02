function setup() {
    createCanvas(800, 600);
    background(174, 214, 241  )
}

function draw() {
    //sun
    stroke(248, 196, 113)
    strokeWeight(3)
    fill(247, 220, 111)
    ellipse(131,56,100,100)
    //clouds1
    fill(255)
    noStroke(255)
    ellipse(356,349,100,30)
    ellipse(345,365,100,30)
    ellipse(290,377,120,40)
    ellipse(400,377,120,47)
    //clouds2
    ellipse(0,54,190,35)
    ellipse(0,70,230,30)
    //clouds3
    ellipse(694,105,300,47)
    ellipse(694,75,190,60)
    ellipse(642,133,120,34)
    //cloud3
    ellipse(11,585,160,80)
    ellipse(3,600,240,60)
    //plane door
    stroke(86, 101, 115)
    fill(128, 139, 150  )
    ellipse(560,361,40,70)
    //planes body
    stroke(128, 139, 150)
    fill(171, 178, 185)
    rect(406,241,400,130)
    triangle(406,242,406,371,221,365)
    stroke(171, 178, 185)
    strokeWeight(5)
    line(406,245,406,367)
    //window
    stroke(128, 139, 150)
    strokeWeight(3)
    fill(214, 234, 248)
    triangle(391,271,325,320,391,326)
    fill(253, 235, 208)
    stroke(245, 180, 167)
    ellipse(375,317,8,8)
    stroke(255)
    line(356,303,372,321)
    strokeWeight(5)
    line(365,295,386,320)
    //windows
    fill(255)
    ellipse(465,294,15,20)
    ellipse(536,294,15,20)
    ellipse(625,293,15,20)
    ellipse(684,292,15,20)
    //wings
    stroke(128, 139, 150)
    fill(171, 178, 185)
triangle(503,318,682,415,634,313)
stroke(171, 178, 185)
strokeWeight(9)
line(488,317,640,314)
    //parachute
    fill(130, 224, 170  )
    strokeWeight(3)
    stroke(82, 190, 128  )
    ellipse(476,485,120,80)
    fill(174, 214, 241)
    stroke(174, 214, 241)
    rect(365,490,379,490)
    stroke(200)
    line(420,490,478,536)
    line(533,490,478,536)
    
    //person
    //backpack
    
      fill(198)
    stroke(188)
    ellipse(480,530,15,15)
    strokeWeight(2)
    stroke(237, 187, 153)
    fill(250, 229, 211)
    ellipse(479,520,10,12)
    stroke(165, 105, 189)
    fill(175, 122, 197)
    ellipse(479,534,5,24)
    line(476,528,467,531)
    line(480,530,492,531)
    stroke(41, 128, 185  )
    line(477,547,473,555)
    line(481,547,481,555)
    
    //birds
    fill(255)
    stroke(210)
    strokeWeight(2)
    rect(52,206,15,15)
    rect(104,260,15,15)
    rect(162,194,12,12)
    stroke(250)
    line(83,261,140,261)
    line(33,207,85,207)
    line(143,194,194,194)
    stroke(243, 169, 39)
  fill(255, 181, 51)
  ellipse(60,211,3,1)
  ellipse(111,265,3,1)
  ellipse(168,199,3,1)
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    noLoop();
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}