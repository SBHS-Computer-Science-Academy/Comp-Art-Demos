function setup() {
    createCanvas(500, 500);
    background('azure');
}

function draw() {
    
    //grass
    strokeWeight(10);
    stroke('palegreen');
    line(0,450,500,450);
    noStroke();
    fill('lightgreen');
    rect(0,450,500,50);
    //grass texture
    fill('limegreen');
    triangle(45,460,40,470,50,470);
    triangle(55,465,50,475,60,475);
    triangle(155,465,150,475,160,475);
    triangle(205,490,200,500,210,500);
    triangle(253,453,245,460,260,460);
    //house
    noStroke();
    fill(166, 114, 76);
    square(285,245,210);
    //clouds
    strokeWeight(1);
    stroke(240, 241, 242);
    fill(255, 255, 255);
    ellipse(380,85,70,50);
    ellipse(440,60,60,30);
    ellipse(390,55,50,25);
    ellipse(230,30,80,45);
    ellipse(250,65,65,40);
    ellipse(290,40,50,35);
    ellipse(415,40,40,20);
    ellipse(30,45,30,20);
    ellipse(75,55,70,50);
    ellipse(105,70,40,30);
    //roof
    noStroke();
    fill(138, 95, 63);
    triangle(385,130,285,245,495,245);
    //chimeny
    fill(117, 81, 54);
    quad(415,135,445,135,445,195,415,165);
    //smoke
    noStroke();
    fill(153, 150, 139);
    circle(445,120,20);
    circle(435,105,20);
    circle(420,125,15);
    circle(420,80,15);
    //door
    strokeWeight(3);
    fill(138, 95, 63);
    stroke(209, 144, 96);
    rect(345,330,100,125);
    fill(209, 144, 96);
    circle(430,400,5);
    //window 1
    fill(145, 202, 235);
    square(305,275,35);
    line(305,292,340,292);
    line(322,310,322,275);
    //window 2
    square(445,275,35);
    line(462,275,462,310);
    line(445,293,480,293);
    //sun
    noStroke();
    fill(252, 199, 38);
    circle(60,60,65);
    //rays
    strokeWeight(3);
    stroke(252, 199, 38);
    line(95,40,120,30);
    line(25,85,10,100);
    line(20,55,1,50);
    line(35,25,20,5);
    line(65,20,70,0);
    line(100,75,120,80);
    line(65,100,70,120);
    //stick figure
    fill('azure');
    stroke('black');
    strokeWeight(3);
    //head/face
    circle(190,375,30);
    point(185,370);
    point(195,370);
    //smile
    fill('black');
    circle(190,380,5);
    noStroke();
    fill('azure');
    ellipse(190,377,8,7);
    //body
    stroke('black');
    strokeWeight(3);
    line(190,390,190,435);
    //arms
    line(190,412.5,205,400);
    line(190,412.5,175,400);
    //legs
    line(190,435,205,455);
    line(190,435,175,455);
    //balloon
    stroke('gray')
    strokeWeight(1)
    line(205,400,215,330);
    noStroke();
    fill('hotpink')
    ellipse(215,315,30,40);
    triangle(215,333,207,340,220,340)
    
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    noLoop();
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}