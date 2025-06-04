function setup() {
    createCanvas(700, 600);
    background('lightblue')
}

function draw() {
    
    //sun
    fill(255,230,0)
    stroke(255,208,0)
    strokeWeight(5)
    circle(600,100,100)
    
    //cloud 1
    fill('white')
    noStroke('white')
    ellipse(100,150,150,100)
    ellipse(150,100,150,100)
    ellipse(200,150,150,100)
    
    //cloud 2
    fill('white')
    noStroke('white')
    ellipse(400,250,150,100)
    ellipse(450,200,150,100)
    ellipse(500,250,150,100)
    
    //ocean
    fill('LightSeaGreen')
    rect(0,350,800,200)
    
    //sky to cover ocean and create water texture
    fill('lightblue')
    noStroke('lightblue')
    circle(0,350,50)
    circle(50,350,50)
    circle(100,350,50)
    circle(150,350,50)
    circle(200,350,50)
    circle(250,350,50)
    circle(300,350,50)
    circle(350,350,50)
    circle(400,350,50)
    circle(450,350,50)
    circle(500,350,50)
    circle(550,350,50)
    circle(600,350,50)
    circle(650,350,50)
    circle(700,350,50)
    
    //sand
    fill('moccasin')
    rect(0,500,800,800)
    ellipse(100,510,300,100)
    
    //ocean to cover sand
    fill('LightSeaGreen')
    ellipse(394,490,300,100)
    
    //more sand
    fill('moccasin')
    ellipse(688,510,300,100)
    
    //sand bucket
    stroke('crimson')
    ellipse(125,530,50,60)
    fill('crimson')
    square(100,530,50)
    fill('morrasin')
    
    //sand to cover sand bucket
    fill('moccasin')
    noStroke('moccasin')
    circle(105,580,20)
    circle(125,580,20)
    circle(145,580,20)
    
    //stcik figure body
    stroke('black')
    noFill('moccasin')
    circle(582,439,80)
    line(581,480,581,543)
    line(581,543,554,580)
    line(581,543,609,580)
    line(581,512,537,490)
    line(581,512,625,490)
    
    //stick figure face
    circle(565,430,5)
    circle(597,430,5)
    line(568,452,596,452)

    //ice cream
    fill('HotPink')
    noStroke('HotPink')
    circle(526,472,30)
    fill('burlywood')
    noStroke('burlywood')
    triangle(539,480,513,480,525,511)

}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    noLoop();
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}