function setup() {
    createCanvas(800, 800);
    noLoop();
    let width = 200
    let height = 200
    
    let x = 500
    let y = 700
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
    fill("yellow");
    square(0, 0, width/2);
    
    //head
    fill(246, 255, 84)
    circle(200,200,370)
    //eyes
    fill('white')
    circle(250,150,80)
circle(150,150,80)
fill('black')
circle(150,150,30)
circle(250,150,30)
strokeWeight(0)
fill(246, 255, 84)
rect(101,168,200,25)
strokeWeight(1)
//brows
line(100,65,180,65)
    line(220,65,300,65)
    //mouth
    fill('white')
    ellipse(200,300,200,60)
      strokeWeight(0)
    fill(246, 255, 84)
    rect(90,265,215,30)
    strokeWeight(1)
    line(105,310,295,310)
    
    
    

}

function drawTopRightEmoji() {
    fill("red");
    square(width/2, 0, width/2);
    //head
    fill(255, 105, 105)
    circle(600,200,370)
    //eyes
    fill('white')
    circle(650,150,80)
circle(550,150,80)
strokeWeight(0)
fill('black')
circle(650,160,40)
circle(550,160,40)
fill(255, 105, 105)
rect(505,98,200,45)
rect(505,178,200,45)

//brows
strokeWeight(1)
fill('black')
line(515,100,580,130)
line(620,130,680,100)
//mouth
strokeWeight(2)
stroke('black')
line(520,280,680,280)
    
}

function drawBottomLeftEmoji() {
    fill("green");
    square(0, height/2, width/2);
    //head
strokeWeight(1)
fill(27, 191, 43)
circle(200,600,373)
//eyes
fill('white')
circle(300,520,80)
circle(200,480,80)

fill('black')
circle(280,530,40)
circle(180,490,40)
strokeWeight(40)
stroke(27,191,43)
line(260,470,335,505)
line(140,455,250,455)
//mouth
strokeWeight(1)
stroke('black')
fill('white')
ellipse(243,637,150,30)
line (168,636,317,635)
}

function drawBottomRightEmoji() {
    fill("blue");
    square(width/2, height/2, width/2);
    //head
    fill(71, 78, 255)
    circle(600,600,370)
    //eyes
    fill('white')
    circle(550,550,80)
        circle(650,550,80)

        fill('black')
        circle(550,560,40)
        circle(650,560,40)
                strokeWeight(0)
        fill(71, 78, 255)
        rect(500,500,200,50)
        strokeWeight(1)
        //brows
        line(500,525,575,500)
        line(700,525,625,500)
        //mouth
    line(520,700,670,680)

}