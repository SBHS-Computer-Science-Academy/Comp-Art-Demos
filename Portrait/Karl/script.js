function setup() {
    createCanvas(1000, 800);
    background(171, 186, 237);
}

function draw() {
    
    //floor
    fill(148, 52, 50);
    rect(0,500,1000,500);
    
    //carpet
    noStroke();
    fill(250, 249, 237);
    square(320,510,350);
    triangle(320,510,220,800,320,800);
    triangle(670,510,770,800,670,800);
    
    //walls
    noStroke();
    fill(71, 100, 179);
    rect(0,0,250,500);
    rect(750,0,250,500);
    triangle(0,500,0,550,250,500);
    triangle(750,500,1000,550,1000,500);
    
    //window
    ellipse(500,130,250,200);
    rect(375,140,250,300);
    stroke('gold');
    strokeWeight(4);
    fill('white');
    circle(500,55,80);
    triangle(500,20,470,80,530,80);
    triangle(485,50,515,50,500,80);
    
    //alter
    noStroke();
    translate(10,0)
    fill('darkblue');
    rect(460,270,60,160);
    square(450,355,80);
    ellipse(490,425,100,25);
    ellipse(490,280,80,20);
    noFill();
    stroke('gold');
    strokeWeight(2);
    circle(490,300,25);
    circle(490,310,25);
    circle(490,320,25);
    circle(490,330,25);
    
    //stairs
    translate(-10,0);
    noStroke();
    fill(224, 224, 218);
    rect(260,430,480,60);
    rect(245,460,510,40);
    rect(235,480,530,30);
    fill(250, 249, 237);
    rect(390,430,220,30);
    rect(355,460,290,20);
    rect(330,480,330,30);
    
    //pillerLeft
    noStroke();
    fill(100, 163, 104);
    circle(185,140,50);
    circle(160,160,50);
    circle(140,170,30);
    circle(215,160,65);
    circle(185,160,50);
    noStroke();
    fill('white');
    rect(145,190,80,350);
    stroke(219, 219, 219);
    strokeWeight(8);
    line(155,210,155,520);
    line(175,210,175,520);
    line(195,210,195,520);
    line(215,210,215,520);
    noStroke();
    rect(130,180,110,30);
    rect(130,520,110,30);
    noStroke();
    fill(100, 163, 104);
    circle(185,180,30);
    circle(155,180,40);
    circle(235,180,20);
    fill('pink');
    circle(220,165,10);
    circle(160,165,10);
    circle(185,135,10);
    
    //pillerRight
    translate(630,0);
    noStroke();
    fill(100, 163, 104);
    circle(185,140,50);
    circle(160,160,50);
    circle(140,170,30);
    circle(215,160,65);
    circle(185,160,50);
    noStroke();
    fill('white');
    rect(145,190,80,350);
    stroke(219, 219, 219);
    strokeWeight(8);
    line(155,210,155,520);
    line(175,210,175,520);
    line(195,210,195,520);
    line(215,210,215,520);
    noStroke();
    rect(130,180,110,30);
    rect(130,520,110,30);
    noStroke();
    fill(100, 163, 104);
    circle(185,180,30);
    circle(155,180,40);
    circle(235,180,20);
    fill('pink');
    circle(220,165,10);
    circle(160,165,10);
    circle(185,135,10);
    
    //pillerLeftbottom
    translate(125,250)
    noStroke();
    fill(100, 163, 104);
    circle(185,140,50);
    circle(160,160,50);
    circle(140,170,30);
    circle(215,160,65);
    circle(185,160,50);
    noStroke();
    fill('white');
    rect(145,190,80,350);
    stroke(219, 219, 219);
    strokeWeight(8);
    line(155,210,155,520);
    line(175,210,175,520);
    line(195,210,195,520);
    line(215,210,215,520);
    noStroke();
    rect(130,180,110,30);
    rect(130,520,110,30);
    noStroke();
    fill(100, 163, 104);
    circle(185,180,30);
    circle(155,180,40);
    circle(235,180,20);
    fill('pink');
    circle(220,165,10);
    circle(160,165,10);
    circle(185,135,10);
    
    //pillerrightbottom
    translate(-880,0);
    noStroke();
    fill(100, 163, 104);
    circle(185,140,50);
    circle(160,160,50);
    circle(140,170,30);
    circle(215,160,65);
    circle(185,160,50);
    noStroke();
    fill('white');
    rect(145,190,80,350);
    stroke(219, 219, 219);
    strokeWeight(8);
    line(155,210,155,520);
    line(175,210,175,520);
    line(195,210,195,520);
    line(215,210,215,520);
    noStroke();
    rect(130,180,110,30);
    rect(130,520,110,30);
    noStroke();
    fill(100, 163, 104);
    circle(185,180,30);
    circle(155,180,40);
    circle(235,180,20);
    fill('pink');
    circle(220,165,10);
    circle(160,165,10);
    circle(185,135,10);
    
    //person
    translate(135,-250);
    stroke('black');
    fill('black');
    circle(210,385,40);
    line(210,405,190,490);
    line(190,490,185,570);
    line(190,490,160,530);
    line(160,530,140,495);
    line(205,430,225,500);
    line(205,430,165,430);
    line(165,430,145,405);
    
    
    
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    noLoop();
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}