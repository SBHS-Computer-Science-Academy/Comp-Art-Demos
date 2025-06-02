function setup() {
    createCanvas(800, 400);
    background(255, 222, 173);
    

    
//umbrella
strokeWeight(0)
    fill(252, 177, 189);
ellipse(190,280,150,90);
    fill(255, 222, 173);
rect(110,290,160,90);
stroke('white)')
strokeWeight(5)
line(190,290,210,400)

//bucket
strokeWeight(0)
    fill('red')
circle(123,348,45)
    fill(255, 222, 173)
circle(123,354,44)
    fill('red')
square(100,345,45)


//towel
strokeWeight(0)
    fill(252, 237, 136)
rect(250,300,400,400)
strokeWeight(7)
line(250,330,650,330)
line(250,360,650,360)
line(250,390,650,390)

//hair
strokeWeight(0)
    fill('black')
ellipse(312,360,180,105)


//Person
strokeWeight(8)
    stroke(232, 188, 137)
line(300,360,500,360)
line(495,360,565,383)
line(495,360,560,315)
line(359,362,438,331 )
line(359,362,438,381)
strokeWeight(0)
    fill(232, 188, 137)
circle(270,360,70)
   

//eyes
    fill('black')
circle(262,348,12)
circle(262,378,12)
    fill(232, 188, 137)
circle (259,348,12)
circle(259,378,12)
 
 fill('black')
arc(255,360,45,70, PI/2, 3*PI/2);
//smile
ellipse(288,362,10,30)
    fill(232, 188, 137)
ellipse(285,362,10,30)

    
//ocean
    strokeWeight(0)
    fill(70, 130, 180);
    rect(0,0,800,200);
    
//waves on shore
 fill(82, 142, 191);
ellipse(70,200,180,70);
    fill(70, 130, 180);
ellipse(70,190,180,70);

    fill(82,142, 191);
ellipse(250,190,180,70);
    fill(255, 222, 173);
ellipse(250,200,180,70);

    fill(82, 142, 191);
ellipse(430,200,180,70);
    fill(70, 130, 180);
ellipse(430,190,180,70);

    fill(82,142,191)
ellipse(580,220,180,70)
    fill(255, 222, 173)
ellipse(580,230,180,70)

    fill(82,142,191)
ellipse(755,210,180,70)
   

    
//waves 1
    fill(82, 142, 191);
ellipse(150,50,180,70);
    fill(70, 130, 180);
ellipse(150,60,180,70);
    fill(82, 142, 191);
ellipse(320,40,180,70);
    fill(70, 130, 180);
ellipse(320,30,180,70);
    fill(82, 142, 191);
ellipse(490,50,180,70);
    fill(70, 130, 180);
ellipse(490,60,180,70);
    
//fish body
    fill(247, 130, 52)
ellipse(500,110,50,25)
   fill(250, 248, 247)
circle(490,105,10)
    fill(5, 2, 0)
circle(488,106,5)
    
//waves 2
    fill(82, 142, 191)
ellipse(450,150,180,70)
    fill(70, 130, 180)
ellipse(450,160,180,70)

//waves on shore 
fill(70,130,180)
ellipse(747,200,180,70)
//wave 2
    fill(82, 142, 191)
ellipse(620,140,180,70)
    fill(70, 130, 180)
ellipse(620,130,180,70)
    
    //fish tail
fill(255, 146, 74)
triangle (520,110,535,90, 535, 130) 

//fish body
    fill(245, 47, 80)
ellipse(70,140,50,25)
   fill(250, 248, 247)
circle(60,135,10)
    fill(5, 2, 0)
circle(58,135,5)
//fish tail
    fill(250, 82, 110)
triangle (90,140,115,125,115,155) 
    
}

function draw() {
    
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    noLoop();
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}