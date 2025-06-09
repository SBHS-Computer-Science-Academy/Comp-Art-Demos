function setup() {
    createCanvas(800, 800);
    noLoop();
    angleMode(DEGREES);
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
    fill("white");
    square(0, 0, width/2);

    fill('Bisque')
    ellipse(180, 180, 250, 300)
    
    fill('white')
  arc(125, 150, 80, 80, 0, 225, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
    // CHORD fill mode.
  arc(235, 150, 80, 80, -45,180, CHORD);

  describe('A white circle with a black outline missing a section from the top-left .');
    
    
   fill('black')
  arc(180, 250, 80, 80, 0, 180, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
    
    square(130, 165, 20, 20)
    
    square(210, 165, 20, 20)
    
    // CHORD fill mode.
  arc(180, 130, 250, 250, 180, 0, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
}


function drawTopRightEmoji() {
    fill("Gainsboro");
    square(width/2, 0, width/2);
    
    fill('Bisque')
    ellipse(600, 180, 250, 300)
    
    fill('white')
    square(515, 120, 70, 70)
    square(620, 120, 70, 70)
    
    fill('black')
    square(520, 130, 20, 20)
    
    square(625, 130, 20, 20)
    
    rect(550, 250, 100, 5)
    
    // CHORD fill mode.
  arc(600, 130, 250, 250, 180, 0, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
  
  arc(180, 320, 50, 50, 0, 180, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
  
  
}

function drawBottomLeftEmoji() {
    fill("Gainsboro");
    square(0, height/2, width/2);
    
    fill('Bisque')
    ellipse(180, 600, 250, 300)
  
    fill('black')
     rect(90, 550, 70, 10)
    rect(200, 550, 70, 10)
    
    
    fill('LightCyan')
    ellipse(267, 570, 20, 30)
    ellipse(267, 595, 20, 30)
    ellipse(267, 620, 20, 30)
    
    fill('black')
  arc(180, 535, 250, 250, 180, 0, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.')
    
    
  arc(180, 675, 100, 100, 180, 0, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.')
    
    
  arc(180, 739, 50, 50, 0, 180, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.')
    
    arc(600, 320, 50, 50, 0, 180, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
    
    
    
    
}

function drawBottomRightEmoji() {
    fill("white");
    square(width/2, height/2, width/2);
    fill('Bisque')
    ellipse(600, 600, 250, 300)
    
    fill('black') 
    square(510, 530, 80, 80)
    square(610, 530, 80, 80)
    
    fill('Bisque')
    square(517, 538, 65, 65)
    square(617, 538, 65, 65)
    
    fill('white')
    square(527, 548, 45, 45)
    square(627, 548, 45, 45)
    
    fill('black')
    square(537, 558, 25, 25)
    square(637, 558, 25, 25)
    
    rect(585, 570, 30, 10)
    rect(690, 570, 35, 10)
    rect(475, 570, 35, 10)
    
    arc(605, 630, 110, 110, 40, 140, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
  
  fill('white')
  rect(593, 665, 12, 30)
  rect(605, 665, 12, 30)
  
  fill('black')
  arc(600, 540, 250, 250, 180, 0, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
  
  arc(600, 740, 50, 50, 0, 180, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');
  
}